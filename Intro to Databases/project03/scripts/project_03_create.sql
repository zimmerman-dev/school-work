-- Created by Redgate Data Modeler (https://datamodeler.redgate-platform.com)
-- Last modification date: 2026-05-09 19:42:27.467

-- Schema: jzimmerman3_project_3_artwork

-- tables
-- Table: artist
CREATE TABLE artist (
    artist_id int  NOT NULL AUTO_INCREMENT,
    first_name varchar(50)  NOT NULL,
    last_name varchar(50)  NOT NULL,
    website varchar(255)  NULL,
    email varchar(255)  NULL,
    CONSTRAINT artist_pk PRIMARY KEY (artist_id)
) COMMENT 'This entity is for artist data which is important for describing a specific piece of art.';

-- Table: artwork
CREATE TABLE artwork (
    artwork_id int  NOT NULL,
    title varchar(150)  NOT NULL,
    years_to_produce numeric(5,2)  NOT NULL,
    medium_id int  NOT NULL,
    artist_id int  NOT NULL,
    CONSTRAINT artwork_pk PRIMARY KEY (artwork_id)
) COMMENT 'This entity is for artwork data. Its one of the two main themes for the schema.';

-- Table: display
CREATE TABLE display (
    artwork_id int  NOT NULL,
    museum_id int  NOT NULL,
    start_date date  NOT NULL,
    end_date date  NULL,
    CONSTRAINT display_pk PRIMARY KEY (museum_id,artwork_id)
) COMMENT 'This entity is the bridging table that defines the meaning of this schema.';

-- Table: medium
CREATE TABLE medium (
    medium_id int  NOT NULL,
    medium_name varchar(100)  NOT NULL,
    CONSTRAINT medium_pk PRIMARY KEY (medium_id)
) COMMENT 'This entity is for the "type" or medium used for a specific piece of art.';

-- Table: museum
CREATE TABLE museum (
    museum_id int  NOT NULL,
    museum_name varchar(100)  NOT NULL,
    country varchar(100)  NOT NULL,
    state varchar(100)  NULL,
    city varchar(100)  NOT NULL,
    phone char(20)  NOT NULL,
    director_last_name varchar(50)  NOT NULL,
    CONSTRAINT museum_pk PRIMARY KEY (museum_id)
) COMMENT 'This entity is for museum data which is the second part of the theme for this schema.';

-- foreign keys
-- Reference: artwork_artist (table: artwork)
ALTER TABLE artwork ADD CONSTRAINT artwork_artist FOREIGN KEY artwork_artist (artist_id)
    REFERENCES artist (artist_id);

-- Reference: artwork_medium (table: artwork)
ALTER TABLE artwork ADD CONSTRAINT artwork_medium FOREIGN KEY artwork_medium (medium_id)
    REFERENCES medium (medium_id);

-- Reference: display_artwork (table: display)
ALTER TABLE display ADD CONSTRAINT display_artwork FOREIGN KEY display_artwork (artwork_id)
    REFERENCES artwork (artwork_id);

-- Reference: display_museum (table: display)
ALTER TABLE display ADD CONSTRAINT display_museum FOREIGN KEY display_museum (museum_id)
    REFERENCES museum (museum_id);

-- End of file.

