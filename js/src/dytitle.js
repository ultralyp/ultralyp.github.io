var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr('href', "/TEP.png");
        document.title = 'w(ﾟДﾟ)w 快来看看吉之！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="shortcut icon"]').attr('href', "/favicon.png");
        document.title = '♪(^∇^*)吉之的博客 ' + OriginTitile;
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});
