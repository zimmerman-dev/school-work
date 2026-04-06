-- Created by Redgate Data Modeler (https://datamodeler.redgate-platform.com)
-- Last modification date: 2026-04-05 04:30:22.589

-- tables
-- Table: ingredient
CREATE TABLE ingredient (
    ingredient_id int  NOT NULL AUTO_INCREMENT,
    ingredient_name varchar(30)  NOT NULL,
    CONSTRAINT ingredient_pk PRIMARY KEY (ingredient_id)
);

-- Table: recipe
CREATE TABLE recipe (
    recipe_id int  NOT NULL AUTO_INCREMENT,
    recipe_name varchar(50)  NOT NULL,
    notes varchar(100)  NULL,
    acquired_from varchar(80)  NOT NULL,
    CONSTRAINT recipe_pk PRIMARY KEY (recipe_id)
);

-- Table: recipe_ingredient
CREATE TABLE recipe_ingredient (
    recipe_id int  NOT NULL,
    ingredient_id int  NOT NULL,
    quantity varchar(50)  NOT NULL,
    technique varchar(100)  NULL,
    CONSTRAINT recipe_ingredient_pk PRIMARY KEY (ingredient_id,recipe_id)
);

-- foreign keys
-- Reference: recipe_ingredient_ingredient (table: recipe_ingredient)
ALTER TABLE recipe_ingredient ADD CONSTRAINT recipe_ingredient_ingredient FOREIGN KEY recipe_ingredient_ingredient (ingredient_id)
    REFERENCES ingredient (ingredient_id);

-- Reference: recipe_ingredient_recipe (table: recipe_ingredient)
ALTER TABLE recipe_ingredient ADD CONSTRAINT recipe_ingredient_recipe FOREIGN KEY recipe_ingredient_recipe (recipe_id)
    REFERENCES recipe (recipe_id);

-- End of file.

