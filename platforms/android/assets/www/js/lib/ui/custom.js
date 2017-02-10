var mainslider;
var sliding = false;

$(document).ready(function(){
    var options = {
        slides: '.ayuda', // The name of a slide in the slidesContainer
        swipe: false,    // Add possibility to Swipe > note that you have to include touchSwipe for this
        transition: "slide", // Accepts "slide" and "fade" for a slide or fade transition
        slideTracker: true, // Add a UL with list items to track the current slide
        slideTrackerID: 'slideposition', // The name of the UL that tracks the slides
        slideOnInterval: false, // Slide on interval
        interval: 19000, // Interval to slide on if slideOnInterval is enabled
        animateDuration: 1000, // Duration of an animation
        animationEasing: 'ease', // Accepts: linear ease in out in-out snap easeOutCubic easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine easeInOutSine easeInBack easeOutBack easeInOutBack
        pauseOnHover: false, // Pause when user hovers the slide container
        magneticSwipe: true, // This will attach the slides to the mouse's position when swiping/dragging
        neverEnding: true // Enable this to create a 'neverending' effect.
    };

    $(".ayudar").simpleSlider(options);
    mainslider = $(".ayudar").data("simpleslider");
    /* yes, that's all! */

    $(".ayudar").on("beforeSliding", function(event){
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".ayudar .ayuda[data-index='" + prevSlide + "'] .slidecontent").fadeOut();
        $(".ayudar .ayuda[data-index='" + newSlide + "'] .slidecontent").hide();

        sliding = true;
    });

    $(".ayudar").on("afterSliding", function(event){
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".ayudar .ayuda[data-index='"+newSlide+"'] .slidecontent").fadeIn();
        sliding = false;
    });

    /**
     * Control the slider by scrolling
     */
    $(window).bind('mousewheel', function(event) {
        if(!sliding){
            if(event.originalEvent.deltaY > 0){
                mainslider.nextSlide();
            }
            else{
                mainslider.prevSlide();
            }
        }
    });

    $(".ayuda#first").backstretch("images/bg1.jpg");
    $(".ayuda#sec").backstretch("images/bg2.jpg");
    $(".ayuda#thirth").backstretch("images/bg4.jpg");
    $(".ayuda#fourth").backstretch("images/bg5.jpg");

    $('.ayuda .backstretch img').on('dragstart', function(event) { event.preventDefault(); });

    $(".slidecontent").each(function(){
        $(this).css('margin-top', -$(this).height()/2);
    });
});
