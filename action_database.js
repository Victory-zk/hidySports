// 点击主页面三角按钮触发左部样式改变事件；
var icon=document.querySelector('#icon .iconLeft')
icon.onclick=function() {
    var icon=this
    section_right=document.getElementById('section_right')
    section_left=document.getElementById('section_left')
    left_box=document.getElementById('left_box')
    iconBg=document.getElementById('icon')
    rightChild=document.getElementById('rightChild')
    if(icon.className=='iconLeft') {
        icon.className='iconRight'
        iconBg.style.left='45px'
        left_box.style.width='45px'
        section_left.style.width='0'
        rightChild.style.width='100%'
    }else{
        icon.className='iconLeft'
        iconBg.style.left='276px'
        left_box.style.width='0'
        section_left.style.width='276px'
    }
}








// 点击训练课程和训练动作按钮事件；
//查找触发事件的元素
var spans=document.querySelectorAll('#leftChildren>ul.tree>li>span')
for(var span of spans) {  
    span.onclick=function() {
        var span=this
        var div=span.firstElementChild
        if(span.className==='open clear') {
            span.className='clear'
            div.className='iconClose'
        }else{
            var open=document.querySelector('ul.tree>li>span.open')
            div.className='iconClose'
            if(open!=null) {
                open.className='clear'
                div.className='iconOpen'
            }
            span.className='open clear'
            div.className='iconOpen'
        }
        
    }
}    

var action_class=document.querySelector('#leftChildren  .tree li:first-child')
var action_express=document.querySelector('#leftChildren  .tree li.action_express')
action_class.onclick=function() {
    var actionName=document.querySelector('#leftChildren input')
    actionName.placeholder='课程名'
}
action_express.onclick=function() {
    var actionName=document.querySelector('#leftChildren input')
    actionName.placeholder='动作名'
}


