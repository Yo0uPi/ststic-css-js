// 通用的防抖函数
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
    new Vue({
        data: function () {
            this.$notify({
                title: "哎嘿！复制成功🍬",
                message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "success",
                duration: 5000
            });
        }
    });
}, 300));

// F12 提醒但不禁用
document.onkeydown = function (e) {
    const keyCode = e.keyCode || e.which;
    if (123 === keyCode || (e.ctrlKey && e.shiftKey && (74 === keyCode || 73 === keyCode || 67 === keyCode)) || (e.ctrlKey && 85 === keyCode)) {
        debounce(function () {
            new Vue({
                data: function () {
                    this.$notify({
                        title: "你已被发现😜",
                        message: "小伙子，扒源记住要遵循GPL协议！",
                        position: 'top-left',
                        offset: 50,
                        showClose: true,
                        type: "warning",
                        duration: 5000
                    });
                }
            });
        }, 300)();
    }
};

// 分享本页
function share_() {
    let url = window.location.origin + window.location.pathname;
    try {
        // 截取标题
        var title = document.title;
        var subTitle = title.endsWith("| Yo0uPiの博客") ? title.substring(0, title.length - 14) : title;
        navigator.clipboard.writeText('Yo0uPiの博客的站内分享\n标题：' + subTitle + '\n链接：' + url + '\n欢迎来访！🍭🍭🍭');
        new Vue({
            data: function () {
                this.$notify({
                    title: "成功复制分享信息🎉",
                    message: "您现在可以通过粘贴直接跟小伙伴分享了！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        });
    } catch (err) {
        console.error('复制失败！', err);
    }
}

// 防抖处理分享
const debouncedShare = debounce(share_, 300);

// 假设你有一个按钮或其他元素用于触发分享，可以这样绑定事件
// <button onclick="debouncedShare()">分享本页</button>