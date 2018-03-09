document.querySelector('form.transfer-form').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        event.target.style.opacity = (!event.target.style.opacity || event.target.style.opacity == 1)? 0.5 : 1;
    }
});
