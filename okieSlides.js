var Slide = function (contentSource, index) {
  var self = this;
  this.element = document.createElement('li');
  this.index = index;
  this.element.classList.add('slide');
  this.element.classList.add('transition-opacity');
  this.slideContent = contentSource.cloneNode(true);
  this.element.appendChild(this.slideContent);
  contentSource.setAttribute('data-okie-slide-index', index);

  this.transDuration = function() {
    var duration = getComputedStyle(self.element).transitionDuration;
    return parseFloat(duration)*1000;
  };

}
Slide.prototype = {
  show: function() { 
    this.element.classList.add('visible');
    this.element.style.opacity = '1';
  },
  hide: function() {
    var self = this;
    this.element.style.opacity = '0';
    setTimeout(function() {
      self.element.classList.remove('visible');
    }, self.transDuration());
  },
}

var OkieShow = function(contentSource, options) {
  var self = this;
  options = options || {};

  function makeButton(btnClass) {
    var button = document.createElement('button');
    button.classList.add(btnClass);
    button.classList.add('transition');
    return button;
  }

  this.animationType = options.animationType || 'fade';

  this.contentSet = [].filter.call(contentSource.childNodes, function(node) {
    return node instanceof Element;
  });

  this.element = document.createElement('div');
  this.element.classList.add('okie-show');

  this.slideContainer = document.createElement('ul');
  this.slideContainer.classList.add('transition');
  this.slideContainer.classList.add('slide-container');
  this.element.appendChild(this.slideContainer);

  this.slides = [];
  [].forEach.call(this.contentSet, function(slideContent) { 
    OkieShow.prototype.addSlide.call(self, slideContent);
  });

  // add event targets
  this.prevButton = this.element.insertBefore(
    makeButton('prev-button'),
    this.slideContainer
  );

  this.nextButton = this.element.appendChild(makeButton('next-button'));

  // add event listeners
  this.nextButton.addEventListener('click', function() {
    self.nextSlide();
  }, false);

  this.prevButton.addEventListener('click', function() {
    self.prevSlide();
  }, false);

  contentSource.addEventListener('click', function(event) {
    var targetIndex = event.target.getAttribute('data-okie-slide-index');
    self.toSlide(targetIndex);
  }, false);

  this.allowNav = true;
  // We only want to allow one ongoing slide transition at time,
  // this.allowNav will be set to false during a slide transition
  // and returned to true afterword.  We will also check this.allowNav
  // before begining a slide transition

  this.element.setAttribute('tabIndex', 0); 
  this.element.addEventListener('keyup', function(event) {
    switch(event.keyCode) {
      default: break; // do nothing
      case 39:  // right arrow
        self.nextSlide();
        break;
      case 37:
        self.prevSlide();
        break;
    }
  }, false);

};
OkieShow.prototype = {
  getCurrentSlide: function() {
    var slides = this.slides, max=slides.length;
    var slideEl;
    for (var i=0; i<max; i++) {
      if (slides[i].element.className.search('visible') !== -1) return slides[i];
    }
    return undefined;
  },
  getCurrentIndex() {
    return this.getCurrentSlide().index;
  },
  addSlide: function(contentSource) {
    var newSlide = new Slide(contentSource, this.slides.length);
    this.slides.push(newSlide);
    this.slideContainer.appendChild(newSlide.element)
  },
  fadeTo: function(slideIndex) {
    var self = this;
    var currentSlide = this.getCurrentSlide();
    var targetSlide = this.slides[slideIndex];

    this.allowNav = false;
    // Let's only allow one slide transition at time;

    this.element.style.width = getComputedStyle(this.element).width;
    this.element.style.height = getComputedStyle(this.element).height;
    // Set element widths so they don't change when we add position:absolute

    if (!currentSlide) {
      // If the show just opened and there is no 
      // current slide, we can just fade it in can call it a day.
      targetSlide.show();
      this.allowNav = true;

      /*
       * setTimeout(function() {
       *   // Clearly, we need to do some refactoring,
       *   // but let's get this working first.
       *   if (typeof dragLine !== 'undefined') {
       *     dragLine(targetSlide.element.childNodes[0]);
       *   } 
       * }, targetSlide.transDuration());
       */

      return;
    }

    // Set the stage:
    currentSlide.element.style.zIndex = '1';
    // make sure our currentSlide stacks on top of the targetSlide.

    currentSlide.element.style.position = 'absolute';
    targetSlide.element.style.position = 'absolute';
    // Slides will need to be absolutly positioned
    // so that they stack on top of eachother

    targetSlide.element.classList.remove('transition');
    // The targetSlide will not be visible until the currentSlide
    // gets out of the way and only transitioning one element helps
    // things run smoother and provides a better effect.

    targetSlide.show();
    currentSlide.hide();
    // Do the thing

    setTimeout(function() {
      // Let the transition run, and then clean up our mess
      currentSlide.element.style.position = 'relative';
      targetSlide.element.style.zIndex = '1';
      currentSlide.element.style.zIndex = '0';
      targetSlide.element.style.position = 'relative';
      targetSlide.element.classList.add('transition');

      self.element.style.width = '';
      self.element.style.height = '';

      self.allowNav = true;

      /*
       * Clearly, we need to do some refactoring,
       * but let's get this working first.
       * if (typeof dragLine !== 'undefined') {
       *   dragLine(targetSlide.element.childNodes[0]);
       * } 
       */
    }, targetSlide.transDuration());
  },
  toSlide: function(slideIndex) {
    var setStage = function() {
    };
    this[this.animationType+'To'](slideIndex);
  },
  nextSlide: function() {
    if (!this.allowNav) return false;
    var targetIndex = this.getCurrentIndex() +1;
    if (targetIndex > this.slides.length-1) targetIndex = 0;
    this.toSlide(targetIndex);
  },
  prevSlide: function() {
    if (!this.allowNav) return false;
    var targetIndex = this.getCurrentIndex()-1;
    if (targetIndex < 0) targetIndex = this.slides.length-1;
    this.toSlide(targetIndex);
  },
  setMaxHeight(maxHeight) {
    this.element.style.maxHeight = maxHeight;
  }
};

