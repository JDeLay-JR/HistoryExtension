let contextMenuItem = {
    'id': 'hist',
    "title": 'Open this selection in History Extension',
    "contexts": ['selection'],
    "onclick": open
}

function open() {
    return window.alert("YOU CLICKED ME!")
}

chrome.contextMenus.create(contextMenuItem)