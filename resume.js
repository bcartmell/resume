var helpers = {
  cleanSpaces: function(str) {
    return str.replace(/\W+/g,' ').trim();
  },

  addClass: function(target, newClass) {
    var i, max;
    var classArray = newClass.split(' ');
    max = classArray.length;
    for(i=0; i<max; i++) {
      target.classList.add(classArray[i]);
    }
  },

  removeClass: function(target, className) {
    target.classList.remove(target);
  }

}


var modaller = (function() {

  var Curtain = function(options) {
    if (!this instanceof Curtain) return new Curtain(options);
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
      this.element.appendChild(modal.element)
    },
    hideModals: function() {
      var i;
      for (i=0; i<this.modals.length; i++) {
        hideElement(this.modals[i].element);
      }
    }
  }

  function getCurtain() {
    var curtain = new Curtain();
    return (function() {
      return curtain;
    }())
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
    if (!this instanceof Modal) return new Modal(options);
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
      this.element.focus();

      return this;
    },
    hide: function() {
      hideElement(this.element);
      hideElement(this.curtain.element);
      return this;
    },

    resizeHeight(newHeight) {
      this.element.setAttribute('style', function() {
        debugger;
      });
    }

  }

  return {
    newModal: function(options) {
      return new Modal(options);
    }
  }
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
      if (slide) self.element.appendChild(slide);
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

  this.element = document.createElement('ul');
  this.element.classList.add('slideshow');
  this.element.classList.add('transition');

  indexSlides(contentSet);
  makeSlides(contentSet);

  // setup element
  this.length = this.element.childNodes.length;

  // add event targets
  this.prevButton = this.element.insertBefore(makeButton('prev-button'), this.element.children[0]);
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
    return parseInt(this.element.style.textIndent || 0);
  },

  // discover current index
  currentIndex: function() {    
    return this.findIndex(this.currentIndent());
  },

  // discover if current slide is the last one
  hasNext: function() {
    return (this.currentIndex() < (this.length-1));
  },

  // Go to specific slide by index
  toIndex: function(index) {
    var newIndent = this.findIndent(index);
    this.element.setAttribute('style', 'text-indent:'+ newIndent +'%');
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
  }
};

window.onload = function() {
  var imageReels = document.getElementsByClassName('image-reel-window');
  pageModals = Array.prototype.map.call(imageReels, function(reel) {
    modaller.newModal({
      content: new Slideshow(reel),
      target: reel
    });
  });
};
