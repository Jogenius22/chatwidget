const chatWidget = (function() {
  let widgetVisible = false;
  let history = [];

  const createWidget = () => {
    const widget = document.createElement('div');
    widget.id = 'chat-widget';
    widget.style.position = 'fixed';
    widget.style.top = '25px';
    widget.style.left = '50%';
    widget.style.transform = 'translateX(-50%)';
    widget.style.maxWidth = '780px';
    widget.style.minHeight = '250px';
    widget.style.padding = '16px';
    widget.style.backgroundColor = '#fff';
    widget.style.zIndex = '9999';

    const iframe = document.createElement('iframe');
    iframe.src = 'https://chatbot-ui-lite-sooty.vercel.app/';
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    widget.appendChild(iframe);
    
    return widget;
  };

  const createSearchIcon = () => {
    const searchIcon = document.createElement('div');
    searchIcon.id = 'search-icon';
    searchIcon.innerHTML = '🔍';
    searchIcon.style.position = 'fixed';
    searchIcon.style.top = '25px';
    searchIcon.style.right = '25px';
    searchIcon.style.fontSize = '24px';
    searchIcon.style.cursor = 'pointer';
    searchIcon.style.zIndex = '9999';
    return searchIcon;
  };

  const toggleWidgetVisibility = () => {
    const widget = document.getElementById('chat-widget');
    if (widgetVisible) {
      widget.style.display = 'none';
      widgetVisible = false;
    } else {
      widget.style.display = 'block';
      widgetVisible = true;
    }
  };

  const handleClickOutsideWidget = (event) => {
    if (!event.target.closest('#chat-widget') && !event.target.closest('#search-icon')) {
      toggleWidgetVisibility();
      document.removeEventListener('click', handleClickOutsideWidget);
    }
  };

  const initChatWidget = () => {
    const body = document.querySelector('body');
    const searchIcon = createSearchIcon();
    body.appendChild(searchIcon);
    
    const widget = createWidget();
    body.appendChild(widget);
    
    searchIcon.addEventListener('click', () => {
      toggleWidgetVisibility();
      document.addEventListener('click', handleClickOutsideWidget);
    });
  };

  return {
    init: initChatWidget,
  };
})();

chatWidget.init();
