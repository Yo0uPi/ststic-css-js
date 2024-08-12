var rm = {};
rm.showRightMenu = function (isTrue, x = 0, y = 0) {
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top', x + 'px').css('left', y + 'px');

    if (isTrue) {
        stopMaskScroll();
        $rightMenu.show();
    } else {
        $rightMenu.hide();
    }
};

let rmWidth = $('#rightMenu').width();
let rmHeight = $('#rightMenu').height();

rm.reloadrmSize = function () {
    rmWidth = $("#rightMenu").width();
    rmHeight = $("#rightMenu").height();
};

window.oncontextmenu = function (event) {
    if (document.body.clientWidth > 768) {
        let pageX = event.clientX + 10; 
        let pageY = event.clientY;
        let $rightMenuNormal = $(".rightMenuNormal");
        let $rightMenuOther = $(".rightMenuOther");
        $rightMenuNormal.show();
        $rightMenuOther.show();
        rm.reloadrmSize();
        
        if (pageX + rmWidth > window.innerWidth) {
            pageX -= rmWidth;
        }
        if (pageY + rmHeight > window.innerHeight) {
            pageY -= rmHeight;
        }
        rm.showRightMenu(true, pageY, pageX);
        $('#rightmenu-mask').attr('style', 'display: flex');
        return false;
    }
};

function removeRightMenu() {
    rm.showRightMenu(false);
    $('#rightmenu-mask').attr('style', 'display: none');
}

function stopMaskScroll() {
    if (document.getElementById("rightmenu-mask")) {
        let xscroll = document.getElementById("rightmenu-mask");
        xscroll.addEventListener("mousewheel", function (e) {
            removeRightMenu();
        }, false);
    }
    if (document.getElementById("rightMenu")) {
        let xscroll = document.getElementById("rightMenu");
        xscroll.addEventListener("mousewheel", function (e) {
            removeRightMenu();
        }, false);
    }
}

function switchDarkMode() {
    removeRightMenu();
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    if (nowMode === 'light') {
        activateDarkMode();
        saveToLocal.set('theme', 'dark', 2);
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
    } else {
        activateLightMode();
        saveToLocal.set('theme', 'light', 2);
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
    }
    typeof utterancesTheme === 'function' && utterancesTheme();
    typeof FB === 'object' && window.loadFBComment();
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200);
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('pjax:complete', function() {});
});

$('#menu-backward').on('click', function () { window.history.back(); });
$('#menu-forward').on('click', function () { window.history.forward(); });
$('#menu-refresh').on('click', function () { window.location.reload(); });
$('#menu-darkmode').on('click', function () { switchDarkMode(); });
$('#menu-home').on('click', function () { window.location.href = window.location.origin; });

$(".menu-link").on("click", function () {
    removeRightMenu();
});

$("#rightmenu-mask").on("click", function () { removeRightMenu(); });
$("#rightmenu-mask").contextmenu(function () {
    removeRightMenu();
    return false;
});

function randomPost() {
    // 获取所有文章链接的元素
    var postLinks = document.querySelectorAll('#post-links a');
    // 随机选择一个文章链接
    if (postLinks.length > 0) {
        var randomIndex = Math.floor(Math.random() * postLinks.length);
        var randomPostUrl = postLinks[randomIndex].href;
        // 跳转到随机文章
        window.location.href = randomPostUrl;
    }
}