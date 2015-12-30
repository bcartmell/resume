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

  };

  Modal.prototype = {
    show: function() {
      showElement(this.curtain.element);
      showElement(this.element);
      return this;
    },
    hide: function() {
      hideElement(this.element);
      hideElement(this.curtain.element);
      return this;
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

  this.contentSource = contentSet;

  this.element = document.createElement('ul');
  this.element.classList.add('slideshow');
  this.element.classList.add('transition');

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

};
Slideshow.prototype = {
  findIndent: function(index) {
    return (index)*-100;
  },
  findIndex: function(indent) {
    return (indent/-100);
  },
  currentIndent: function() {
    return parseInt(this.element.style.textIndent || 0);
  },
  currentIndex: function() {
    return this.findIndex(this.currentIndent());
  },
  hasNext: function() {
    return (this.currentIndex() < (this.length-1));
  },
  toIndex: function(index) {
    var newIndent = this.findIndent(index);
    this.element.setAttribute('style', 'text-indent:'+ newIndent +'%');
  },
  next: function() {
    var newIndex;
    if (!this.hasNext()) newIndex = '0';
    else newIndex = this.currentIndex()+1;
    this.toIndex(newIndex);
  },
  previous: function() {
    var newIndex;
    if (this.currentIndex() === 0) newIndex = this.length-1; 
    else newIndex = this.currentIndex()-1;
    this.toIndex(newIndex);
  }
};


var newModal;
window.onload = function() {

  var imageReels = document.getElementsByClassName('image-reel-window');
  pageModals = Array.prototype.map.call(imageReels, function(reel) {
    modaller.newModal({
      content: new Slideshow(reel),
      target: reel
    });
  });

  //var contentSource = document.getElementsByClassName('image-reel-window')[0];
  //newModal = modaller.newModal({
    //content: new Slideshow(contentSource),
    //target: contentSource
  //});
};