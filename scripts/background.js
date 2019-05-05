/* global chrome */

// Context Menu Options
const contextMenuItem = {
  id: 'History Extension',
  title: 'Open this selection in History Extension',
  contexts: ['selection'],
};

// Creates Context Menu
chrome.contextMenus.create(contextMenuItem);

// Listens for a click on the context menu; sends message to content_script.js
chrome.contextMenus.onClicked.addListener((event) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'openExtension' });
  });
});
