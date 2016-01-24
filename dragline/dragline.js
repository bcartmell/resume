/*
 * DragLine -- A simple plugin to allow for drag scrolling
 */


var dragLine = (function() {
  var draglineClassName = 'dragline-draggable';
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
    var minPos = element.parentElement.clientHeight-element.scrollHeight;

    var moveListener = function(event) {
      event.preventDefault();
      event.stopPropagation();
      var change =  {
        x: downPos.x - event.x,
        y: downPos.y - event.y
      }
      element.style.top = startPos.y - change.y +'px';
    }

    var bounceToBoundry = function(pos) {
      element.classList.add('transition-position');
      element.style.top = pos+'px';
      setTimeout(function() {
        element.classList.remove('transition-position');
      }, helpers.getTransDuration(element));
    }

    var endListener = function() {
      if (parseInt(element.style.top) > maxPos) bounceToBoundry(maxPos);
      if (parseInt(element.style.top) < minPos) bounceToBoundry(minPos);
      window.removeEventListener('mousemove', moveListener, false);
      window.removeEventListener('mouseup', endListener, false);
    }

    this.element.addEventListener('mousedown', function(event) {
      startPos = {
        x: parseInt(this.style.left) || 0,
        y: parseInt(this.style.top) || 0
      };
      downPos =  {x: event.x, y:event.y}
      window.addEventListener('mousemove', moveListener, false);
      window.addEventListener('mouseup', endListener, false);
    });
  };
}());
