function unameMsg() {
    //获取用户名输入框点击时的信息；
    $('unameMsg').innerHTML='用户名称为6-12位！';
}
function unameBlur() {
    //用户名输入框中失去焦点：
    var uname=$('uname').value;
    //判断输入框中的值是否为空；
    if(!uname) {
        $('unameMsg').innerHTML='用户名称不能为空！';
    }else{
        $("unameMsg").innerHTML='用户名称通过！'
    }
}

function upwdMsg() {
    //获取用户密码输入框点击时的信息；
    $('upwdMsg').innerHTML='用户密码为8-16位！';
}
function upwdBlur() {
    //用户密码框失去焦点；
    var upwd=$('upwd').value;
    //判断密码输入框中的值是否为空；
    if(!upwd) {
        $('upwdMsg').innerHTML='用户密码不能为空！'
    }else{
        $('upwdMsg').innerHTML='用户密码通过！'
    }
}
