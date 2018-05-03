# 与MySQL的零距离接触
## 安装
## 配置
### MySQL目录结构
bin目录，存储可执行文件  
data目录，存储数据文件  
docs, 文档  
include目录，存储包含的头文件  
lib目录，存储库文件  
share目录，错误消息和字符集
### 配置文件
my.ini
## 启动与停止服务
1. 管理-服务-mysql服务
2. cmd - net start mysql-启动服务
net stop mysql - 停止服务
## 登录与退出mysql
1. 登录：cmd - mysql -u root -p
2. 退出：\q  ,  quit  ,  exit

### 修改MySql提示符
prompt mysql@\d>

## 常用命令
* SELECT VERSION();
* SELECT NOW();
* SELECT USER();
* SELECT DATABASE();// 查看当前数据库

### Mysql语句规范
* 关键字与函数名称全部大写
* 数据库名称、表名称、字段名称全部小写
* SQL语句必须以分号结尾

## 操作数据库
### 创建数据库
CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name [DEFAULT] CHARACTER SET [=] charset_name
### 修改数据库编码方式
ALTER {DATABASE | SCHEMA} [db_name] [DEFAULT] CHARACTER SET [=] charset_name
### 删除数据库
DROP {DATABASE | SCHEMA} [IF EXISTS] db_name
### 查看数据库列表
SHOW [DATABASES | SCHEMAS]
### 查看警告信息
SHOW WARNINGS
### 查看数据库编码方式
SHOW CREATE DATABASE db_name;
## 数据类型和操作数据表
数据类型是指列、存储过程参数、表达式和局部变量的数据特征，它决定了数据的存储格式，代表不同的信息类型
### 整形
![image]()
### 浮点型
FLOAT  
DOUBLE
### 时期时间型
YEAR  
TIME  
DATE  
DATEIME  
TIMESTAMP
### 字符型
CHAR(M) M个字节，0 <= M <= 255  
VARCHAR(M)  
TINYTEXT 
TEXT  
MEDIUMTEXT  
LONGTEXT  
ENUM('value1', 'value2'...)  
SET('value1', 'value2'...)  
### 创建数据表
打开数据库：
USE 数据库  
查看当前打开的数据库：SELECT DATABASE();

CREATE TABLE [IF NOT EXISTS] table_name(
    column_name data_type,
)
### 查看数据表
SHOW TABLES [FROM db_name];
### 查看数据表的结构
SHOW COLUMNS FROM tb_name;
### 插入记录
INSERT [INTO] tb_name[(COLUMNS)] values(val...)
### 记录查找
SELECT expr,... FROM tb_name
## 空值与非空
* NULL，字段值可以为空  
* NOT NULL，字段值禁止为空  

## AUTO_INCREMENT
* 自动编号，且必须与主键组合使用
* 默认情况下，起始值为1，每次增量为1  

## 主键
* 主键约束
* 每张数据表只能存在一个主键
* 主键保证记录唯一性
* 主键自动NOT NULL

## UNIQUE KEY
* 唯一约束
* 唯一约束可以保证记录的唯一性
* 唯一约束的字段可以为空值（NULL)
* 每张数据表可以存在多个唯一约束

## DEFAULT
* 默认值
* 当插入记录时，如果没有明确为字段赋值，则自动赋予默认值

## Mysql外键约束的要求解析
### 约束
1. 约束保证数据的完整性和一致性
2. 约束分为表级约束和列级约束
3. 约束类型包括：
* NOT NULL 非空约束
* PRIMARY KEY 主键约束
* UNIQUE KEY 唯一约束
* DEFAULT 默认约束
* FOREIGE KEY 外键约束
## 外键约束
保持数据的一致性，完整性实现一对一或一对多关系
### 外键约束的要求
1. 父表和子表必须使用相同的存储引擎，而且禁止使用临时表
2. 数据表的存储引擎只能为InnoDB
3. 外键列和参照列必须具有相似的数据类型。其中数字的长度或是否有符号位必须相同；而字符的长度则可以不同
4. 外键列和参照列必须创建索引。如果外键列不存在索引的话，mysql将自动创建索引
### 外键约束的参照操作
## mysql修改数据表
### 添加单列
ALTER TABLE tb_name ADD [COLUMN] col_name column_definition [FIRST | AFTER col_name]
### 添加多列
ALTER TABLE tb_name ADD [COLUMN] (col_name col_defintion...)
### 删除列
ALTER TABLE tb_name DROP col_name
### 添加主键约束
ALTER TABLE tb_name ADD [CONSTRAINT[SYMBOL]] PRIMARY KEY [index_type](index_col_name,...)
### 添加唯一约束
ALTER TABLE tb_name ADD [CONSTRAINT [symbol]] UNIQUE [INDEX|KEY] [index_name] [index_type] (index_col_name,...)
### 添加外键约束
ALTER TABLE tb_name ADD [CONSTRAINT [symbol]] FOREIGN KEY [index_name] (index_col_name,...) reference_definition
### 添加/删除默认约束
ALTER TABLE tb_name ALTER [COLUMN] col_name {SET DEFAULT literal | DROP DEFAULT}