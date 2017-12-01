DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT(111) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("hotdog", "food", 3.50, 300);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("backpack", "luggage", 120, 50);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("titelist irons", "sports equipment", 75, 3);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("macbook", "electronics", 1300, 10);