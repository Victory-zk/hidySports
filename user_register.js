// 前端点击事件验证，注册表单；
// 验证手机号
function phoneMsg1() {
    //获取用户手机号输入框点击时的信息；
    $('phoneMsg1').innerHTML='合法的11位手机号码！';
}
function phoneBlur1() {
    //用户名输入框中失去焦点：
    var phone=$('phone1').value;
    //判断输入框中的值是否为空；
    if(!phone) {
        $('phoneMsg1').innerHTML='用户手机号不能为空！';
    }else{
        $("phoneMsg1").innerHTML='用户手机号通过！'
    }
}

// 验证用户名称
function unameMsg1() {
    //用户名输入框中获取焦点：
    $('unameMsg1').innerHTML='用户名称为8-12位！'
}

// 验证用户密码
function upwdMsg1() {
    //获取用户密码输入框点击时的信息；
    $('upwdMsg1').innerHTML='用户密码为8-16位！';
}
function upwdBlur1() {
    //用户密码框失去焦点；
    var upwd=$('upwd1').value;
    //判断密码输入框中的值是否为空；
    if(!upwd) {
        $('upwdMsg1').innerHTML='用户密码不能为空！'
    }else{
        $('upwdMsg1').innerHTML='用户密码通过！'
    }
}
//前端AJAX
//声明全局变量 用于控制是否允许注册；
var isRegister=false
// 检查用户名是否重复；
function checkUname() {
    var xhr=createXhr()
    xhr.onreadystatechange=function() {
        if(xhr.readyState==4&&xhr.status==200) {
            var res=xhr.responseText
            if(res=='2') {
                $('unameMsg1').innerHTML='用户名不能为空！'
            }else if(res=='1') {
                $('unameMsg1').innerHTML='用户名已存在！'
                isRegister=false
            }else{
                $('unameMsg1').innerHTML='用户名可以使用！'
                isRegister=true
            }
        }
    }
    var uname=$('Uname').value;
    xhr.open('get','user/selectUname?Uname='+uname,true)
    xhr.send(null)
}
//完成注册功能
function register() {
    if(isRegister==true) {
        //异步方式注册；
        var xhr=createXhr()
        xhr.onreadystatechange=function() {
            if(xhr.readyState==4&&xhr.status==200){
                var res=xhr.responseText
                alert('注册成功！')
				window.location.href='http://127.0.0.1:3000/user_register.html#popContainer-bg'
            }
        }
        xhr.open('post','/user/register',true)
        // 增加消息头的设置
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        var uname=$('Uname').value,
        upwd=$('upwd1').value,
        phone=$('phone1').value,
        msg='Uname='+uname+'&upwd1='+upwd+'&phone1='+phone;
		xhr.send(msg)
    }else{
        alert('请检查注册信息！')
    }
}
