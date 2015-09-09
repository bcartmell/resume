
$(document).ready(function() {
    /***************************************************
    *  Setup product cart limits
    ***************************************************/
        var productInfo = [{"mD":null,"mQ":null,"n":"Syrah","id":16022,"s":[{"n":"UPS Ground (non-prohibited states)","id":82,"p":[{"h":0.0,"m":3,"s":24.0},{"h":0.0,"m":6,"s":36.0},{"h":0.0,"m":12,"s":55.0}]},{"n":"UPS 2 Day (non-prohibited states)","id":83,"p":[{"h":0.0,"m":3,"s":42.0},{"h":0.0,"m":6,"s":68.0},{"h":0.0,"m":12,"s":104.0}]},{"n":"UPS Overnight (non-prohibited states)","id":84,"p":[{"h":0.0,"m":3,"s":77.0},{"h":0.0,"m":6,"s":104.0},{"h":0.0,"m":12,"s":157.0}]},{"n":"Golden State Overnight/2Day (CA, AZ, NV only)","id":85,"p":[{"h":0.0,"m":3,"s":15.0},{"h":0.0,"m":6,"s":23.0},{"h":0.0,"m":12,"s":38.0}]},{"n":"Will Call","id":133,"p":[]}],"p":[{"i":false,"p":[{"dP":30.0,"m":999999,"p":30.0}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"Cabernet Sauvignon","id":16023,"s":[{"n":"UPS Ground (non-prohibited states)","id":82,"p":[{"h":0.0,"m":3,"s":24.0},{"h":0.0,"m":6,"s":36.0},{"h":0.0,"m":12,"s":55.0}]},{"n":"UPS 2 Day (non-prohibited states)","id":83,"p":[{"h":0.0,"m":3,"s":42.0},{"h":0.0,"m":6,"s":68.0},{"h":0.0,"m":12,"s":104.0}]},{"n":"UPS Overnight (non-prohibited states)","id":84,"p":[{"h":0.0,"m":3,"s":77.0},{"h":0.0,"m":6,"s":104.0},{"h":0.0,"m":12,"s":157.0}]},{"n":"Golden State Overnight/2Day (CA, AZ, NV only)","id":85,"p":[{"h":0.0,"m":3,"s":15.0},{"h":0.0,"m":6,"s":23.0},{"h":0.0,"m":12,"s":38.0}]},{"n":"Will Call","id":133,"p":[]}],"p":[{"i":false,"p":[{"dP":24.5,"m":999999,"p":24.5}],"s":true,"c":"USD"}]},{"mD":null,"mQ":null,"n":"Viognier","id":16034,"s":[{"n":"UPS Ground (non-prohibited states)","id":82,"p":[{"h":0.0,"m":3,"s":24.0},{"h":0.0,"m":6,"s":36.0},{"h":0.0,"m":12,"s":55.0}]},{"n":"UPS 2 Day (non-prohibited states)","id":83,"p":[{"h":0.0,"m":3,"s":42.0},{"h":0.0,"m":6,"s":68.0},{"h":0.0,"m":12,"s":104.0}]},{"n":"UPS Overnight (non-prohibited states)","id":84,"p":[{"h":0.0,"m":3,"s":77.0},{"h":0.0,"m":6,"s":104.0},{"h":0.0,"m":12,"s":157.0}]},{"n":"Golden State Overnight/2Day (CA, AZ, NV only)","id":85,"p":[{"h":0.0,"m":3,"s":15.0},{"h":0.0,"m":6,"s":23.0},{"h":0.0,"m":12,"s":38.0}]},{"n":"Will Call","id":133,"p":[]}],"p":[{"i":false,"p":[{"dP":22.5,"m":999999,"p":22.5}],"s":true,"c":"USD"}]}];
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
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");
var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,
b){a||(a=f);if(g)return a.createDocumentFragment();for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
