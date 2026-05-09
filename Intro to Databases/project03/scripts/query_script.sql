/*  
 * Introduction To Databases - Project 3 
 * Author John Zimmerman
 * Date: 5/09/26
 * Database Schema: jzimmerman3_project_3_artwork
 * 
 * Queries Script
 */

-- 1. Add a use statement
use jzimmerman3_project_3_artwork;

-- 2. List out first and last name for all artists
select first_name, last_name
from artist;

-- 3a. List out the title, medium_id, and years_to_produce for all artwork
select title, medium_id, years_to_produce
from artwork;

-- 3b. List out the title, medium_name, and years_to_produce for all artwork
select title, medium_name, years_to_produce
from medium 
inner join artwork on medium.medium_id = artwork.medium_id;

-- 4. List out the museum name and country for all museums. Display the museums in alphabetical order
select museum_name, country
from museum
order by museum_name asc;

-- 5. List out all columns and rows in the display table
select *
from display;

-- 6a. Join the artist and artwork tables and list out the first name, last name, title, and medium_id for each piece of artwork
select first_name, last_name, title, medium_id
from artwork
inner join artist on artist.artist_id = artwork.artist_id;


-- 6b. Join the artist and artwork tables and list out the first name, last name, title, and medium_name for each piece of artwork
select first_name, last_name, title, medium_name
from artwork
inner join artist on artist.artist_id = artwork.artist_id
inner join medium on artwork.medium_id = medium.medium_id;





