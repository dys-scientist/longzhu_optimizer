var lzStatus = false;

var matchDomain = false;

var currentTabId;

chrome.browserAction.onClicked.addListener( update );

chrome.tabs.onUpdated.addListener(function( tab ){

    if( currentTabId == tab ){

    }
	
})

chrome.history.onVisited.addListener(function( historyItem ){

    lzStatus = false;
	
    checkDomain( historyItem );

    refresh();
	
});

chrome.tabs.onActiveChanged.addListener( onActiveChanged );

function update( tab ) {

    checkDomain( tab );
	
    if( !matchDomain ){
	
        alert('仅在龙珠德云色直播间内，才可以使用小助手！');

        return;
		
    }

    currentTabId = tab.id;
    
    lzStatus = !lzStatus;
	
    var icon = lzStatus ? "img/icon_busy.png" : "img/icon_normal.png";
	
    chrome.browserAction.setIcon({ path:icon });
	
    chrome.tabs.executeScript({
	
        code:'lz.toggle && lz.toggle('+lzStatus+');'
		
    });
}

function refresh(){

    lzStatus = false;
	
    chrome.browserAction.setIcon({ path:"img/icon_disabled.png" });
	
}

function checkDomain( obj ){   

    if( obj && obj.url ){
	
        matchDomain = obj.url.search( /longzhu\.com/ig ) == -1 ? false : true;
		
    }else{
	
        matchDomain = false;
		
    }
}

function onActiveChanged( obj ){

    if( obj && !isNaN(obj) ){
	
        if( obj != currentTabId ){
		
            chrome.browserAction.setIcon({ path:"img/icon_disabled.png" });
			
        }else if(lzStatus){
		
            chrome.browserAction.setIcon({ path:"img/icon_busy.png" });
			
        }else{
		
            chrome.browserAction.setIcon({ path:"img/icon_normal.png" });
			
        }
		
    }else{
	
        chrome.tabs.get( obj, function(){
		
            if( arguments[0] && arguments[0].url ){
			
                checkDomain(arguments[0]);
				
            }else{
			
                matchDomain = false;
				
            }
			
        });
		
    }

}