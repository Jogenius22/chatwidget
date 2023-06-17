(function () {
  // Create a container for the chat widget
  const container = document.createElement('div');
  container.id = 'my-chat-widget-container';
  container.style.width = '350px';
  container.style.height = '500px';
  container.style.position = 'fixed';
  container.style.bottom = '20px';
  container.style.right = '20px';
  document.body.appendChild(container);

  // Create the chat icon
  const chatIcon = document.createElement('img');
  chatIcon.src = 'https://beyin-rtb7.vercel.app/playground_assets/gpt-200h.png'; // replace with the URL of your chat icon image
  chatIcon.style.width = '50px';
  chatIcon.style.height = '50px';
  chatIcon.style.cursor = 'pointer';
  container.appendChild(chatIcon);

  // Create the iframe that will contain the chat widget, but keep it hidden initially
  const iframe = document.createElement('iframe');
  iframe.src = 'https://beyin-rtb7.vercel.app/chatwidget';  // replace with the URL of your deployed Next.js app
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.display = 'none';  // keep the iframe hidden initially
  container.appendChild(iframe);

  // Create the "close" button
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '0';
  closeButton.style.right = '0';
  closeButton.style.display = 'none';  // keep the close button hidden initially
  container.appendChild(closeButton);

  // Show the chat widget and close button, and hide the chat icon, when the chat icon is clicked
  chatIcon.addEventListener('click', function () {
    chatIcon.style.display = 'none';
    iframe.style.display = 'block';
    closeButton.style.display = 'block';
  });

  // Hide the chat widget and close button, and show the chat icon, when the close button is clicked
  closeButton.addEventListener('click', function () {
    chatIcon.style.display = 'block';
    iframe.style.display = 'none';
    closeButton.style.display = 'none';
  });
})();

