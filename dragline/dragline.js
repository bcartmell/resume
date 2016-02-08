/*
 * DragLine -- A simple plugin to allow for drag scrolling
 */


var dragLine = (function() {
  var draglineClassName = 'dragline-draggable';

  var calcMinPos = function(element) {
    return element.parentElement.clientHeight-element.scrollHeight;
  };

  return function(element) {
    if (element.className.indexOf(draglineClassName) !== -1) {
      // We've done this before
      return false;
    }
    this.element = element;
    this.element.classList.add('dragLine-draggable');

    var startPos;
    var downPos;
    var maxPos = 0;
    var minPos = calcMinPos(element);

    var moveListener = function(event) {
      if (event.touches && event.touches.length > 1) endScroll();
      // if touchlength is greater than 1,
      // the user is probably trying to zoom, 
      // let's stay out of there way.
      else {
        event.preventDefault();
        event.stopPropagation();
        var change =  {
          x: downPos.x - (event.x || event.touches[0].clientX),
          y: downPos.y - (event.y || event.touches[0].clientY)
        }
        element.style.top = startPos.y - change.y +'px';
      }
    }

    var bounceToBoundry = function(pos) {
      element.classList.add('transition-position');
      element.style.top = pos+'px';
      setTimeout(function() {
        element.classList.remove('transition-position');
      }, helpers.getTransDuration(element));
    }

    var startScroll = function() {
      startPos = {
        x: parseInt(element.style.left) || 0,
        y: parseInt(element.style.top) || 0
      };
    };

    var endScroll = function() {
      if (parseInt(element.style.top) > maxPos) bounceToBoundry(maxPos);
      if (parseInt(element.style.top) < minPos) bounceToBoundry(minPos);
    }

    var endMouseListener = function() {
      endScroll();
      event.target.classList.remove('dragLine-dragging');
      window.removeEventListener('mousemove', moveListener, false);
      window.removeEventListener('mouseup', endMouseListener, false);
    };

    var endTouchListener = function() {
      endScroll();
      window.removeEventListener('touchmove', moveListener, false);
      window.removeEventListener('touchend', endTouchListener, false);
    }

    this.element.addEventListener('mousedown', function(event) {
      startScroll();
      event.target.classList.add('dragLine-dragging');
      downPos =  {x: event.x, y:event.y}
      window.addEventListener('mousemove', moveListener, false);
      window.addEventListener('mouseup', endMouseListener, false);
    });

    this.element.addEventListener('touchstart', function(event) {
      if (event.touches.length > 1) endscroll(); 
      // if touchlength is greater than 1,
      // the user is probably trying to zoom, 
      // let's stay out of there way.

      else {
        startScroll();
        downPos =  {x: event.touches[0].clientX, y:event.touches[0].clientY }
        window.addEventListener('touchmove', moveListener, false);
        window.addEventListener('touchend', endTouchListener, false);
      }
    });

    window.addEventListener('resize', function() {
      minPos = calcMinPos(element);
    });
  };
}());
