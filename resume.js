var helpers = {
  cleanSpaces: function(str) {
    return str.replace(/\W+/g,' ').trim();
  },

  addClass: function(target, newClass) {
    newClass = helpers.cleanSpaces(target.className +' '+ newClass);
    target.className = newClass;
  },

  removeClass: function(target, className) {
  }
}


var modaller = (function() {
  function createCurtain() {
    curtain = document.createElement('div');
    curtain.id = 'modal-curtain';
    curtain.className = 'hidden transition';
    document.getElementsByTagName('body')[0].appendChild(curtain);
    return curtain;
  }

  function getCurtain() {
    var curtain = document.getElementById('modal-curtain'); 
    return (curtain === null)? createCurtain() : curtain;
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
    helpers.addClass(this.closeButton, 'fa fa-close');
    this.element.prependChild(this.closeButton);

    // attach to curtain
    this.curtain = getCurtain();
    this.curtain.appendChild(this.element);

    // return
    return this;
  };

  Modal.prototype = {
    show: function() {
      showElement(this.curtain);
      showElement(this.element);
      return this;
    },
    hide: function() {
      hideElement(this.element);
      hideElement(this.curtain);
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
  newModal = new modaller.newModal({ content: '<h1>New Modal<h2><p>I made a modal</p>' });
};
