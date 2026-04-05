-- Created by Redgate Data Modeler (https://datamodeler.redgate-platform.com)
-- Last modification date: 2026-04-01 08:56:36.067

-- tables
-- Table: customers
CREATE TABLE customers (
    customer_id int  NOT NULL AUTO_INCREMENT,
    customer_name varchar(40)  NOT NULL,
    customer_address varchar(80)  NOT NULL,
    customer_city varchar(50)  NOT NULL,
    customer_state varchar(5)  NOT NULL,
    CONSTRAINT customers_pk PRIMARY KEY (customer_id)
);

-- Table: items
CREATE TABLE items (
    item_id int  NOT NULL AUTO_INCREMENT,
    item_description varchar(80)  NOT NULL,
    item_price decimal(10,2)  NOT NULL,
    CONSTRAINT items_pk PRIMARY KEY (item_id)
);

-- Table: order_items
CREATE TABLE order_items (
    order_id int  NOT NULL,
    item_id int  NOT NULL,
    item_quantity int  NOT NULL,
    CONSTRAINT order_items_pk PRIMARY KEY (item_id,order_id)
);

-- Table: orders
CREATE TABLE orders (
    order_id int  NOT NULL,
    customer_id int  NOT NULL,
    order_date date  NOT NULL,
    CONSTRAINT orders_pk PRIMARY KEY (order_id)
);

-- foreign keys
-- Reference: order_items_items (table: order_items)
ALTER TABLE order_items ADD CONSTRAINT order_items_items FOREIGN KEY order_items_items (item_id)
    REFERENCES items (item_id);

-- Reference: orders_customers (table: orders)
ALTER TABLE orders ADD CONSTRAINT orders_customers FOREIGN KEY orders_customers (customer_id)
    REFERENCES customers (customer_id);

-- Reference: orders_order_items (table: order_items)
ALTER TABLE order_items ADD CONSTRAINT orders_order_items FOREIGN KEY orders_order_items (order_id)
    REFERENCES orders (order_id);

-- End of file.

