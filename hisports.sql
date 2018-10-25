SET NAMES UTF8;
DROP DATABASE IF EXISTS hisports;
CREATE DATABASE hisports CHARSET=UTF8;
USE hisports;

/**创建用户信息表**/
CREATE TABLE hisports_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(12),
    upwd VARCHAR(16),
    phone VARCHAR(16),
    email VARCHAR(64),
    userName VARCHAR(16),       #用户的真实姓名；
    gender INT                  #用户的性别：1-->男；0-->女；
);
INSERT INTO hisports_user VALUES(NULL,'mingming','12345678','13512345678','12315@qq.com','小明',1),(NULL,'Rose','87654321','15912345678','112233@qq.com','露丝',0);
SELECT * FROM hisports_user;
