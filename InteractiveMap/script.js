const forest = document.getElementById('hover');

    // this handler will be executed only once when the cursor moves over the unordered list
    forest.addEventListener("mouseenter", function( event ) {
        // highlight the mouseenter target
        event.target.style.color = "purple";

        //reset the color after a short delay
        setTimeout(function() {
            event.target.style.color = "";
        }, 500);
    }, false);

