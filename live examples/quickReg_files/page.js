
$(document).ready(function() {
    /***************************************************
    *  Setup product cart limits
    ***************************************************/
        var productInfo = [{"mD":null,"mQ":null,"n":"Tilt-Head 6-Wire Whip","id":106190,"s":[],"p":[{"i":false,"p":[{"dP":19.99,"m":999999,"p":19.99}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"Tilt-Head Coated C-Dough Hook","id":106191,"s":[],"p":[{"i":false,"p":[{"dP":14.99,"m":999999,"p":14.99}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"Affresh Stainless Steel Cleaner","id":106187,"s":[],"p":[{"i":false,"p":[{"dP":4.99,"m":999999,"p":4.99}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"Premium Broil Pan and Roasting Rack","id":106186,"s":[],"p":[{"i":false,"p":[{"dP":0.0,"m":999999,"p":0.0}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"Roll-Out Rack","id":106184,"s":[],"p":[{"i":false,"p":[{"dP":0.0,"m":999999,"p":0.0}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"Universal Microwave Crisper Pan","id":106185,"s":[],"p":[{"i":false,"p":[{"dP":50.0,"m":999999,"p":50.0}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"Tilt-Head Coated Flat Beater","id":106192,"s":[],"p":[{"i":false,"p":[{"dP":0.0,"m":999999,"p":0.0}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"Tilt-Head Burnish Flat Beater","id":106213,"s":[],"p":[{"i":false,"p":[{"dP":0.0,"m":999999,"p":0.0}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"5-Quart Polished Stainless Steel Bowl","id":106214,"s":[],"p":[{"i":false,"p":[{"dP":0.0,"m":999999,"p":0.0}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"3-Quart Polished Stainless Steel Bowl","id":106215,"s":[],"p":[{"i":false,"p":[{"dP":0.0,"m":999999,"p":0.0}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"Ice Cream Maker Attachment","id":106216,"s":[],"p":[{"i":false,"p":[{"dP":0.0,"m":999999,"p":0.0}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"Food Grinder Attachment","id":106217,"s":[],"p":[{"i":false,"p":[{"dP":0.0,"m":999999,"p":0.0}],"s":true,"c":"USD"}]}];
    simpleCart.initializeProducts(productInfo);
    simpleCart.initialize();
    
    $.datepicker.setDefaults($.datepicker.regional[""]);

    $.extend($.validator.messages, {
      required: "required"
    });

    $.datepicker.setDefaults({
      validateDate: 'Please enter a valid date',
      validateDateMin: 'Please enter a date on or after {0}',
      validateDateMax: 'Please enter a date on or before {0}',
      validateDateMinMax: 'Please enter a date between {0} and {1}',
      validateDateCompare: 'Please enter a date {0} {1}',
      validateDateToday: 'today',
      validateDateOther: 'the other date',
      validateDateEQ: 'equal to',
      validateDateNE: 'not equal to',
      validateDateLT: 'before',
      validateDateGT: 'after',
      validateDateLE: 'not after',
      validateDateGE: 'not before'
    });


    /***************************************************
    *  Setup all field validations
    ***************************************************/
                              if($(".registria_field:input[name*='user[first_name]']").exists()){
          $(".registria_field:input[name*='user[first_name]']").rules("add", {
            required: true
          });
        }
                                          if($(".registria_field:input[name*='user[last_name]']").exists()){
          $(".registria_field:input[name*='user[last_name]']").rules("add", {
            required: true
          });
        }
                                    if($(".registria_field:input[name*='user[email]']").exists()) {
          $(".registria_field:input[name*='user[email]']").rules("add", {
            regex: "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])+?$".replace(new RegExp("\\.", "g"), "\\\."),
            messages: {
              regex: "Invalid"
            }
          });
        }
                    if($(".registria_field:input[name*='user[email]']").exists()){
          $(".registria_field:input[name*='user[email]']").rules("add", {
            required: true
          });
        }
                                                                      if($(".registria_field:input[name*='user[address_attributes][address1]']").exists()){
          $(".registria_field:input[name*='user[address_attributes][address1]']").rules("add", {
            required: true
          });
        }
                                                                      if($(".registria_field:input[name*='user[address_attributes][city]']").exists()){
          $(".registria_field:input[name*='user[address_attributes][city]']").rules("add", {
            required: true
          });
        }
                                          if($(".registria_field:input[name*='user[address_attributes][state]']").exists()){
          $(".registria_field:input[name*='user[address_attributes][state]']").rules("add", {
            required: true
          });
        }
                                    if($(".registria_field:input[name*='user[address_attributes][zip]']").exists()) {
          $(".registria_field:input[name*='user[address_attributes][zip]']").rules("add", {
            regex: "^[0-9]{5}$".replace(new RegExp("\\.", "g"), "\\\."),
            messages: {
              regex: "invalid zip code"
            }
          });
        }
                    if($(".registria_field:input[name*='user[address_attributes][zip]']").exists()){
          $(".registria_field:input[name*='user[address_attributes][zip]']").rules("add", {
            required: true
          });
        }
                                                                      if($(".registria_field:input[name*='product[model]']").exists()){
          $(".registria_field:input[name*='product[model]']").rules("add", {
            required: true
          });
        }
                                                                      if($(".registria_field:input[name*='product[purchase_date]']").exists()){
          $(".registria_field:input[name*='product[purchase_date]']").rules("add", {
            required: true
          });
        }
                                                                                                    
    if($(".registria_field:input[name*='user[password]']").exists() && $(".registria_field:input[name*='user[password_confirmation]']").exists()){
      $(".registria_field:input[name*='user[password_confirmation]']").rules("add", {
        equalTo: ".registria_field:input[name*='user[password]']",
        messages: {
          equalTo: "confirmation does not match"
        }
      });
    }

    if($(".registria_field:input[name*='user[email]']").exists() && $(".registria_field:input[name*='user[confirm_email]']").exists()){
      $(".registria_field:input[name*='user[confirm_email]']").rules("add", {
        equalTo: ".registria_field:input[name*='user[email]']",
        messages: {
          equalTo: "confirmation does not match"
        }
      });
    }

  /***************************************************
  *  Page Specific
  ***************************************************/
  
  
  
  
  
  
});

/***************************************************
*  Google Analytics
***************************************************/

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '']);
  
  
  _gaq.push(['_trackPageview']);

  $("a[href][href!='#'][href!=''][href!='javascript:;']:not(.item_add):not(.more-info)").live("click", function(){
    _gaq.push(['_trackEvent', (this.hostname === location.hostname) ? 'internal':'external', 'click', $(this).attr('href'), null]);
  });

  $('a.item_add').live('click', function(){
    _gaq.push(['_trackEvent', 'Shopping', 'Item Added', $(this).attr('alt'), null]);
  });

  $('a.more-info').live('click', function(){
    _gaq.push(['_trackEvent', 'More Info', 'click', $(this).attr('href'), null]);
  });

  
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
/**
* @preserve HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window, document) {
/*jshint evil:true */
  /** version */
  var version = '3.6.2pre';

  /** Preset options */
  var options = window.html5 || {};

  /** Used to skip problem elements */
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  /** Not all elements can be cloned in IE **/
  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

  /** Detect whether the browser supports default html5 styles */
  var supportsHtml5Styles;

  /** Name of the expando, to work with multiple documents or to re-shiv one document */
  var expando = '_html5shiv';

  /** The id for the the documents expando */
  var expanID = 0;

  /** Cached data for each document */
  var expandoData = {};

  /** Detect whether the browser supports unknown elements */
  var supportsUnknownElements;

  (function() {
    try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
          // assign a false positive if unable to shiv
          (document.createElement)('a');
          var frag = document.createDocumentFragment();
          return (
            typeof frag.cloneNode == 'undefined' ||
            typeof frag.createDocumentFragment == 'undefined' ||
            typeof frag.createElement == 'undefined'
          );
        }());
    } catch(e) {
      // assign a false positive if detection fails => unable to shiv
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }

  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a style sheet with the given CSS text and adds it to the document.
   * @private
   * @param {Document} ownerDocument The document.
   * @param {String} cssText The CSS text.
   * @returns {StyleSheet} The style element.
   */
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

    p.innerHTML = 'x<style>' + cssText + '</style>';
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  /**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   */
  function getElements() {
    var elements = html5.elements;
    return typeof elements == 'string' ? elements.split(' ') : elements;
  }

    /**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   */
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
    }
    return data;
  }

  /**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived element.
   */
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    // Avoid adding some elements to fragments in IE < 9 because
    // * Attributes like `name` or `type` cannot be set/changed once an element
    //   is inserted into a document/fragment
    // * Link elements with `src` attributes that are inaccessible, as with
    //   a 403 response, will cause the tab/window to crash
    // * Script elements appended to fragments will execute when their `src`
    //   or `text` property is set
    return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
  }

  /**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   */
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i<l;i++){
        clone.createElement(elems[i]);
    }
    return clone;
  }

  /**
   * Shivs the `createElement` and `createDocumentFragment` methods of the document.
   * @private
   * @param {Document|DocumentFragment} ownerDocument The document.
   * @param {Object} data of the document.
   */
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
    }


    ownerDocument.createElement = function(nodeName) {
      //abort shiv
      if (!html5.shivMethods) {
          return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };

    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
      'var n=f.cloneNode(),c=n.createElement;' +
      'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/\w+/g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) +
      ');return n}'
    )(html5, data.frag);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
        ownerDocument = document;
    }
    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(ownerDocument,
        // corrects block display not defined in IE6/7/8/9
        'article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
        // adds styling not present in IE6/7/8/9
        'mark{background:#FF0;color:#000}'
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The `html5` object is exposed so that more elements can be shived and
   * existing shiving can be detected on iframes.
   * @type Object
   * @example
   *
   * // options can be changed before the script is included
   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
   */
  var html5 = {

    /**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     */
    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video',

    /**
     * current version of html5shiv
     */
    'version': version,

    /**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     */
    'shivCSS': (options.shivCSS !== false),

    /**
     * Is equal to true if a browser supports creating unknown/HTML5 elements
     * @memberOf html5
     * @type boolean
     */
    'supportsUnknownElements': supportsUnknownElements,

    /**
     * A flag to indicate that the document's `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     */
    'shivMethods': (options.shivMethods !== false),

    /**
     * A string to describe the type of `html5` object ("default" or "default print").
     * @memberOf html5
     * @type String
     */
    'type': 'default',

    // shivs the document according to the specified `html5` object options
    'shivDocument': shivDocument,

    //creates a shived element
    createElement: createElement,

    //creates a shived documentFragment
    createDocumentFragment: createDocumentFragment
  };

  /*--------------------------------------------------------------------------*/

  // expose html5
  window.html5 = html5;

  // shiv the document
  shivDocument(document);

}(this, document));

/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);


var registriaBootstrap = {};

registriaBootstrap.initSelectField = function(element) {
  var firstOption = $(element).find('option').first();
  if ($(firstOption).val() == "") $(firstOption).text('');
  else {
    $(element).prepend('<option value=""></option>');
    $(element).val('');
  }
}

/* Setup field for Bootstrap */
registriaBootstrap.initField = function(field) {
  $(field).addClass('form-control'); 
};

/* Run initField for all visible Registria fields */
registriaBootstrap.initAllFields = function() {
  $(':input.registria_field:visible').not('[type="checkbox"], [type="radio"]').each(function() {
    registriaBootstrap.initField($(this));
  });
};

registriaBootstrap.init = function() {
  registriaBootstrap.initAllFields();
};

$(document).ready(function() {
  registriaBootstrap.init();
  registriaBootstrap.initSelectField('#state');
});

/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.3.1
*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);

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
        paramString = registriaModules.helpers.convertUrlCodes(input);
        params = registriaModules.helpers.objectify(paramString);
        for (param in params) {
          if (params.hasOwnProperty(param)) {
            var field = document.getElementsByName(param);
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
      }

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
      }

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
  field.remove();
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