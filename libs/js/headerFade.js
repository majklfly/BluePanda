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

                    self.find("#headBackground").css({
                        opacity: 1 - scrollPercent * 3,
                    });

                    self.find("header").css({
                        opacity: 0 + scrollPercent * 3,
                    });
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