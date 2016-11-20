(function($){
    $.fn.slider = function (options) {
        var defauts = {
            'rollback': true,
            'duration' : 400,
            'width' : '50%'
        };

        var params = $.extend (defauts, options);

        return this.each (function() {
            var container = $(this);
            var lastImgContainer = container.find(".js-slider-last-container");

            container.mousemove( function(e) {
                $( lastImgContainer ).css({
                    "width" : container.width() - (e.pageX - container.offset().left) // container's width - mouse's position from left in the container
                });
            });

            if (params.rollback) {
                container.mouseleave( function() {
                    lastImgContainer.animate({
                        "width" : params.width
                    }, params.duration);
                });
            }
        });
    };
})(jQuery);
