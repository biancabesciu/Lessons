/**
 * Created by Bianca on 12/08/2017.
 */
//Select elements with a jQuery selector and call the fancybox method:

$("[data-fancybox]").fancybox({
    // Options will go here
});

//click event handler is attached only to the currently selected elements
//using select option
$().fancybox({
    selector : '[data-fancybox="images"]',
    loop     : true
});


$().fancybox({
    selector : '[data-fancybox="images"]',
    thumbs   : false,
    hash     : false,
});

//creating the slide
$(".main-slider").slick({
    slidesToShow   : 4,
    slidesToScroll : 4,
    infinite   : true,
    dots       : false,
    arrows     : false,
    responsive : [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//youtube video - hide controls and info
$('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
});