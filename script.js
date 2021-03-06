function addAccessibilityTabbingFocus(focusColor){
  let currentTabbedFocus = null;
  let focusedTabClass = 'tabbed-focus';

  let css = '.' + focusedTabClass + '{';
  css += 'box-shadow: inset 0px 0px 2px ' + focusColor + ', inset 0px 0px 6px ' + focusColor;
  css += ', 0px 0px 2px ' + focusColor + ', 0px 0px 6px ' + focusColor + '!important;';
  css += 'outline: none;';
  css += '}';

  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));

  const head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(style);

  document.body.addEventListener('keydown', function(e){
    if(currentTabbedFocus !== document.activeElement){
      if(currentTabbedFocus){
        currentTabbedFocus.classList.remove(focusedTabClass);
      }
      currentTabbedFocus = document.activeElement
    }
  });

  document.body.addEventListener('keyup', function(e){
    if (e.which === 9) /* tab */ {
      if(currentTabbedFocus){
        currentTabbedFocus.classList.remove(focusedTabClass);
      }
      currentTabbedFocus = document.activeElement;
      currentTabbedFocus.classList.add(focusedTabClass);
    }
  });

  document.body.addEventListener('mousedown', function(){
    if(currentTabbedFocus){
      currentTabbedFocus.classList.remove(focusedTabClass);
    }
    currentTabbedFocus = null;
  });

};
