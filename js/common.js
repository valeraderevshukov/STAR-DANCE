head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	$(".js-show-col").click(function(){
		$(".js-teacher-row").show();
	});

	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	// slick
	$('.slider').slick({
	  speed: 300,
	  slidesToShow: 8,
	  slidesToScroll: 1
	});

	// slick
	$('.slider2').slick({
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1
	});

	    var day = 9
	    var month = 05
	    var year = 2014
	    var hour = 23
	    var min = 59
	    var sec = 1
		
			
			var m=new Date();
	    $('#countdown_dashboard').countDown({
	        targetOffset: {
				'day': 		0,
				'month': 	0,
				'year': 	0,
				'hour': 	(23-m.getHours()),
				'min': 		(60-m.getMinutes()),
				'sec': 		(60-m.getSeconds())
			}, 
	        // onComplete function
	        onComplete: function() { 
	            
				
				
			reset();
		}
		
	    });

	function reset() {
	    $('#countdown_dashboard').stopCountDown();
	    $('#countdown_dashboard').setCountDown({
	        targetDate: {
	            'day':      day,
	            'month':    month,
	            'year':     year,
	            'hour':     hour,
	            'min':      min,
	            'sec':      sec
	        }
	    });             
	    $('#countdown_dashboard').startCountDown();
	}

});