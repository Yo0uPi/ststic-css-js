/**
 * 屏蔽f12 审查元素
 */
document.onkeydown = function(){
    if(window.event){
        var e = window.event;
        if(e.keyCode == 123) {
            console.log("禁用F12键");
            e.keyCode=0;
            e.returnValue=false;
        }
        // if(e.keyCode == 13) {
        //     console.log("禁用Enter键");
        //     e.keyCode = 0;
        //     e.returnValue=false;
        // }
        // if(e.keyCode == 8) {
        //     console.log("禁用Backspace键");
        //     e.returnValue=false;
        // }
        var ctrlKey = e.ctrlKey || e.metaKey;
        var shiftKey = e.shiftKey;
        if(ctrlKey && shiftKey && e.keyCode == 73){
            console.log("禁用Ctrl+Shift+I键");
            e.keyCode=0;
            e.returnValue=false;
        }
    }
}

/**
 * 屏蔽右键菜单
 * @param event
 * @returns {boolean}
 */
document.oncontextmenu = function (event){
    if(window.event){
        event = window.event;
    }try{
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
            return false;
        }
        return true;
    }catch (e){
        return false;
    }
}

/**
 * 屏蔽粘贴
 * @param event
 * @returns {boolean}
 */
document.onpaste = function (event){
    if(window.event){
        event = window.event;
    }try{
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
            return false;
        }
        return true;
    }catch (e){
        return false;
    }
}

/**
 * 屏蔽复制
 * @param event
 * @returns {boolean}
 */
document.oncopy = function (event){
    if(window.event){
        event = window.event;
    }try{
        var the = event.srcElement;
        if(!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
            return false;
        }
        return true;
    }catch (e){
        return false;
    }
}

/**
 * 屏蔽剪切
 * @param event
 * @returns {boolean}
 */
document.oncut = function (event){
    if(window.event){
        event = window.event;
    }try{
        var the = event.srcElement;
        if(!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
            return false;
        }
        return true;
    }catch (e){
        return false;
    }
}

/**
 * 屏蔽选中
 * @param event
 * @returns {boolean}
 */
document.onselectstart = function (event){
    if(window.event){
        event = window.event;
    }try{
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * 尝试阻止开发者模式
 * @type {HTMLElement}
 */
var fuck = document.createElement('div');
Object.defineProperty(fuck, 'id', {
    get:function(){
        console.log("Hello World!");
        location.href="about:blank";
        history.replaceState();
    }
});