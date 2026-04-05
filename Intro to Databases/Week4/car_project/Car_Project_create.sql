-- Created by Redgate Data Modeler (https://datamodeler.redgate-platform.com)
-- Last modification date: 2026-03-06 04:57:50.412

-- tables
-- Table: car_maker
CREATE TABLE car_maker (
    car_maker_id int  NOT NULL AUTO_INCREMENT,
    maker varchar(30)  NOT NULL,
    year_founded date  NOT NULL,
    ceo varchar(80)  NULL,
    num_employee int  NULL,
    CONSTRAINT car_maker_pk PRIMARY KEY (car_maker_id)
);

-- Table: car_model
CREATE TABLE car_model (
    car_model_id int  NOT NULL AUTO_INCREMENT,
    model_name varchar(30)  NOT NULL,
    car_maker_id int  NOT NULL,
    fuel_type_id int  NOT NULL,
    body_style_id int  NOT NULL,
    CONSTRAINT car_model_pk PRIMARY KEY (car_model_id)
);

-- Table: fuel_type
CREATE TABLE fuel_type (
    fuel_type_id int  NOT NULL AUTO_INCREMENT,
    fuel_type varchar(30)  NOT NULL,
    UNIQUE INDEX fuel_type_ak_id (fuel_type),
    CONSTRAINT fuel_type_pk PRIMARY KEY (fuel_type_id)
);

-- Table: model_body
CREATE TABLE model_body (
    body_style_id int  NOT NULL AUTO_INCREMENT,
    body_style varchar(30)  NOT NULL,
    UNIQUE INDEX model_body_ak_1 (body_style_id),
    CONSTRAINT model_body_pk PRIMARY KEY (body_style_id)
);

-- foreign keys
-- Reference: car_model_car_maker (table: car_model)
ALTER TABLE car_model ADD CONSTRAINT car_model_car_maker FOREIGN KEY car_model_car_maker (car_maker_id)
    REFERENCES car_maker (car_maker_id);

-- Reference: car_model_fuel_type (table: car_model)
ALTER TABLE car_model ADD CONSTRAINT car_model_fuel_type FOREIGN KEY car_model_fuel_type (fuel_type_id)
    REFERENCES fuel_type (fuel_type_id);

-- Reference: car_model_model_body (table: car_model)
ALTER TABLE car_model ADD CONSTRAINT car_model_model_body FOREIGN KEY car_model_model_body (body_style_id)
    REFERENCES model_body (body_style_id);

-- End of file.

