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

    // discover if current slide is the last one
    hasNext: function() {
      return (this.currentIndex() < (this.length-1));
    },

    // Go to specific slide by index
    toIndex: function(index) {
      var newIndent = this.findIndent(index);
      this.slideContainer.setAttribute('style', 'text-indent:'+ newIndent +'%');
    },

    // navigate to next slide
    next: function() {
      var newindex;
      if (!this.hasnext()) newindex = '0';
      else newindex = this.currentindex()+1;
      this.toindex(newindex);
    },

    // navigate to previous slide
    previous: function() {
      var newindex;
      if (this.currentindex() === 0) newindex = this.length-1; 
      else newindex = this.currentindex()-1;
      this.toindex(newindex);
    }
  };

