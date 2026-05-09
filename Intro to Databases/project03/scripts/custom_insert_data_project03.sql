/*
 * Introduction To Databases: Project 3
 * Author: John Zimmerman
 * Date: 5/09/26
 * Database Schema: jzimmerman3_project_3_artwork
 *
 * Custom Insert Script
 */

use jzimmerman3_project_3_artwork;

-- Insert an artist record for yourself
insert into artist (first_name, last_name, website, email) values ('John', 'Zimmerman', 'https://www.meetjohnz.com', 'john@meetjohnz.com');

-- Insert new medium so that we can do step 3 (because we added a medium table)
insert into medium (medium_id, medium_name) values (4, 'Glasswork');

-- Insert one artwork record into the artwork table
insert into artwork (artwork_id, title, years_to_produce, medium_id, artist_id) values (87, 'Project 3', 0.5, 4,  5);

-- Insert a new museum record into the museum table
insert into museum (museum_id, museum_name, country, state, city, phone, director_last_name) values (222, 'Madison College Gallery', 'United States', 'Wisconsin', 'Madison', '608-999-0000', 'Willem');

-- Insert a new display record into the display table
insert into display (museum_id, artwork_id, start_date, end_date) values (222, 87, '2004-09-30', '2005-11-29');
