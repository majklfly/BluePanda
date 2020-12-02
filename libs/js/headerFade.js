(function($) {
    $.fn.heroFade = function() {
        var self = this;
        var windowHeight = $(window)[0].innerHeight;
        var windowScrollTop = $(window).scrollTop();
        var heroFadeFunction = function() {
            return self.each(function() {
                if (windowScrollTop <= windowHeight) {
                    var scrollPercent = windowScrollTop / windowHeight,
                        scrollTransform = scrollPercent * 150;
                    // self.find("#headBackground").css({
                    //     opacity: scrollPercent,
                    // });
                    self.find("#headBackground").css({
                        transform: "translate(0, -" + scrollTransform + "%)",
                        opacity: 1 - scrollPercent,
                    });
                    if (scrollTransform > 20) {
                        self.find("header").css({
                            position: "fixed",
                            top: "0px",
                            opacity: 1,
                        });
                    } else {
                        self.find("header").css({
                            position: "absolute",
                            top: "auto",
                            bottom: "2.5vh",
                            opacity: 0.8,
                        });
                    }
                }
            });
        };

        $(window).on("scroll", function() {
            windowHeight = $(window)[0].innerHeight;
            windowScrollTop = $(window).scrollTop();
            heroFadeFunction();
        });

        heroFadeFunction();
        return self;
    };
})(jQuery);