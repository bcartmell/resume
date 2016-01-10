var registriaModules = (function() {
  return {
    /* ======================================== *\
       Helper functions
    \* ======================================== */

    helpers: {
      /*
       *  Takes serialized input and checks each paramater for a field by the same name.
       *  If a matching field is found, it's value is updated to that of the paramater
       */
      populateFields: function(input) {
        var paramString = registriaModules.helpers.convertUrlCodes(input);
        var params = registriaModules.helpers.objectify(paramString);
        var param, field;
        for (param in params) {
          if (params.hasOwnProperty(param)) {
            field = document.getElementsByName(param);
            if (field && $(field).attr('type') !== 'hidden') {
              $(field).val(params[param]);
            } 
          }
        }
      },

      // This is a function for comparing skus 
      // being passed to Array.prototype.sort();
      skuSort: function(a,b) {
        if (a.product_sku > b.product_sku) {
          return 1;
        } else {
          return -1;
        }
      },

      /*
       *  Adjusts number returned by Math.random() 
       *  to be between a specified range
       */
      randomNumber: function(min, max) {
        min = min || 1;
        max = max || 100;
        return Math.random()*(min-max)+min;
      },

      saveForm: function() {
        var formString = $('#registria_form').serialize();
        localStorage.setItem('formString', formString);
      },

      /*
       *Extracts url paramaters submits it to populateFields();
       */
      setFieldValuesFromParams: function() {
        var param,
            paramString = window.location.search.slice(1);
        registriaModules.helpers.populateFields(paramString);
      },

      /*
      *  changeText() replaces the text of an HTML node (target)
      *  with the text that you supply (newText) while 
      *  providing a fade in/out effect that is less harsh 
      *  on the eyes than simply changing the text.
      */
      changeText: function(target, newText) {
        $(target).fadeOut(100, function() {
          $(target).text(newText).fadeIn(100);
        });
      },

      /*
       *  changeFeildLabel() changes the text of a field label.
       *  It takes the label selector and the new value as arguments.
       */
      changeFeildLabel: function(label, newValue) {
        var oldValue = $(label).html();
        var innerTag = '';
        var stopAtIndex = oldValue.indexOf('<');
        if (stopAtIndex !== -1) innerTag = oldValue.slice(stopAtIndex);
        $(label).html(newValue +' '+ innerTag);
      },

      // Scroll page to top to fix browser behaviors that would
      // start your page not at the top.
      scrollTop: function() {
        window.scrollTo(0,0);
      },

      urlCodes: function(code) {
        // feel free to add more as needed
        var urlCodes = {
          '20': ' ',
          '40': '@',
          '5B': '[',
          '5D': ']'
        };
        if (code.indexOf('%') !== -1) code = code.slice(1);
        return urlCodes[code] || code;
      },

      convertUrlCodes: function(input) {
        var i=0,
            code;
        while (input.indexOf('%') !== -1) {
          i = input.indexOf('%');
          code = input.slice(i, i+3);
          input = input.replace(code, registriaModules.helpers.urlCodes(code));
        }
        return input;
      },

      // Takes a param string and creates an object from it.
      // Param string should be formatted as "label1=value1&label2=value2".
      // This is the format of parameters used by Ajax calls
      objectify: function objectify(input) {
        input = registriaModules.helpers.convertUrlCodes(input);
        var pairs = input.split('&'),
            pairsCount = pairs.length,
            output = {},
            i, 
            pair;
        for (i=pairsCount-1; i>=0; i -= 1) {
          pair = pairs[i].split('=');
          output[pair[0]] = pair[1];
        }
        return output;
      },

      // Checks that a number is greater than zero.
      // Converts strings if necessary
      // and return false in the event of NaN.
      // This function is more useful than input>0 because input>0 will 
      // return true if input is NaN.
      greaterThanZero: function greaterThanZero(input) {
        input = parseInt(input);
        if (input.toString() === 'NaN') return false;
        return (input>0);
      },

      // Limit the number of checkboxes that can be checked within a group.
      //
      // Arguments:
      // propName is the name attribute that is shared by the checkbox set.
      // limit is the maximum number of checkboxes that can be checked.
      // limitExeeded is the function to be called when the limit is exeeded.
      limitCheckboxes: function limitCheckboxes(propName, limit, limitExeeded, limitNotExeeded) {
        var checkboxList = $(':input[type="checkbox"][name="'+ propName +'"]'),
            container = $(checkboxList).parents('ul');
        if (!registriaModules.helpers.greaterThanZero(limit)) {
          throw('limit must be a number greater than 0');
        }
        $(container).on('change', checkboxList, function() {
          if ($(container).find(':checked').length >= limit) {
            limitExeeded(checkboxList, limit);
          }
          else {
            limitNotExeeded(checkboxList, limit);
          }
        });
      },
      
      // Ensures a selected element is selected as a navitive 
      // DOM object as opposed to a jQuery object or DOM array.
      nativeElement: function nativeElement(target) {
        if (jQuery && target instanceof jQuery) return target[0];
        if (target && target[0]) return target[0];
        return target;
      }

    },

    /* ======================================== *\
       Form Helpers
    \* ======================================== */
    formHelpers: {
      useNativeValidation: function useNativeValidation(form) {
        form = form || document.getElementsByTagName('form');

        // Ensure form is a native element,
        // we can wrap it with $() if we need jQuery
        form = registriaModules.helpers.nativeElement(form);

        // Effectively disable jQuery validate
        $(form).validate().settings.ignore = '*'; 

        // Let the browser validate
        form.removeAttribute('novalidate');

        // Copy rules from jQuery to HTML
        $(form).find(':input').each(function() {
          var field = this,
              fieldRules = $(field).rules(),
              rule;
          for (rule in fieldRules) {
            switch (rule) {
              default:
                //  nothing to do
                break;
              case 'required':
                field.setAttribute('required','');
                break;
              case 'regex':
                field.setAttribute('pattern', fieldRules[rule]);
                break;
            }
          }
          $(field).rules('remove');
        });
      }
    },


    /* ======================================== *\
       Services
    \* ======================================== */

    services: {
      requestProductList: function requestProductList(params, callback) {
        $.ajax({
          url: '/services/product_filtered_autocomplete',
        data: params,
        success: function(data) {
          callback(data);
        },
        fail: function(err) {
          throw err;
        }
        });
      },
    },

    /* ======================================== *\
      Sticky Footer
    \* ======================================== */
    
    /*
    *  stickyFooter keeps the footer pinned to the bottom of the page
    *  when the page is smaller than the window.
    *  To use, call stickyFooter.init().  
    *  Pass an optional options argument to change defaults.  
    *
    *  Option and defaults:
    *    footer - The footer element
    *      defaults to 'footer'
    *
    *    exlude - Selector for elements at the bottom of the body that should
    *    not be wrapped by the stickyFooter wrapper
    *      defaults to '.modal'
    *
    *    wrapperId - Id to use for the stickyFooter wrapper.
    *      defaults to 'sticky-footer-wrapper'
    *    
    *    spacerId - Id to use for the stickyFooter spacer which ensures
    *    that footer, which is absolutely positioned, does not overlap 
    *    content.
    *      defaults to 'sticky-footer-spacer'
    */
        
    stickyFooter: (function(options){
      var self = this;
      options = options || {};
      this.footer = options.footer || 'footer';
      this.exlude = options.exlude || '.modal';
      this.wrapperId = options.wrapper || 'sticky-footer-wrapper';
      this.spacerId = options.spacerId || 'sticky-footer-spacer';
      return {
        init: function(callback) {
          var wrapperMarkup = '<div id="'+ this.wrapperId +'"></div>';
          if ($('#'+ this.wrapperId).length === 0) {
            $('body').children().not(this.exlude).wrapAll(wrapperMarkup);
          }

          $(this.footer).before('<div id="'+ this.spacerId +'"></div>');
          this.calc();
          if (callback) callback();
        },
        calc: function() {
          var footer = $(this.footer);
          var spacer = $('#'+ this.spacerId);
          var footerHeight = $(this.footer).outerHeight();
          var footerMargin = parseInt($(this.footer).css('margin-top'));
          var spacerHeight = footerHeight+footerMargin;
          $(spacer).css('height', spacerHeight);
        }
      };
    }()),

    /* ======================================== *\
      Active Menu Item
    \* ======================================== */

    /*
     *  activeMenuItem automatically looks for links in your navigation that
     *  match the current URL and adds an active class that can be styled to
     *  indicate to the user the active menu item.
     *  To use, just call activeMenuItem.init() after page is ready.
     */

    activeMenuItem: {
      init: function(options) {
        var menu = options.menu || 'header nav';
        var activeClass = options.activeClass || 'active';
        var menuItems = $(menu).find('li').each(function() {
          if ($(this).find('a').attr('href') === window.location.pathname)
          $(this).addClass(activeClass);
        });
      }
    },

    /* ======================================== *\
      Shipping Address Same as Billing
    \* ======================================== */

    /*
     *  shippingAddressSameAsBilling provides functionality for checkout pages
     *  to for users to only enter their address once if they want to use the
     *  same address for shipping and billing.
     *  To use, call shippingAddressSameAsBilling.init() after page is ready
     */

    shippingAddressSameAsBilling: {
      enabled: false,
      updateShipping: function() {
        var shippingFields = {
          firstName: $('#shipping_first_name'),
          lastName: $('#shipping_last_name'),
          address1: $('#shipping_address1'),
          address2: $('#shipping_address2'),
          city: $('#shipping_city'),
          state: $('#shipping_state'),
          zip: $('#shipping_zip')
        };

        var addressDetails = {
          firstName: $('#billing_address #billing_first_name').val(),
          lastName: $('#billing_address #billing_last_name').val(),
          address1: $('#billing_address #billing_address1').val(),
          address2: $('#billing_address #billing_address2').val(),
          city: $('#billing_address #billing_city').val(),
          state: $('#billing_address #billing_state').val(),
          zip: $('#billing_address #billing_zip').val()
        };

        for (var field in shippingFields) {
          var fieldName = field;
          if(addressDetails[fieldName] !== undefined) {
            $(shippingFields[fieldName]).val(addressDetails[fieldName]);
          }
          else {
            $(shippingFields[fieldName]).val('');
          }
          $(shippingFields[fieldName]).attr('disabled', 'disabled');
          if ($(shippingFields[fieldName]).hasClass('invalid')) {
            $(shippingFields[fieldName]).valid();
          }
        }
      },
      init: function(controlCheckbox) {
        controlCheckbox = controlCheckbox || $('#billing-same-as-shipping');
        $(controlCheckbox).change(function() {
          if ($(this).is(':checked'))
          shippingAddressSameAsBilling.enable();
          else 
          shippingAddressSameAsBilling.disable();
        });
      },

      disable: function() {
        $('#shipping_address').show().find(':input').each(function() {
          $(this).removeAttr('disabled');
        });
        shippingAddressSameAsBilling.enabled = false;
      },

      enable: function() {
        $('#shipping_address').hide();
        shippingAddressSameAsBilling.updateShipping();
        shippingAddressSameAsBilling.enabled = true;
      }
    },

    /* ======================================== *\
      Taximator - sales tax estimator
    \* ======================================== */

/*
 *    Taximator provides a tax extimates during checkout process.
 *    To use, call Taximator.init() when page is ready.  Pass in an optional
 *    options object to overwrite defaults
 *
 *    options and defaults:
 *      showPromptButton - selector for button to trigger a tax estimation dialog
 *        defaults to '.get_tax_estimate'
 *
 *      submitZipButton - selector for button to submit zip for tax estimation
 *        defaults to '#submit_ssc_zip'
 *
 *      zipField - Selector for the text field in which the user will enter the 
 *      zip code that we will use to run the tax estimate
 *        defaults to '#ssc_zip_input'
 *
 *      billingZipField - Selector for billing zip field.  After we have run
 *      a tax estimate, we will auto-populate the billing zipcode field with
 *      the zipcode that the user entered in the zipField
 *        defaults to '#billing_zip'
 */

    taximator: {
      getTax: function(zipcode, callback) {
        $('#taximator-error').fadeOut(100, function() {
          $(this).remove();
        });

        $.ajax({
          type: 'POST',
          url: '/icon/tax',
          data: {
            'zip': zipcode
          },
          success: function(data){
            callback(data);
          },
          error: function(err) {
            taximator.handleError(err);
          }
        });
      },

      handleError: function(err) {
        var errMarkup = '<p id="taximator-error" class="text-left alert bg-danger text-danger">';
        errMarkup += 'Unable to calculate tax at this time. ';
        errMarkup += ' Please contact customer service at 800-677-3838.';
        errMarkup += '</p>';
        $('#ssc_zip_input').after(errMarkup);
      },

      showPrompt: function() {
        $('#ssc_zip_prompt').slideToggle('fast');
        $('#ssc_zip_input').focus();
      },

      hidePrompt: function() {
        $('#ssc_zip_prompt').slideUp('fast');
      },

      saveEstimate: function(estimate) {
        sessionStorage.ssc_tax = estimate.estimated_tax_total;
        sessionStorage.ssc_total = estimate.estimated_cart_total;
      },

      displayEstimate: function() {
        $('#ssc_tax').text('$'+ (parseFloat(sessionStorage.ssc_tax).toFixed(2)));
        $('#ssc_total').text('$'+ (parseFloat(sessionStorage.ssc_total).toFixed(2)));
      },

      clearEstimate: function() {
        sessionStorage.removeItem('ssc_tax');
        sessionStorage.removeItem('ssc_total');
        sessionStorage.removeItem('ssc_zip');
      },
      init: function(options) {
        var showPromptButton = options.showPromptButton || '.get_tax_estimate';
        var submitZipButton = options.submitZipButton || '#submit_ssc_zip';
        var zipField = options.zipField || '#ssc_zip_input';
        var billingZipField = options.billingZipField || '#billing_zip';

        if (sessionStorage.ssc_tax && sessionStorage.ssc_total) {
          taximator.displayEstimate();
        }

        if (sessionStorage.ssc_zip) {
          $('#billing_zip').val(sessionStorage.ssc_zip);
        }

        $(showPromptButton).click(function() {
          taximator.showPrompt();
        });

        $(submitZipButton).click(function() {
          sessionStorage.ssc_zip = $(zipField).val();
          $(billingZipField).val(sessionStorage.ssc_zip);
          taximator.getTax(sessionStorage.ssc_zip, function(result) {
            taximator.saveEstimate(result);
            taximator.displayEstimate();
            taximator.hidePrompt();
          });
        });
        if ($(zipField).val() !== '' && !sessionStorage.ssc_tax) {
          $(submitZipButton).click();
        } 
      }
    },

    /* ======================================== *\
       Tipper
    \* ======================================== */
    tipper: function(element, message) {
      element = registriaModules.helpers.nativeElement(element);
      var addUiTrigger = function addUiTrigger(element) {
        var container = element.parentElement;
        var triggerElem = document.createElement('span');
        triggerElem.classList.add('tipper-trigger');
        container.appendChild(triggerElem);
        return triggerElem;
      };

      var createDialog = function(target, message) {
        var container = target.parentElement;
        var dialog = document.createElement('div');
        var dialogP = document.createElement('p');
        dialog.classList.add('tipper-dialog');
        dialogP.textContent = message;
        dialog.style.display = 'none';
        dialog.appendChild(dialogP);
        container.appendChild(dialog);
        return dialog;
      };

      var Tooltip = function Tooltip(target, message) {
        var self = this;
        this.dialog = createDialog(target, message);
        this.trigger = addUiTrigger(target);
        this.trigger.addEventListener('click', function() {
          $(self.dialog).fadeToggle();
        });
      };

      return new Tooltip(element, message);
    },

    /* ======================================== *\
       Initialization
    \* ======================================== */

    init: function(options) {
      // activeMenu Initialization
      if (registriaModules.activeMenuItem) {
        registriaModules.activeMenuItem.init({
          menu: '.content .nav-stacked'
        });
      }

      //var stickyFooter = new registriaModules.StickyFooter({footer: '#sticky-footer'});
      registriaModules.stickyFooter.init();
      $(window).resize(function() {
        stickyFooter.calc();
      });
    }
  };
}());
