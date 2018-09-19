console.log("page has loaded!")

document.addEventListener('mouseup', function() {
    var text = getSelectedText();
    if (text!='') alert(text);
});

function getSelectedText() {
        if (window.getSelection) {
            return window.getSelection().toString();
        } else if (document.selection) {
            return document.selection.createRange().text;
        }
    return ''
    }