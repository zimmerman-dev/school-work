-- Created by Redgate Data Modeler (https://datamodeler.redgate-platform.com)
-- Last modification date: 2026-03-10 07:57:35.237

-- tables
-- Table: PLAYER
CREATE TABLE PLAYER (
    PlayerID int  NOT NULL AUTO_INCREMENT,
    FirstName varchar(30)  NOT NULL,
    LastName varchar(30)  NOT NULL,
    JerseyNumber int  NOT NULL,
    Position varchar(20)  NOT NULL,
    TeamID int  NOT NULL,
    CONSTRAINT PLAYER_pk PRIMARY KEY (PlayerID)
);

-- Table: TEAM
CREATE TABLE TEAM (
    TeamID int  NOT NULL AUTO_INCREMENT,
    CountryRepresented varchar(30)  NOT NULL,
    PopulationOfCountry int  NOT NULL,
    JerseyColor varchar(30)  NOT NULL,
    CONSTRAINT TEAM_pk PRIMARY KEY (TeamID)
);

-- foreign keys
-- Reference: TEAM_PLAYER (table: PLAYER)
ALTER TABLE PLAYER ADD CONSTRAINT TEAM_PLAYER FOREIGN KEY TEAM_PLAYER (TeamID)
    REFERENCES TEAM (TeamID);

-- End of file.

