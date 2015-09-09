(function() {
  var frautoSelects;
  'use strict';
  var helpers = registriaModules.helpers,
      services = registriaModules.services,
      formHelpers = registriaModules.formHelpers;

  /*
   *  Set HTML5 field types.  The fields are populated via liquid, so we cannot
   *  do this directly in the HTML.  It must be done after page load. 
   *  Accepts a custom field-type map or falls back to reasonable defaults.
   *  field-type map should be as so:
   *  {
   *    <field_id>: <field type>,
   *    <field_id>: <field type>,
   *    <field_id>: <field type>
   *  }
   */
  var setFieldTypes = (function(fieldTypes) {
    fieldTypes =  fieldTypes || {
      email: 'email',
      phone: 'tel',
      purchase_date: 'date',
      input_version: 'hidden'
    };

    return function() {
      $(':input').each(function() {
        var id = $(this).attr('id');
        if (fieldTypes[id] !== undefined) {
          $(this).get(0).type = fieldTypes[id];
          if (fieldTypes[id] == 'hidden') {
            $('label[for="'+ $(this).attr('id') +']"').remove();
          }
        }
      });
    };
  }());

  /*
   *  Instead of posting the form on submit, we want to submit the data
   *  via Ajax and reset the form so we can process more registrations without
   *  waiting for the last submission to finish or reloading the page.
   *  RapidFire facilitates this behavior and keeps record of all registrations
   *  submitted during the user's session.
   */
  var rapidFire = (function() {
    var stopEvent = function(event) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    };

    var onFormSubmit = function(form) {
      var form = form || document.getElementById('registria_form');
      var formData = helpers.objectify($(form).serialize());
      if (!$(form).valid()) {
        $(':input.invalid').first().focus();
        return false;
      }
      addToQueue(formData);
      resetForm(form);
    };

    var addToQueue = function(formData) {
      var queueItem = document.createElement('div');
      var name = formData["user[first_name]"] +' '+ formData["user[last_name]"];
      $(queueItem).addClass('queueItem bg-warning');
      $(queueItem).append(name);
      $('#quickQueue').find('#queue-list').prepend(queueItem);
      window.setTimeout(function() {
        $(queueItem).removeClass('bg-warning');
        $(queueItem).addClass('bg-success');
        $('#quickQueue .count').text($('#quickQueue').find('.queueItem').length);
      }, helpers.randomNumber(6000, 12000));
    };

    var clearQueue = function() {
      $('#quickQueue').find('#queue-list').html('');
    };

    var sendForm = function() {
    };

    var resetForm = function(form) {
      if (form instanceof jQuery) form = form[0];
      form.reset();
      $(form).find('.touched').removeClass('touched');
      window.scrollTo(0,0);
      $(form).find(':input:visible').not('button').first().focus();
    };

    return {
      init: function() {
        // attach event handlers
        $('.clear-queue').click(function() {
          clearQueue();
        });


        $('#registria_form').unbind('submit').submit(function(event) {
          $(':input').each(function() {
            $(this).addClass('touched');
          });
          stopEvent(event);
          onFormSubmit();
        });
        resetForm($('#registria_form'));
      }
    };
  }());

  /*
   *  Since this form is for processing paper cards, some end users will not
   *  provide an email address even though our platform requires one.
   *  This function provides a method for easily populating a fake email address.
   */
  var emailFaker = (function() {
    var generateEmail = function() {
      var value = 'noemail+'+ $('#first_name').val() + $('#last_name').val();
      value += helpers.randomNumber(1,1000);
      value += '@registria.com';
      return value;
    };

    var setEmail = function(field) {
      $(field).val(function() {
        return generateEmail();
      });
    };

    var disableCommPrefs = function() {
      $('#receive_product_communication').prop('checked', false).attr('disabled', '');
    }

    var attachHandler = function(field, activationKey) {
      field = field || $('#email');
      activationKey = activationKey || 220;

      $(field).keydown(function(event) {
        if (event.keyCode == activationKey) {
          setEmail(field);
          disableCommPrefs();
          $(field).parent().next().find(':input').focus();
          return false;
        }
      });
    };

    return {
      init: function(field, activationKey) {
        field = field || $('#email');
        attachHandler($('#email'), activationKey);
      }
    };
  }());

  /*
   *  Hidden fields don't need labels, let's remove them.
   */
  var removeLabelsForHiddenFields = function() {
    $(':input[type="hidden"]').each(function() {
      var label = $('label[for="'+ $(this).attr('id') +'"]');
      if (label.length > 0) {
        $(label).remove();
      }
    });
  };

  /*
   *  Adds styling class to value lists for checkbox or radio fields.
   */
  var styleLists = (function() {
    $('li ul').each(function() {
      $(this).parents('li').first().addClass('list-field');
    });
  });
  
  /*
   *  The form is being populated by '{{ fieldset }}' populates each fields after
   *  the other.  This function will group fields by the targeted db object.
   */
  var arrangeForm = (function() {
    var fieldsets = {};
    var createFieldset = function(name) {
      var list,
          legendLabel,
          fieldset = document.createElement('fieldset');

      $(fieldset).attr('name', name);
      $(fieldset).attr('id', name+'-fieldset');

      legendLabel = name[0].toUpperCase()+name.slice(1);
      $(fieldset).append('<legend>'+ legendLabel + '</legend>');

      $(fieldset).append('<ul></ul>');
      fieldsets[name] = fieldset;
      $(fieldset).appendTo('#registria_form');
    };

    var arrangeFields = function() {
      $(':input:visible').not('button, [type="submit"]').each(function() {
        var name = $(this).attr('name'),
            fieldsetName,
            fieldset,
            field;

        if ($(this).parent().is('li li').length > 0) return false;
        if (name === undefined) return false;
        if (name.indexOf('[') === -1) return false;
        fieldsetName = name.slice(0, name.indexOf('['));
        if (fieldsets[fieldsetName] === undefined) createFieldset(fieldsetName); 
        fieldset = fieldsets[fieldsetName];
        field = $(this).parents('li').last();
        $(field).detach().appendTo(fieldset);
        $(field).append('<span class="messages"></span>');
      });
    };

    return function() {
      arrangeFields();
      $('#next_button').detach().appendTo('#registria_form');
    };

  }());

  /*
   *  Find all selects and make them a Frauto instance.
   */
  var autoFrauto = function() {
    var frautos = {};
    $('select').each(function() {
      var synonyms = {};
      if ($(this).is(':hidden')) return false;
      var id = $(this).attr('id');
      frautos[id] = new FrautoSelect(this);
    });
    return frautos;
  };

  /*
   *  Create productFrauto
   */
  var createProductFrauto = function(filterOptions) {
    var productField = $('#model');
    filterOptions = filterOptions || {};
    if (productField.length > 0) {
      return services.requestProductList(filterOptions, function(data) {
        var optionList = data.products.sort(helpers.skuSort);
        return new frautoInput(productField, optionList);
      });
    } 
  };

  /*
   *  Default country to US and hide the field.  This form is for processing
   *  US registrations.
   */
  var setCountry = function() {
    $('#country').parent('li').remove();
    $('form').append('<input class="registria_field  form-control" id="country" name="user[address_attributes][country]" title="" type="hidden" value="UNITED STATES">');
  };

  /*
   *  Disable browser autocomplete functionality because we don't want to 
   *  duplicate information and because it interferes with Frauto.
   */
  var disableAutoCompletes = function() {
    $(':input').each(function() {
      $(this).attr('autocomplete', 'off');
    });
  };

  /*
  *  Labels for checkboxes and radio buttons are placed after the input
  *  by the platform. This function moves them to be before the input.
  */
  var arrangeChecksAndRadios = function() {
    $('input[type="checkbox"], input[type="radio"]').each(function() {
      var nextElement = $(this).next();
      if ($(nextElement).is('label')) {
        $(nextElement).detach().insertBefore(this);
      }
    });
  };

  /*
   *  Makes the whole li that contains a checkbox or radio button clickable
   */
  var bigCheckTarget = function() {
    $('input[type="checkbox"], input[type="radio"]').each(function() {
      $(this).parent('li').click(function() {
        $(this).click();
      });
    });
  }

  /*
   *  This function attaches the jQuery datepicker to all date fields if the
   *  browser does not support the HTML5 date type.
   */
  var fallbackOnDatepicker = function() {
    $(':input[type="date"]').each(function() {
      if ($(this).prop('type') === 'text') {
        $(this).datepicker();
      }
    });
  };

  /*
   *  Add mask to phone to make input more intuitive
   */
  var maskPhone = function() {
    $('#phone').attr('placeholder', '+1(   )   -')
    if($.mask) $('#phone').mask('+1(999)999-9999', {placeholder:' '});
  };

  $(function() {
    var frautoSelects = {};
    setFieldTypes();
    removeLabelsForHiddenFields();
    emailFaker.init($('#email'));
    styleLists();
    arrangeForm();
    setCountry();
    frautoSelects.autoFrautos = autoFrauto();
    frautoSelects.product = createProductFrauto();
    disableAutoCompletes();
    arrangeChecksAndRadios();
    rapidFire.init();
    fallbackOnDatepicker();
    $('#input_version').val('AI8');
    maskPhone();
    formHelpers.useNativeValidation($('#registria_form'));

    registriaModules.tipper($('#email'), 'press \'\\\' to auto-fill a fake email address');

    $(':input').blur(function() {
      $(this).addClass('touched');
    });

    // Temporary helper event to make testing easier for the developer.
    $('#pop-form').click(function() {
      helpers.populateFields(localStorage.getItem('formString'));
    });

  });
}());
