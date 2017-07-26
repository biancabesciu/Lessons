const forest = document.getElementById('event');
test.addEventListener("mouseenter", function( event ) {
    event.target.style.color = "purple";

    /*//reset the color after a short delay*/
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
    }, false);
}