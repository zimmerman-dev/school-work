-- Created by Redgate Data Modeler (https://datamodeler.redgate-platform.com)
-- Last modification date: 2026-04-02 18:34:37.145

-- tables
-- Table: employee
CREATE TABLE employee (
    employee_id int  NOT NULL AUTO_INCREMENT,
    first_name varchar(30)  NOT NULL,
    last_name varchar(30)  NOT NULL,
    title_id int  NOT NULL,
    CONSTRAINT employee_pk PRIMARY KEY (employee_id)
);

-- Table: employee_skill
CREATE TABLE employee_skill (
    skill_id int  NOT NULL,
    employee_id int  NOT NULL,
    skill_level_id int  NOT NULL,
    CONSTRAINT employee_skill_pk PRIMARY KEY (skill_id,employee_id)
);

-- Table: skill
CREATE TABLE skill (
    skill_id int  NOT NULL AUTO_INCREMENT,
    skill_name varchar(50)  NOT NULL,
    skill_description varchar(100)  NULL,
    CONSTRAINT skill_pk PRIMARY KEY (skill_id)
);

-- Table: skill_level
CREATE TABLE skill_level (
    skill_level_id int  NOT NULL AUTO_INCREMENT,
    skill_level varchar(20)  NOT NULL,
    CONSTRAINT skill_level_pk PRIMARY KEY (skill_level_id)
);

-- Table: title
CREATE TABLE title (
    title_id int  NOT NULL AUTO_INCREMENT,
    title_name varchar(20)  NOT NULL,
    salary_minimum int  NOT NULL,
    salary_maximum int  NOT NULL,
    CONSTRAINT title_pk PRIMARY KEY (title_id)
);

-- foreign keys
-- Reference: employee_skill_employee (table: employee_skill)
ALTER TABLE employee_skill ADD CONSTRAINT employee_skill_employee FOREIGN KEY employee_skill_employee (employee_id)
    REFERENCES employee (employee_id);

-- Reference: employee_skill_skill (table: employee_skill)
ALTER TABLE employee_skill ADD CONSTRAINT employee_skill_skill FOREIGN KEY employee_skill_skill (skill_id)
    REFERENCES skill (skill_id);

-- Reference: employee_skill_skill_level (table: employee_skill)
ALTER TABLE employee_skill ADD CONSTRAINT employee_skill_skill_level FOREIGN KEY employee_skill_skill_level (skill_level_id)
    REFERENCES skill_level (skill_level_id);

-- Reference: employee_title (table: employee)
ALTER TABLE employee ADD CONSTRAINT employee_title FOREIGN KEY employee_title (title_id)
    REFERENCES title (title_id);

-- End of file.

