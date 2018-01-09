var lz = lz || {};


lz.allowed = false;

lz.firstRun = true;

lz.timeout;


lz.toggle = function(status){

    lz.allowed = status;	

    if( lz.allowed ){
	
        start();
		
    }else{
	
        pause();
		
    }

    function start(){
	
		removeAd();
	
        if( lz.allowed ) requestAnimationFrame( checker );
		
		if( lz.firstRun ) lz.firstRun = false;
		
    }
	
	function removeAd(){
	
		$( '.chatroom-ap' ).remove();
	
		$( '#chat-limit-scroll-container' ).find( '.effect-panel-outer' ).hide();
		
	}
    
    function checker(){		
		
		$( '#chat-limit-scroll-container' ).find( '.effect-panel-outer' ).hide();
		
		$( '#effect-animate' ).hide();
		
		$( '#chatroom' ).find( '.effect-panel-outer' ).hide();
	
        var a = $( '#chat-limit-scroll-container' ).find( '.pt-chat-plugins-cell' );

		var n = a.length;

		while(--n > 0){

			var el = $( '#chat-limit-scroll-container' ).find('.pt-chat-plugins-cell')[n];

			if( $(el).find('.send-text').length ) $(el).hide();
			
			var re = new RegExp( /^\d{1,}(6)$/ );
			
			if( re.test( $(el).find('.message-content').text() ) ) $(el).hide();
			
		}
		
		if( lz.allowed ) requestAnimationFrame( checker );
    }

    function pause(){
	
        cancelAnimationFrame();
		
    }
	
}