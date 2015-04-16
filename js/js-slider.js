(function($){

    $.fn.compare=function(options){


    	var defauts =
		    {
				'rollback': true
            };  
           
        var params = $.extend(defauts, options);

       return this.each(function(){

	       	var container = $(this);
	       	var lastImgContainer = container.find(".js-slider-last-container");

            container.mousemove(function(e){
        		$(lastImgContainer).css({
        			"width" : container.width() - (e.pageX - container.offset().left)
        		});

	    	});


            if(params.rollback){
            	container.mouseleave(function(){
		        	lastImgContainer.animate({
		        		"width" : "50%"
		        	});
		    	});
            }

       });
    };
})(jQuery);