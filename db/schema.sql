## FROM OLD HOMEWORK; NOT USED

## Schema to create DB and table, and to use DB

CREATE DATABASE test1_db; ## CHANGE THIS LATER

USE test1_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);