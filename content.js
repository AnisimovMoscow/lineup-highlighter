document.querySelector('form.transfer-form').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        var player = event.target.parentNode;
        if (player.tagName.toLowerCase() === 'ins') {
            player.style.opacity = (!player.style.opacity || player.style.opacity == 1)? 0.5 : 1;
        }
    }
});
