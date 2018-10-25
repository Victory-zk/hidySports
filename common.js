//封装-->获取页面元素的函数；
function $(id){
    return document.getElementById(id);
}


//封装-->创建异步对象的函数；
function createXhr() {
    var xhr=null;//赋值为空对象；
    if(window.XMLHttpRequest) {
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject('Microsoft.XMLHttp');
    }
    return xhr;
}