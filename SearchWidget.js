(function () {
  // Create a container for the chat widget
  const container = document.createElement("div");
  container.id = "my-chat-widget-container";
  container.style.position = "fixed";
  container.style.top = "32px";
  container.style.left = "50%";
  container.style.transform = "translateX(-50%)";
  container.style.maxWidth = "780px";
  container.style.width = "100%";
  container.style.height = "80vh";
  container.style.maxHeight = "780px";
  container.style.padding = "16px";
  container.style.borderRadius = "16px";

  container.style.zIndex = "1000"; // Ensure the chat widget appears above all other page elements
  document.body.appendChild(container);

  // Create the chat icon
  const chatIcon = document.createElement("img");
  chatIcon.src =
    "https://raw.githubusercontent.com/Jogenius22/chatwidget/main/magnifying-glass.png"; // replace with the URL of your search icon image
  chatIcon.style.width = "32px";
  chatIcon.style.height = "32px";
  chatIcon.style.cursor = "pointer";
  // chatIcon.style.position = "fixed";
  // chatIcon.style.top = "32px";
  // chatIcon.style.right = "32px";
  chatIcon.style.zIndex = "1001"; // Make sure the icon is above the chat widget
  document.body.appendChild(chatIcon);

  // Create the iframe that will contain the chat widget, but keep it hidden initially
  const iframe = document.createElement("iframe");
  iframe.src = "https://chatbot-ui-lite-sooty.vercel.app"; // replace with the URL of your deployed Next.js app
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.borderRadius = "16px";
  iframe.style.border = "none";
  iframe.style.backgroundColor = "transparent";
  iframe.style.padding = "0";
  iframe.style.margin = "0";
  iframe.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.25)"; // Give the chat widget a drop shadow for a "raised" effect

  iframe.style.display = "none"; // keep the iframe hidden initially
  container.appendChild(iframe);

  // Create the "close" button
  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.style.position = "absolute";
  closeButton.style.top = "25px";
  closeButton.style.right = "25px";
  closeButton.style.textColor = "white";
  closeButton.style.borderRadius = "50%";

  closeButton.style.display = "none"; // keep the close button hidden initially
  container.appendChild(closeButton);

  // Show the chat widget and close button, and hide the chat icon, when the chat icon is clicked
  chatIcon.addEventListener("click", function () {
    if (iframe.style.display === "none") {
      iframe.style.display = "block";
      closeButton.style.display = "block";
    } else {
      iframe.style.display = "none";
      closeButton.style.display = "none";
    }
  });

  // Hide the chat widget and close button, and show the chat icon, when the close button is clicked
  closeButton.addEventListener("click", function () {
    chatIcon.style.display = "block";
    iframe.style.display = "none";
    closeButton.style.display = "none";
  });
})();
