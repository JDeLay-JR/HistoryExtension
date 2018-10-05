/* global chrome */

// Grabs text and sends it to React Component
document.addEventListener('mouseup', () => {
  const selectedText = window.getSelection().toString();
  chrome.storage.sync.set({ selectedText });
});

// Listens for openPopup from background.js; Injects React iFrame into current tab
chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'openPopup') {
    document.body.innerHTML += `<dialog style="height:40%">
        <iframe id="headlineFetcher"style="height:100%"></iframe>
        <div style="position:absolute; top:0px; left:5px;">
            <button>x</button>
        </div>
        </dialog>`;
    const dialog = document.querySelector('dialog');
    dialog.showModal();
    const iframe = document.getElementById('headlineFetcher');
    iframe.src = chrome.extension.getURL('/public/index.html');
    iframe.frameBorder = 0;
    dialog.querySelector('button').addEventListener('click', () => {
      dialog.close();
    });
  }
});
