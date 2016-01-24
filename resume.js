// on a non-commercial project where time and compatibility
// would warrant using known and tested libraries and frameworks

  var helpers = (function() {
    'use strict';
    return {
    // Some utility function that I needed at least once
    // but are general enough to warrant extraction from
    // the relevant code for reusability.

      cleanSpaces: function(str) {
        // given a string, make sure that each instance of 
        // white-space is only one space.  This way,
        // you can append strings together without worrying
        // about whether or not you should prepending/appending
        // spaces will help or hurt, just add the spaces and use this function.
        return str.replace(/\W+/g,' ').trim();
      },

      addClass: function(target, newClass) {
        // Add a classList to an element
        // arg one is the target element, arg two
        // is that class list (space-separated).
        var i, max;
        var classArray = newClass.split(' ');
        max = classArray.length;
        for(i=0; i<max; i++) {
          target.classList.add(classArray[i]);
        }
      },

      removeClass: function(target, className) {
        // remove a class from an element.
        target.classList.remove(target);
      },

      getOuterSize: function(target) {
        var rect = target.getBoundingClientRect();
        return {
          width: rect.width || (rect.right-rect.left),   
          height: rect.height || (rect.bottom-rect.top) 
        }
      },
      
      getViewHeight: function() {
        return window.innerHeight || document.documentElement.clientHeight;
      },

      maxHeightMultiplier: function(element) {
        // allows us to sat heights and max-heights on elements
        // while still respecting percentage-based CSS max-height property

        var cssMaxHeight = getComputedStyle(element).maxHeight;
        // getComputedStyle will get us the value from the stylesheet

        if (cssMaxHeight.indexOf('%') !== -1) {
          return parseFloat(cssMaxHeight)/100;
        }
        return 1;
      }
    };
  }());

(function() {
  'use strict';
  var modaller = (function() {
    var curtainInstance;
    var Curtain = function(options) {
      if (!(this instanceof Curtain)) return new Curtain(options);
      var self = this;

      this.modals = [];

      this.element = document.createElement('div');
      this.element.id = 'modal-curtain';
      this.element.className = 'hidden transition-opacity';

      this.alignmentCell = document.createElement('div');
      this.alignmentCell.id = 'modal-curtain-inner';

      this.element.appendChild(this.alignmentCell);

      document.getElementsByTagName('body')[0].appendChild(this.element);

      this.element.addEventListener('click', function(event) {
        if (event.target === self.element) {
          self.hideModals();
          hideElement(self.element);
        }
      });
      return this;
    };
    Curtain.prototype = {
      addModal: function(modal) {
        this.modals.push(modal);
        this.alignmentCell.appendChild(modal.element);
      },
      hideModals: function() {
        var i;
        for (i=0; i<this.modals.length; i++) {
          hideElement(this.modals[i].element);
        }
      }
    };

    function getCurtain() {
      if (!curtainInstance) curtainInstance = new Curtain();
      return curtainInstance;
    }

    function hideElement(element) {
      var className = element.className || '';
      if (className.search('hidden') === -1) {
        element.style.opacity = 1;
        window.setTimeout(function() {
          helpers.addClass(element, 'hidden');
        },300);
      }
      element.style.opacity = 0;
      return element;
    }

    function showElement(element) {
      element.style.opacity = 0;
      element.className = element.className.replace('hidden', '').trim();
      window.setTimeout(function() {
      element.style.opacity = 1;
      }, 2);
      return element;
    }

    var Modal = function(options) {
      if (!(this instanceof Modal)) return new Modal(options);
      var self = this;

      // setup instance options
      options = options || {};

      this.content = options.content || '';
      this.target = options.target || null;

      // setup primary container
      this.element = document.createElement(options.tagName || 'div');
      this.element.id = options.id || '';
      this.element.className = helpers.cleanSpaces('hidden modal '+ (options.className || ''));

      // add content

      // if content is an HTMLElement Node
      if (this.content instanceof Node) {                   
        this.element.appendChild(this.content);
      }
      // if content is another object (such as a Slideshow), 
      // it will hold a reference to it's source node as 'element'
      else if (this.content.element instanceof Node) {
        this.element.appendChild(this.content.element);
      }
      // or use provided string as innerHTML;
      else this.element.innerHTML = options.content;


      // add close button
      this.closeButton = document.createElement('i');
      helpers.addClass(this.closeButton, 'ion-android-close modal-close');
      this.element.insertBefore(this.closeButton, this.element.firstChild);

      this.closeButton.addEventListener('click', function(){
        self.hide();
      });

      // attach to curtain
      this.curtain = getCurtain();
      this.curtain.addModal(this);

      // attach event listener to target.
      if (this.target) {
        this.target.addEventListener('click', function() {
          self.show();
        }, false);
      }

      // so we can capture keyboard events
      this.element.setAttribute('tabIndex', 0); 

      this.element.addEventListener('keydown', function(event) {
        event = event || window.event
        if (event.keyCode === 27)  {
          try {event.preventDefault()} // Standards-compliant 
          catch(err){ event.returnValue=false} // IE8
          self.hide();
        }
      }, false);
    };

    Modal.prototype = {
      show: function() {
        this.setMaxHeight();
        showElement(this.curtain.element);
        showElement(this.element);

        // so that keyboard events are detected immediately
        // if our content is another object, we'll let it's element 
        // have focus so that it can also respond to keyboard events
        if (this.content.element) this.content.element.focus();
        else this.content.focus();

        // prevent body scroll while modal is open
        document.body.classList.add('modal-open');
        this.setMaxHeightListener = this.setMaxHeight.bind(this);
        window.addEventListener('resize', this.setMaxHeightListener, false);
        return this;
      },
      hide: function() {
        hideElement(this.element);
        hideElement(this.curtain.element);

        // undo prevent body scroll while modal is open
        document.body.classList.remove('modal-open');
        window.removeEventListener('resize', this.setMaxHeightListener, false);
        return this;
      },
      setMaxHeight: function() {
        if (!this.maxHeightMultiplier) {
          this.maxHeightMultiplier = helpers.maxHeightMultiplier(this.element) 
        }
        var maxHeight = helpers.getViewHeight() *this.maxHeightMultiplier +'px';
        this.element.style.maxHeight = maxHeight;
        this.setContentMaxHeight(maxHeight);
      },
      setContentMaxHeight: function(maxHeight) {
        if (this.content.setMaxHeight) this.content.setMaxHeight(maxHeight);
      }
    };

    return {
      newModal: function(options) {
        return new Modal(options);
      }
    };
  }());

  document.addEventListener('DOMContentLoaded', function() {
    var imageReels = document.getElementsByClassName('image-reel-window');
    [].forEach.call(imageReels, function(reel) {
      modaller.newModal({
        content: new OkieShow(reel),
        target: reel
      });
    });
  }, false);
}());
