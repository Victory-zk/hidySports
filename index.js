// 背景图滚动轮播事件；
(function(){
    function headerBG(){
      var imgShow=document.querySelector(
        "#headerBG>div.show"
      );
      imgShow.className="";
      if(imgShow.nextElementSibling!=null)
        imgShow.nextElementSibling.className="show";
      else
        imgShow.parentNode.children[0].className="show";
    }
    var timer=setInterval(headerBG,3000);

    var stop=document.getElementById("headerBG");
    stop.onmouseover=function(){
      clearInterval(timer);
      timer=null;
    }
    stop.onmouseout=function(){
      timer=setInterval(headerBG,3000);
    }
})();

//响应页面滚动事件；
window.onscroll=function() {
    var scrollTop = document.body.scrollTop
        ||document.documentElement.scrollTop
    if(scrollTop>=1000) {
        verticalNavbar.style.display = 'block'
    }else{
        verticalNavbar.style.display = 'none'
    }
};


// 第一行第一列图片遮罩层事件
var li2=document.querySelector('.row1Col1>li:nth-child(2)')
var li3=document.querySelector('.row1Col1>li:nth-child(3)>ul li:first-child')
var li4=document.querySelector('.row1Col1>li:nth-child(3)>ul li:nth-child(2)')
li2.onmouseover=function() {
    var li2=this
    var msg1=li2.childNodes[3]
    msg1.style.left='0'
    msg1.style.width='380px'
    msg1.style.opacity='1'
}
li2.onmouseout=function() {
    var li2=this
    var msg1=li2.childNodes[3]
    msg1.style.left='190px'
    msg1.style.width='0'
    msg1.style.opacity='0'
}
li3.onmouseover=function() {
    var li3=this
    var msg2=li3.childNodes[3]
    msg2.style.left='0'
    msg2.style.width='180px'
    msg2.style.opacity='1'
}
li3.onmouseout=function() {
    var li3=this
    var msg2=li3.childNodes[3]
    msg2.style.left='90px'
    msg2.style.width='0'
    msg2.style.opacity='0'
}
li4.onmouseover=function() {
    var li4=this
    var msg3=li4.childNodes[3]
    msg3.style.left='20px'
    msg3.style.width='180px'
    msg3.style.opacity='1'
}
li4.onmouseout=function() {
    var li4=this
    var msg3=li4.childNodes[3]
    msg3.style.left='90px'
    msg3.style.width='0'
    msg3.style.opacity='0'
}

// 第二行第一列旋转图片事件；
var li1=document.querySelector('.row2Col1-top>li:nth-child(2)')
li1.onmouseover=function() {
    var li1=this
    var img1=document.querySelector('.row2Col1-top>li:nth-child(2) .img1') 
    var img2=document.querySelector('.row2Col1-top>li:nth-child(2) p img')
    img1.style.display='none'
    img2.style.display='block'
}


// 第三行第二列图片遮罩层事件
var li2=document.querySelector('.row3Col2>li:nth-child(2)')
var li3=document.querySelector('.row3Col2>li:nth-child(3)')
var li4=document.querySelector('.row3Col2>li:nth-child(4)')
li2.onmouseover=function() {
    var li2=this  
    var info=li2.childNodes[2]
    info.style.height='180px' 
    info.style.opacity='1'     
}
li2.onmouseout=function() {
    var li2=this  
    var info=li2.childNodes[2]
    info.style.opacity='0' 
    info.style.height='0'   
}
li3.onmouseover=function() {
    var li3=this   
    var info=li3.childNodes[2]
    info.style.height='180px'
    info.style.opacity='1'       
}
li3.onmouseout=function() {
    var li3=this  
    var info=li3.childNodes[2]
    info.style.opacity='0' 
    info.style.height='0'   
}
li4.onmouseover=function() {
    var li4=this  
    var info=li4.childNodes[2]
    info.style.height='180px'
    info.style.opacity='1'        
}
li4.onmouseout=function() {
    var li4=this  
    var info=li4.childNodes[2]
    info.style.opacity='0' 
    info.style.height='0'   
}


// 第四行第二列新闻多标签鼠标进入事件；
var tabs=document.querySelectorAll('[data-toggle=tab]');
for(var tab of tabs) {
    tab.onmouseover=function() {
        var tab=this
        //查找id为container下所有的div；
        var divs=document.getElementById('newBox').children
        //遍历并清除所有div的zIndex属性；
        for(var div of divs) {
            div.style.zIndex=''
        }
        var id=tab.getAttribute('data-target')
        var div=document.querySelector(id)
        div.style.zIndex=10
    }
}


// 第四行第一列图片模态框事件；
var li2=document.querySelector('.row4Col1>li:nth-child(2)')
var li3=document.querySelector('.row4Col1>li:nth-child(4)')
var li4=document.querySelector('.row4Col1>li:nth-child(5)')

li2.onmouseover=function() {
    var li2=this
    var msg1=li2.childNodes[3]
    msg1.style.top='16px'
    msg1.style.left='0'
    msg1.style.height='230px'
    msg1.style.width='380px'
    msg1.style.opacity='1'
}
li2.onmouseout=function() {
    var li2=this
    var msg1=li2.childNodes[3]
    msg1.style.top='230px'
    msg1.style.left='190px'
    msg1.style.height='0'
    msg1.style.width='0'
    msg1.style.opacity='0'
}
li3.onmouseover=function() {
    var li3=this
    var msg2=document.querySelector('.row4Col1>li:nth-child(4)>div.msg2')
    msg2.style.left='5px'
    msg2.style.top='15px'
    msg2.style.width='185px'
    msg2.style.height='185px'
    msg2.style.opacity='1'
}
li3.onmouseout=function() {
    var li3=this
    var msg2=document.querySelector('.row4Col1>li:nth-child(4)>div.msg2')
    msg2.style.left='92.5px'
    msg2.style.top='105.5px'
    msg2.style.width='0'
    msg2.style.height='0'
    msg2.style.opacity='0'
}
li4.onmouseover=function() {
    var li4=this
    var msg3=document.querySelector('.row4Col1>li:nth-child(5)>div.msg3')
    msg3.style.left='5px'
    msg3.style.top='15px'
    msg3.style.width='185px'
    msg3.style.height='185px'
    msg3.style.opacity='1'
}
li4.onmouseout=function() {
    var li4=this
    var msg3=document.querySelector('.row4Col1>li:nth-child(5)>div.msg3')
    msg3.style.left='92.5px'
    msg3.style.top='105.5px'
    msg3.style.width='0'
    msg3.style.height='0'
    msg3.style.opacity='0'
}


//信息弹出框事件；
setTimeout(function() {msg.style.bottom='0'},10000)
        close=document.getElementById('closeMsg')
        close.onclick=function() {
            msg.style.bottom='-200px'    
        }


