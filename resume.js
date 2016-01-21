// JavaScript code for Brady Cartmell's Resumes site.
// There is a lot here that jQuery and other tools
// could simplify, but in addition to being a resume
// site, it is also an exercise in practicing my JS skills
// on a non-commercial project where time and compatibility
// would warrant using known and tested libraries and frameworks


(function() {
  'use strict';

  var helpers = {
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
                             /* for IE 8 and below */
        height: rect.height || (rect.bottom-rect.top) 
      }
    },

  };


  var modaller = (function() {
    var Curtain = function(options) {
      if (!(this instanceof Curtain)) return new Curtain(options);
      var self = this;

      this.modals = [];

      this.element = document.createElement('div');
      this.element.id = 'modal-curtain';
      this.element.className = 'hidden transition';
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
        this.element.appendChild(modal.element);
      },
      hideModals: function() {
        var i;
        for (i=0; i<this.modals.length; i++) {
          hideElement(this.modals[i].element);
        }
      }
    };

    function getCurtain() {
      var curtain = new Curtain();
      return (function() {
        return curtain;
      }());
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
      this.element.className = helpers.cleanSpaces('hidden transition modal '+ (options.className || ''));

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
      helpers.addClass(this.closeButton, 'fa fa-close modal-close');
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

      this.element.addEventListener('keyup', function(event) {
        if (event.keyCode === 27) self.hide();
      }, false);

    };

    Modal.prototype = {
      show: function() {
        showElement(this.curtain.element);
        showElement(this.element);

        // so that keyboard events are detected immediately
        // if our content is another object, we'll let it's element 
        // have focus so that it can also respond to keyboard events
        if (this.content.element) this.content.element.focus();
        else this.content.focus();

        // prevent body scroll while modal is open
        document.body.classList.add('modal-open');

        return this;
      },
      hide: function() {
        hideElement(this.element);
        hideElement(this.curtain.element);

        // undo prevent body scroll while modal is open
        document.body.classList.remove('modal-open');

        return this;
      },

      resizeHeight: function(newHeight) {
        if (typeof newHeight === Number) newHeight = newHeight + 'px';
        this.element.setAttribute('style', 'height:'+newHeight);
      }

    };

    return {
      newModal: function(options) {
        return new Modal(options);
      }
    };
  }());

  var Slideshow = function(contentSet) {
    var self = this;

    function makeButton(btnClass) {
      var button = document.createElement('button');
      button.classList.add(btnClass);
      return button;
    }

    function makeSlide(content) {
      if (content instanceof HTMLElement) {
        var slide = document.createElement('li');
        var contentIndex = content.getAttribute('data-slide-index');
        if (contentIndex) slide.setAttribute('data-slide-index', contentIndex);
        slide.appendChild(content.cloneNode(true));
        return slide;
      }
      return false;
    }

    function makeSlides(contentSet) {
      var i, max;
      if (contentSet instanceof HTMLElement) contentSet = contentSet.childNodes;
      max = contentSet.length;
      for (i=0; i<max; i++) {
        var slide = makeSlide(contentSet[i]);
        if (slide) self.slideContainer.appendChild(slide);
      }
    }

    function indexSlides(contentSet, slideTag) {
      // adds indexes to slides as data-attribute
      // this ensures that indexes are consistent
      // between page view and modal view.
      //
      // slideTag is the tagName for slides and defaults to 'img'
      // this prevents erroneous indexing of things 
      // like textNodes in between inline-block elements
      var children = contentSet.childNodes;
      var i, max=children.length;
      var index = 0;
      slideTag = slideTag || 'IMG';
      for (i=0; i<max; i++) {
        if (children[i].tagName === slideTag) {
          children[i].setAttribute('data-slide-index', index++);
        }
      }
    }

    this.contentSource = contentSet;

    this.element = document.createElement('div');
    this.element.classList.add('slideshow');

    this.slideContainer = document.createElement('ul');
    this.slideContainer.classList.add('transition');
    this.element.appendChild(this.slideContainer);

    indexSlides(contentSet);
    makeSlides(contentSet);

    // setup element
    this.length = this.slideContainer.childNodes.length;

    // add event targets
    this.prevButton = this.element.insertBefore(makeButton('prev-button'), this.slideContainer);
    this.nextButton = this.element.appendChild(makeButton('next-button'));

    // add event listeners
    this.nextButton.addEventListener('click', function() {
      self.next();
    }, false);

    this.prevButton.addEventListener('click', function() {
      self.previous();
    }, false);

    this.contentSource.addEventListener('click', function(event) {
      var targetIndex = event.target.getAttribute('data-slide-index');
      self.toIndex(targetIndex);
    }, false);

    this.element.setAttribute('tabIndex', 0); 
    this.element.addEventListener('keyup', function(event) {
      switch(event.keyCode) {
        default: break; // do nothing
        case 39:  // right arrow
          self.next();
          break;
        case 37:
          self.previous();
          break;
      }
    }, false);

  };
  Slideshow.prototype = {
    // find indent from index
    findIndent: function(index) {  
      return (index)*-100;
    },

    // find index from indent
    findIndex: function(indent) { 
      return (indent/-100);
    },

    // discover the current indent level
    currentIndent: function() {   
      return parseInt(this.slideContainer.style.textIndent || 0);
    },

    // discover current index
    currentIndex: function() {    
      return this.findIndex(this.currentIndent());
    },

    currentSlide: function() {
      var index = this.currentIndex();
      return this.element.querySelectorAll('li[data-slide-index="'+index+'"]')[0];
    },

    // discover if current slide is the last one
    hasNext: function() {
      return (this.currentIndex() < (this.length-1));
    },

    // Go to specific slide by index
    toIndex: function(index) {
      var newIndent = this.findIndent(index);
      this.slideContainer.setAttribute('style', 'text-indent:'+ newIndent +'%');
      this.shrinkWrap();
    },

    // navigate to next slide
    next: function() {
      var newIndex;
      if (!this.hasNext()) newIndex = '0';
      else newIndex = this.currentIndex()+1;
      this.toIndex(newIndex);
    },

    // navigate to previous slide
    previous: function() {
      var newIndex;
      if (this.currentIndex() === 0) newIndex = this.length-1; 
      else newIndex = this.currentIndex()-1;
      this.toIndex(newIndex);
    },

    shrinkWrap: function() {
      var self = this;   
      // Not used to seeing this outside of a constructor, are you?

      var slide = this.currentSlide().querySelector('img').parentElement;
      // There may be a scrollbar, so let's grap the li that contains the img

      var stage = this.element.querySelector('ul')
      var container = stage.parentElement.parentElement;
      // first parent is the slideshow container,
      // the Element housing the slideshow will be two parents up.

      var transDuration = parseFloat(
        getComputedStyle(stage).transitionDuration
      ) * 1500;
      // container.style.width = '';
      // container.style.height = '';

      // We need to wait for slide animations to finish
      setTimeout(resize, transDuration , slide, stage, container);
      function resize(slide) {
        // unset any previously set values so we start from the natural state
        // container is the modal that hosts the slideshow
        // slide is the li element that represents our slide
        // stage is the ul that represents the slideshow
        // window is, well window.
        var stage = self.slideContainer
        var container = self.element;
        var containingModal = container.parentElement;

        var getSize = helpers.getOuterSize;  
        // save our helper function to save typing (and a few cpu cycles too).


        var slideInnerSize = getSize(slide.childNodes[0]);
        // size of slide content
        
        var slideSize = getSize(slide);
        // save size of the current slide

        var windowSize = getSize(document.body);
        // save width of the window

        var containerSize = getSize(container);
        // save size of the container

        var stageSize = getSize(stage);
        // get size of the stage for our slideshow
        
        var viewHeight = window.innerHeight ||
            document.documentElement.clientHeight; //  for IE8

        var setHeights = function(heightVal, elements) {
          //  makes thing a little dryer than just setting the values by hand.
          var elements = [slide, stage, container, containingModal];
          elements.forEach(function(el) {
            el.style.height = heightVal;
          });
        };

        var heightsVal, accountForScroll;
        // heightsVal will be passed to setHeights
        if (slideInnerSize.height < stageSize.height) {
          setHeights(slideInnerSize.height+'px')
        } else  {
          setHeights('inherit');
        } 

        if (slideInnerSize.width<windowSize.width*.9) {
          container.style.width = slideSize.width+'px';
          containingModal.style.width = slideSize.width+'px';
        } 

      }

    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    var imageReels = document.getElementsByClassName('image-reel-window');
    Array.prototype.forEach.call(imageReels, function(reel) {
      modaller.newModal({
        content: new Slideshow(reel),
        target: reel
      });
    });
  }, false);
}());
