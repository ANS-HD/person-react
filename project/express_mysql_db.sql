-- # 创建空数据库
-- DROP DATABASE IF EXISTS express_mysql_db;
-- CREATE DATABASE express_mysql_db;

USE mydb_one;

# 创建 user 表
CREATE TABLE `tags` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `tagName` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入三条测试用数据
INSERT INTO tags (`tagName`) VALUES ('promise');
