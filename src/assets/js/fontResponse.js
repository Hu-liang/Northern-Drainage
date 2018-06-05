
;(function(win){
    var doc = win.document;
    var docEl = doc.documentElement;
    var Dpr = 1, uAgent = window.navigator.userAgent;
    var isIOS = uAgent.match(/iphone/i);
    var isAndroid= uAgent.indexOf('Android') > -1 || uAgent.indexOf('Adr') > -1;
    var isYIXIN = uAgent.match(/yixin/i);
    var is2345 = uAgent.match(/Mb2345/i);
    var ishaosou = uAgent.match(/mso_app/i);
    var isSogou = uAgent.match(/sogoumobilebrowser/ig);
    var isLiebao = uAgent.match(/liebaofast/i);
    var isGnbr = uAgent.match(/GNBR/i);
    var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth, wDpr, wFsize;
    var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight;
    if (window.devicePixelRatio) {
        wDpr = window.devicePixelRatio;
    } else {
        wDpr = isIOS ? wWidth > 818 ? 3 : wWidth > 480 ? 2 : 1 : 1;
    }
    if(isAndroid){
        var className=docEl.className || '';
        if(window.navigator.platform=="Win32"){
            if(!(className.indexOf('isWindow')>-1)){
                className+=' isWindow';
            }
        }
        if(navigator.userAgent.indexOf('Android') > -1){
            if(!(className.indexOf('isAndroid')>-1)){
                className+=' isAndroid';
            }
        }
        className=className.trim();
        docEl.className=className;
    }
    if (isIOS) {
        wWidth = screen.width;
        wHeight = screen.height;
    }
    if (wWidth > wHeight) {
        wWidth = wHeight;
    }
    if(isAndroid && window.innerWidth==screen.width && window.innerWidth>1000){
        wWidth=screen.width/wDpr;
    }
    wFsize = wWidth > 1080 ? 144 : wWidth / 7.5;
    wFsize = wFsize > 32 ? wFsize : 32;
    if (isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr) {
        setTimeout(function () {
            wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth;
            wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight;
            wFsize = wWidth > 1080 ? 144 : wWidth / 7.5;
            wFsize = wFsize > 32 ? wFsize : 32;
            docEl.setAttribute('data-dpr', wDpr);
            docEl.style.fontSize = wFsize + 'px';
            /*document.getElementsByTagName('html')[0].dataset.dpr = wDpr;
            document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';*/
        }, 500);
    } else {
        docEl.setAttribute('data-dpr', wDpr);
        docEl.style.fontSize = wFsize + 'px';
        /*document.getElementsByTagName('html')[0].dataset.dpr = wDpr;
        document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';*/
    }
})(window);
