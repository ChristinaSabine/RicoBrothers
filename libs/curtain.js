$(document).ready(function(){
    
			var action = 1;
			// when user clicks inside the container...
			$('#curtain_wrapper').click(function(){
                
			
                
            if ( action == 1 ) {
				//...animate the 2 curtain images to width of 50px with duration of 2 seconds...
				$(this).children('img.curtain').animate({ width: 50 },{duration: 2000});
            action = 2;
                //...show the content behind the curtains with fadeIn function (2 seconds)
				$(this).children('#curtain_content').fadeIn(2000);
    } else {
                  
                $(this).children('img.curtain').animate({ width: 418 },{duration: 2000});
                        
                      action = 1;
        $(this).children('#curtain_content').fadeOut(2000);
    }
                
				
				
			});
			
		});      	