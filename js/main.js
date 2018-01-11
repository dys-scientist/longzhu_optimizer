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

        $('#chat-limit-scroll-container').find('.effect-panel-outer').hide();
        $('.chatroom-con').css('user-select','auto');
    }

    function checker(){
    
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