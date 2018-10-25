//引入第三方框架，直接构建web服务器
const express=require('express');
// 引入第三方中间件，回去数据（注意：中间件引用在路有前）
const bodyParser=require('body-parser');
// 引入路由器
const user=require('./routers/user.js');
var app=express();
app.listen(3000,(req,res)=> {
    console.log('web服务器构建成功！');
})
// 托管静态资源文件夹public；
app.use(express.static('public'));
// 调用body-paser中间件,连接数据库；
app.use(bodyParser.urlencoded({
    extended: false
}));


// 使用路由器
//把用户路由器挂载到/user下；
// /user_register路由；
// /user_login路由；
app.use('/user',user)

