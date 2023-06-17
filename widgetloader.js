(function () {
  // Create a container for the chat widget
  const container = document.createElement('div');
  container.id = 'my-chat-widget-container';
  document.body.appendChild(container);

  // Create the iframe that will contain the chat widget
  const iframe = document.createElement('iframe');
  iframe.src = 'https://beyin-rtb7.vercel.app/chatwidget';  // replace with the URL of your deployed Next.js app
  iframe.style.width = '350px';
  iframe.style.height = '500px';
  iframe.style.position = 'fixed';
  iframe.style.bottom = '20px';
  iframe.style.right = '20px';
  iframe.style.border = 'none';
  container.appendChild(iframe);

  // Add an event listener to the iframe's load event
  window.addEventListener('message', function (event) {
    // Handle the event here
    console.log(event.data);
  }, false);
})();
