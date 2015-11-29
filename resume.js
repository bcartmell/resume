var helpers = {
  cleanSpaces: function(str) {
    return str.replace(/\W+/g,' ').trim();
  },

  addClass: function(target, newClass) {
    target.className = newClass;
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
      self.hideModals();
      hideElement(self.element);
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
    var curtain = document.getElementById('modal-curtain'); 
    if (curtain === null) {
      curtain = new Curtain();
    }
    curtain
    return curtain;
  }

  function hideElement(element) {
    var className = element.className || '';
    if (className.search('hidden') === -1) {
      element.style.opacity = 1;
      window.setTimeout(function() {
        helpers.addClass('hidden');
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
    options.tagName = options.tagName || 'div'
    options.id = options.id || '';
    options.className = 'hidden transition modal '+ (options.className || '');
    options.className = helpers.cleanSpaces(options.className);
    options.target = options.target || null;
    options.content = options.content || '';

    // setup primary container
    this.element = document.createElement(options.tagName);
    this.element.id = options.id;
    this.element.innerHTML = options.content;
    this.element.className = options.className;

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

    // return
    return this;
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

var newModal;
window.onload = function() {
  newModal = modaller.newModal({ content: '<h1>New Modal<h2><p>I made a modal</p>' });
};
