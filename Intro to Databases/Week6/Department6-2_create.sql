-- Created by Redgate Data Modeler (https://datamodeler.redgate-platform.com)
-- Last modification date: 2026-03-10 06:00:10.801

-- tables
-- Table: department
CREATE TABLE department (
    DepartmentID int  NOT NULL AUTO_INCREMENT,
    DepartmentName varchar(30)  NOT NULL,
    BudgetCode varchar(30)  NOT NULL,
    OfficeNumber varchar(20)  NOT NULL,
    Phone varchar(15)  NOT NULL,
    CONSTRAINT department_pk PRIMARY KEY (DepartmentID)
);

-- End of file.

