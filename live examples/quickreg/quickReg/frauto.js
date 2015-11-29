/*  
 *  FrautoComplete - A front-end implementation of auto-complete
 *  
 *  ARGUMENTS:
 *    filter (required) - The field that will accept user input.
 *    target (required) - The presumably hidden field that will accept the final value.
 *    handlers (optional) - an object that contains any custom functions that
 *      you need to be triggered after Frauto events.
 *      FOR EXAMPLE: the onSelection handler will be called after a
 *      new item is selected by your FrautoComplete instance.
 *
 *  
 *  USAGE EXAMPLE:
 *  // in addition to creating a Frauto instance with the new key-word,
 *  // you'll also need to assign the optionList, which will be the array
 *  // of all possible valid values from which the user can select.
 *  
 *  var productFrauto = new FrautoComplete( 
 *    $('#product-filter'),
 *    $('#product'),
 *    {
 *      handlers: {  
 *        onSelection: function() { !-- do something --! },
 *      },
 *      synonyms: {
 *        'United States': ['USA', 'US'],
 *        'Canada': ['CA', 'CAN']
 *      }
 *    }
 *  );
 *
 *  $.ajax({
 *     url: '/services/product_filtered_autocomplete',
 *     data: {},
 *     success: function(data) {
 *       productFrauto.optionList = data.products;
 *     },
 *     fail: function(err) {
 *       throw err;
 *     },
 *   });
 *
 */

function frautoInput(field, optionList, frautoOptions) {
  var targetField,
      filterField,
      container,
      frautoOptions = frautoOptions || {};

  if (!optionList || !optionList.length) return new Error('option list must be provided');
  if (field instanceof jQuery) field = field[0];

  container = field.parentElement;

  targetField = document.createElement('input');
  targetField.setAttribute('id', field.id);
  targetField.setAttribute('name', field.name);
  targetField.setAttribute('class', field.className);
  targetField.setAttribute('type', 'hidden');

  filterField = document.createElement('input');
  filterField.setAttribute('id', 'frauto-'+field.id);
  filterField.setAttribute('class', field.className);
  filterField.setAttribute('type', 'text');

  container.classList.add('frauto-container');
  container.removeChild(field);
  container.appendChild(filterField);
  container.appendChild(targetField);

  newFrauto = new FrautoComplete(filterField, targetField, frautoOptions);
  newFrauto.optionList = optionList;
  return newFrauto;
}

function FrautoSelect(field, frautoOptions) {
  var optionList,
      frautoOptions = frautoOptions || {};

  if ($(field).is(':not(select)')) return new Error('field must be a select');

  optionList = [];
  $(field).find('option').each(function() {
    optionList.push({ label: this.innerHTML, value: this.value });
  });

  if (FrautoSelect.commonSynonyms[$(field).attr('id')]) {
    frautoOptions.synonyms = FrautoSelect.commonSynonyms[$(field).attr('id')];
  }

  return frautoInput(field, optionList, frautoOptions);
}

FrautoSelect.commonSynonyms = {
  state: {
    AL: 'Alabama (AL)',
    AK: 'Alaska (AK)',
    AZ: 'Arizona (AZ)',
    AR: 'Arkansas (AR)',
    CA: 'California (CA)',
    CO: 'Colorado (CO)',
    CT: 'Connecticut (CT)',
    DE: 'Delaware (DE)',
    DC: 'District of Columbia (DC)',
    FL: 'Florida (FL)',
    GA: 'Georgia (GA)',
    HI: 'Hawaii (HI)',
    ID: 'Idaho (ID)',
    IL: 'Illinois (IL)',
    IN: 'Indiana (IN)',
    IA: 'Iowa (IA)',
    KS: 'Kansas (KS)',
    KY: 'Kentucky (KY)',
    LA: 'Louisiana (LA)',
    ME: 'Maine (ME)',
    MD: 'Maryland (MD)',
    MA: 'Massachusetts (MA)',
    MI: 'Michigan (MI)',
    MN: 'Minnesota (MN)',
    MS: 'Mississippi (MS)',
    MO: 'Missouri (MO)',
    MT: 'Montana (MT)',
    NE: 'Nebraska (NE)',
    NV: 'Nevada (NV)',
    NH: 'New Hampshire (NH)',
    NJ: 'New Jersey (NJ)',
    NM: 'New Mexico (NM)',
    NY: 'New York (NY)',
    NC: 'North Carolina (NC)',
    ND: 'North Dakota (ND)',
    OH: 'Ohio (OH)',
    OK: 'Oklahoma (OK)',
    OR: 'Oregon (OR)',
    PA: 'Pennsylvania (PA)',
    RI: 'Rhode Island (RI)',
    SC: 'South Carolina (SC)',
    SD: 'South Dakota (SD)',
    TN: 'Tennessee (TN)',
    TX: 'Texas (TX)',
    UT: 'Utah (UT)',
    VT: 'Vermont (VT)',
    VA: 'Virginia (VA)',
    WA: 'Washington (WA)',
    WV: 'West Virginia (WV)',
    WI: 'Wisconsin (WI)',
    WY: 'Wyoming (WY)'
  }
};

function FrautoComplete(filter, targetField, options) {
  // for consistent self-reference of this newly created object
  var self = this;

  options = options || {};

  // so we can attach handlers after-the-fact without errors
  this.handlers = options.handlers || {};
  this.synonyms = options.synonyms || {};
  this.listLimit = options.listLimit || Infinity;

  // Require jQuery
  if (!jQuery) throw new Error('FrautoComplete requires jQuery, which was not found.');

  // Require all three expected arguments.
  if (arguments.length < 2) {
    throw new Error('FrautoComplete initialized with too few arguments');
  }
  
  // Set instance variables
  self.filter = filter;
  self.targetField = targetField;
  self.container = $(filter).parents('.frauto-container');
  self.optionList = {};

  $(self.filter).rules('add', {
    required: true,
    messages: {
      required: 'Please select an item from the auto-complete list.'
    }
  });

  $(self.filter).prop('autocomplete', 'off');

  /* ================== *\
   *  Event listeners   *
  \* ================== */

  // prevent event listeners from getting attached twice
  $(self.filter).off();

  // mouse events
  $(self.container).on('click', '.frauto-list li', function(event) {
    self.makeSelection($(this), true);
  });
  $(self.container).on('hover', '.frauto-list li', function(event) {
    $(self.container).find('.frauto-list li.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  // document events
  $(self.filter).blur(function() {
    self.onBlur();
  });

  // handle keyboard events
  $(self.filter).bind('keyup', function(event) {
    switch (event.keyCode) {
      case 27: // escape key
        self.hideList();
        break;
      case 40: // down arrow
        self.cycle('next');
        break;
      case 38: // up arrow
        self.cycle('previous');
        break;
      default:
        self.populateList();
    }
  });

}

FrautoComplete.prototype = {
  resetFilter: function() {
    var filter = this.filter;
    $(filter).val('');
    this.populateList();
  },

  highlightMatch: function(text, patternObj) {
    var matchBegins = text.search(patternObj);

    var matchEnds;
    if (patternObj.source != '(?:)')
      matchEnds = matchBegins+patternObj.source.length;
    else
      matchEnds = 0;

    var output = text.slice(0,matchBegins);
    output += '<span>'+ text.slice(matchBegins, matchEnds) +'</span>';
    output += text.slice(matchEnds);
    return output;
  },

  productItemTemplate: function(product, patternObj) {
    var itemText = product.product_sku;
    var itemMarkup = '';
    if (patternObj.test(itemText)) {
      itemMarkup += '<li data-value="'+ product.product_id +'">';
      itemMarkup += this.highlightMatch(itemText, patternObj) +'</li>';
    }
    return itemMarkup;
  },

  selectTemplate: function(option, patternObj) {
    var itemText = option.label;
    var itemMarkup = '';
    if (patternObj.test(itemText)) {
      itemMarkup += '<li data-value="'+ option.value +'">';
      itemMarkup += this.highlightMatch(itemText, patternObj) +'</li>';
    }
    return itemMarkup;
  },

  standardItemTemplate: function(item, patternObj) {
    var itemText = typeof item === 'string' ? item : item.label,
        itemId = typeof item === 'string' ? item : item.id,
        itemMarkup = '',
        max,
        i;
    if (patternObj.test(itemText)) {
      itemMarkup += '<li data-value="'+ itemId +'">';
      itemMarkup += this.highlightMatch(itemText, patternObj) +'</li>';
    } else {
      max = this.synonyms[itemText] && this.synonyms[itemText].length || 0;
      for (i=0; i<max; i++) {
        if (patternObj.test(this.synonyms[itemText][i])) {
          itemMarkup += '<li data-value="'+ itemId +'">';
          itemMarkup += itemText +'</li>';
          i = max; // kill the loop
        }
      }
    }
    return itemMarkup;
  },

  populateList: function() {
    var filter = this.filter,
        targetField = this.targetField,
        patternObj = new RegExp($(filter).val(), 'ig'),
        matchList = document.createElement('ul'),
        limit = this.listLimit,
        i;

    matchList.className = 'frauto-list';

    if ($(this.targetField)[0] === ($('#product')[0] || $('#model')[0])) {
      for (i=0; i<this.optionList.length && $(matchList).children().length < limit; i++) {
        $(matchList).append(this.productItemTemplate(this.optionList[i], patternObj));
      }
    }
    else {
      for (i=0; i<this.optionList.length && $(matchList).children().length < limit; i++) {
        $(matchList).append(this.selectTemplate(this.optionList[i], patternObj));
      }
    }
    $('.frauto-list').remove();
    $(filter).after(matchList);
  },

  makeSelection: function(selection, hide) {
    var targetField = this.targetField;
    var filter = this.filter;
    var currentSelection = $(this.container).find('.frauto-list li.selected');
    $(currentSelection).removeClass('selected');
    $(targetField).val($(selection).attr('data-value'));
    $(filter).val($(selection).text());
    $(selection).addClass('selected');
    if (hide) this.hideList();

    if ($(this.filter).hasClass('invalid')) $(this.filter).valid();
    if (typeof this.handlers.onSelection !== 'undefined') {
      this.handlers.onSelection(selection);
    }
  },

  hideList: function() {
    if ($(this.container).find('.frauto-list').is(':visible'))
      $(this.container).find('.frauto-list').fadeOut('fast');
  },

  showList: function() {
    if (!$(this.container).find('.frauto-list').is(':visible'))
      $(this.container).find('.frauto-list').fadeIn('fast');
  },

  cycle: function(direction) {
    this.showList();
    var currentSelection = $(this.container).find('.frauto-list li.selected');
    if (direction === 'previous') {
      if (currentSelection.prev().length > 0)
        this.makeSelection(currentSelection.prev());
      else
        this.makeSelection($(this.container).find('.frauto-list li').last());
    }
    else {
      if (currentSelection.next().length > 0)
        this.makeSelection(currentSelection.next());
      else
        this.makeSelection($(this.container).find('.frauto-list li').first());
    }
  },

  onBlur: function() {
    var synonym,
        liSelector,
        selection,
        filterVal = $(this.filter).val().toUpperCase();

    if ($(this.container).find('.frauto-list li').length === 1) {
      this.makeSelection($(this.container).find('.frauto-list li').first(), true);
    } 
    else {
      if ( this.synonyms[filterVal] !== undefined ) {
        synonym = this.synonyms[filterVal];
        liSelector = '.frauto-list li[data-value="'+ synonym +'"]';
        selection = $(this.container).find(liSelector);
        this.makeSelection(selection, true);
      } 
      else {
        this.hideList();
        if (filterVal === '')  $(this.targetField).val('');
        if ($(this.targetField).val() === '') $(this.filter).val('');
      }
    }
    if ($(this.filter).hasClass('invalid')) $(this.filter).valid();
  }
};
