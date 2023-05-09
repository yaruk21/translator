document.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString();
    if (selectedText !== '') {
        console.log('Selected text:', selectedText);
        // додаткові дії з отриманим виділеним текстом
    }
});
