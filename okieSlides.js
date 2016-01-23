var Slide = function (contentSource, index) {
  var self = this;
  this.element = document.createElement('li');
  this.index = index;
  contentSource.setAttribute('data-okie-slide-index', index);
  this.element.classList.add('slide');
  this.element.classList.add('transition');
  this.element.appendChild(contentSource.cloneNode(true));

  this.transDuration = function() {
    var duration = getComputedStyle(self.element).transitionDuration;
    return parseFloat(duration)*1000
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
  }
}

var OkieShow = function(contentSource) {
  var self = this;

  function makeButton(btnClass) {
    var button = document.createElement('button');
    button.classList.add(btnClass);
    button.classList.add('transition');
    return button;
  }

  this.contentSet = [].filter.call(contentSource.childNodes, function(node) {
    return node instanceof Element;
  });

  this.element = document.createElement('div');
  this.element.classList.add('okie-show');

  this.slideContainer = document.createElement('ul');
  this.slideContainer.classList.add('transition');
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
  toSlide: function(slideIndex) {
    var self = this;
    var currentSlide = this.getCurrentSlide();
    var targetSlide = this.slides[slideIndex];

    // Set element widths so they don't change when we add position:absolute
    this.element.style.width = getComputedStyle(this.element).width;
    this.element.style.height = getComputedStyle(this.element).height;

    if (!currentSlide) {
      targetSlide.show();
      return;
    }

    currentSlide.element.style.position = 'absolute';
    targetSlide.element.style.position = 'absolute';

    currentSlide.element.style.zIndex = '1';

    targetSlide.element.classList.remove('transition');
    targetSlide.show();
    currentSlide.hide();

    setTimeout(function() {
      currentSlide.element.style.position = 'relative';
      targetSlide.element.style.zIndex = '1';
      currentSlide.element.style.zIndex = '0';
      targetSlide.element.style.position = 'relative';
      targetSlide.element.classList.add('transition');

      self.element.style.width = '';
      self.element.style.height = '';
    }, currentSlide.transDuration()+50);
  },
  nextSlide: function() {
    var targetIndex = this.getCurrentIndex() +1;
    if (targetIndex > this.slides.length-1) targetIndex = 0;
    this.toSlide(targetIndex);
  },
  prevSlide: function() {
    var targetIndex = this.getCurrentIndex()-1;
    if (targetIndex < 0) targetIndex = this.slides.length-1;
    this.toSlide(targetIndex);
  }
};

