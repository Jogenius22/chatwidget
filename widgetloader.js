(function () {
  // Create a container for the chat widget
  const container = document.createElement('div');
  container.id = 'my-chat-widget-container';
  container.style.position = 'fixed';
  container.style.bottom = '20px';
  container.style.right = '20px';
  container.style.backgroundColor = 'transparent';

  container.style.zIndex = '1000';  // Ensure the chat widget appears above all other page elements
  document.body.appendChild(container);

  // Create the chat icon
  const chatIcon = document.createElement('img');
  chatIcon.src = 'https://raw.githubusercontent.com/Jogenius22/chatwidget/main/chatbot.png'; // replace with the URL of your chat icon image
 chatIcon.style.width = '50px';
  chatIcon.style.height = '50px';
  chatIcon.style.cursor = 'pointer';
  chatIcon.style.position = 'fixed';
  chatIcon.style.bottom = '20px';
  chatIcon.style.right = '20px';
  chatIcon.style.zIndex = '1001'; // Make sure the icon is above the chat widget
  document.body.appendChild(chatIcon);

  // Create the iframe that will contain the chat widget, but keep it hidden initially
  const iframe = document.createElement('iframe');
  iframe.src = 'https://beyin-rtb7-njvb7pohu-jogenius22.vercel.app/chatwidget';  // replace with the URL of your deployed Next.js app
   iframe.style.width = '400px';
  iframe.style.height = '550px';
  iframe.style.border = 'none';
  iframe.style.backgroundColor = 'transparent';

  iframe.style.display = 'none';  // keep the iframe hidden initially
  iframe.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.25)';  // Give the chat widget a drop shadow for a "raised" effect
  container.appendChild(iframe);

  // Create the "close" button
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '16px';
  closeButton.style.right = '16px';
  closeButton.style.backgroundColor = 'white';
  closeButton.style.border = '1px solid black';
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
