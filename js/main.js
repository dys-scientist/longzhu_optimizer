var lz = lz || {};

lz.allowed = false;

lz.firstRun = true;


lz.toggle = function(status){

    lz.allowed = status;    

    if( lz.allowed ){
    
        start();
        
    }else{
    
        pause();
        
    }

    function start(){
	
		/*
        * @author lync
        */
		optimizeCss();
    
        removeAd();
    
        if( lz.allowed ) requestAnimationFrame( checker );
        
        if( lz.firstRun ) lz.firstRun = false;
        
    }

    function removeAd() {
        /*
        * @author ziyucao
        */
        $('.quiz-intrduction').remove();
        $('.images-link-sp').attr("style", "margin-bottom:160px");
        $('.stage-inner').attr("style", "position: relative; padding-right:6rem; padding-bottom:50px");
        $('.image-link-top').remove();
        $('.header').parent().attr("class","stage-container-head");
        $('.gift-radio').parent().remove();
        $('.topbar-nav-yzcm').remove();
        $('.topbar-nav-shop-hover').remove();
        $('.tencent-popup').remove();
        $('.live-footer-hotgames').remove();
        $('.live-footer-games').remove();
        $('.official-activities').remove();
        $('.challenge-task').remove();
        $('.simplesidenav-nav').remove();
        $('.stage').attr("style", "");
        $('.top-banner-pic').remove();
        $('.chatroom-ap').remove();

		$('#right-nav').remove();
        $('#chat-limit-scroll-container').find('.effect-panel-outer').hide();
		
        $( '.chatroom-con' ).css( 'user-select','auto' );
		$( '#right-nav' ).remove();
		
		$( '.gallery' ).remove();
		$( '.bottom-image-small' ).remove();
    }
	
	function optimizeCss(){
	
		$( '.header' ).css( 'border-radius' , '4px 4px 4px 4px' );
		
		$( '.stage-container-right' ).css( 'border-radius','0px 4px 4px 0px' );
		
		// 将竞猜模块移动到聊天窗口方便操作
		var l = $( '#chatroom-tabs' ).find( '.goog-tab' ).length;
		
		$( $( '#chatroom-tabs' ).find( '.goog-tab' )[l-1]).text( '德云色竞猜党' );
		
		// 移除礼物列表
		$( '#gift-history-list-scroll' ).hide();
		
		$( '.gift-history-list' ).append( $('#guess') );
		
		
		
	}

    function checker(){
		/*
        * @author lync
        */
		
		// 屏蔽贵族进场特效
		$( '#chat-limit-scroll-container' ).find( '.pt-cars-enter' ).hide();
		
		$( '#chat-limit-scroll-container' ).find( '.user_enter_msg' ).hide();
    
        $( '#live-player' ).find( '.tp-link.report-rbi-static' ).hide()
        
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

    function pause() {

        cancelAnimationFrame();

    }

}