// 创建数据库连接池，连接mysql数据库服务器；
//引用第三方模块mysql；
const mysql=require('mysql');
var pool=mysql.createPool({
    host:'127.0.0.1',
    post: 3306,
    user:'root',
    password:'',
    database:'hiSports',
    connectionLimit:20
})
// 导出连接；
module.exports=pool;
