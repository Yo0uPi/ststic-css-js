// 防抖函数: fn -> 逻辑, time -> 防抖时间
function debounce(fn, time) {
    let timer;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, time);
    };
}

// 复制提醒
document.addEventListener("copy", debounce(function () {
    Vue.prototype.$notify({
        title: "哎嘿！复制成功🍬",
        message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
        position: 'top-left',
        offset: 50,
        showClose: true,
        type: "success",
        duration: 5000
    });
}, 300));
