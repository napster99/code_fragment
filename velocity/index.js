/**
 * Demos for Velocity.js.
 * @author morrisonleisure@163.com
 */

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$("#dataBody-Performance2BtnStart").on("click", function() {
    /* Object references. */
    var $performanceUIIndicator = $("#performanceUIIndicator"),
        $performanceUI = $("#performanceUI"),
        $performanceUIDivs = $("#performanceUI div");

    /* Ensure that GSAP isn't turned on since it overwrites jQuery's native $.animate(). */
    $.gsap.enabled(false);

    /* Indicator preparation. */
    $performanceUIIndicator
        .html("jQuery")
        .velocity({ opacity: 1, colorRed: 200, colorGreen: 0 }, { display: "block", duration: 3500 });

    /* Comparison queueing. */
    $.each([ "animate", "velocity" ], function(i, animationLibrary) {
        $performanceUI
            .delay(500)
            /* Animation. Use shorter durations for mobile (since they have smaller screens and we're animating based on %). */
            [animationLibrary]({ bottom: "50%" }, { duration: isMobile ? 1750 : 2000 })
            [animationLibrary]({ bottom: "-50%" }, { duration: isMobile ? 1250 : 1500 })
            /* Indicator updating. */
            .queue(function() {
            	console.log('zhangxiaojian', i)
                if (i === 0) {
                    $performanceUIIndicator
                        .html("Velocity")
                        .velocity({ colorRed: 0, colorGreen: 200 }, 350);
                } else {
                   $performanceUIIndicator.velocity({ opacity: 0 }, { display: "none", duration: 350 });
                }

                $performanceUI.dequeue(); 
            });
    });
});