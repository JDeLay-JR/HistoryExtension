/* global chrome */
let evt;
// Grabs text and sends it to React Component
document.addEventListener('mouseup', async (event) => {
  evt = event
  chrome.storage.sync.set({ selectedText: window.getSelection().toString()});
});

// Listens for openPopup from background.js; Injects React iFrame into current tab
chrome.runtime.onMessage.addListener(async (request) => {
  if (request.type === 'openExtension') {

    // If the container exists on the DOM remove it
    let extensionContainer = document.getElementById('extensionContainer')
    if (extensionContainer !== null) {
      extensionContainer.parentNode.removeChild(extensionContainer)
    }

    // Create the extension container
    extensionContainer = document.createElement('div');
    extensionContainer.setAttribute('id', 'extensionContainer')
    extensionContainer.setAttribute('style', `
      position: absolute;
      background-color: #fff;
      width: 500px;
      height: 500px;
      border: 1px solid #dddddd;
      box-shadow: 2px 3px 20px #777777;
      top: ${evt.pageY}px;
      left: ${evt.pageX}px;
      z-index: 10000;
    `)
    
    // Append an iframe to run the extension
    extensionContainer.innerHTML = `
    <iframe 
      src=${chrome.extension.getURL('/public/index.html')} 
      id="extensionScript 
      frameborder="0"
      style="height: 500px; background: #fff; width: 500px">
    </iframe>`;
  
    document.body.append(extensionContainer);
  }
});
