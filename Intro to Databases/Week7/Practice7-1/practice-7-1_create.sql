-- Created by Redgate Data Modeler (https://datamodeler.redgate-platform.com)
-- Last modification date: 2026-03-10 07:06:19.089

-- tables
-- Table: customer
CREATE TABLE customer (
    CustomerID int  NOT NULL AUTO_INCREMENT,
    FirstName varchar(30)  NOT NULL,
    LastName varchar(30)  NOT NULL,
    Email varchar(40)  NOT NULL,
    Zipcode int  NOT NULL,
    CONSTRAINT customer_pk PRIMARY KEY (CustomerID)
);

-- Table: order
CREATE TABLE `order` (
    OrderID int  NOT NULL AUTO_INCREMENT,
    OrderDate date  NOT NULL,
    CustomerID int  NOT NULL,
    CONSTRAINT order_pk PRIMARY KEY (OrderID)
);

-- Table: order_item
CREATE TABLE order_item (
    OrderID int  NOT NULL,
    ProductID int  NOT NULL,
    Quantity int  NOT NULL,
    CONSTRAINT order_item_pk PRIMARY KEY (OrderID,ProductID)
);

-- Table: phone
CREATE TABLE phone (
    PhoneID int  NOT NULL AUTO_INCREMENT,
    PhoneNumber varchar(15)  NOT NULL,
    Type varchar(10)  NOT NULL,
    CustomerID int  NOT NULL,
    CONSTRAINT phone_pk PRIMARY KEY (PhoneID)
);

-- Table: product
CREATE TABLE product (
    productID int  NOT NULL AUTO_INCREMENT,
    Product varchar(50)  NOT NULL,
    Price decimal(10,2)  NOT NULL,
    CONSTRAINT product_pk PRIMARY KEY (productID)
);

-- foreign keys
-- Reference: order_customer (table: order)
ALTER TABLE `order` ADD CONSTRAINT order_customer FOREIGN KEY order_customer (CustomerID)
    REFERENCES customer (CustomerID);

-- Reference: order_item_order (table: order_item)
ALTER TABLE order_item ADD CONSTRAINT order_item_order FOREIGN KEY order_item_order (OrderID)
    REFERENCES `order` (OrderID);

-- Reference: order_item_product (table: order_item)
ALTER TABLE order_item ADD CONSTRAINT order_item_product FOREIGN KEY order_item_product (ProductID)
    REFERENCES product (productID);

-- Reference: phone_customer (table: phone)
ALTER TABLE phone ADD CONSTRAINT phone_customer FOREIGN KEY phone_customer (CustomerID)
    REFERENCES customer (CustomerID);

-- End of file.

