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

-- 7a. Join the artist and artwork tables and list out the first and last name, title, and medium_id but only for artwork with an artist of last name of Bjyrd
select first_name, last_name, title, medium_id
from artwork
inner join artist on artist.artist_id = artwork.artist_id
where last_name = 'Bjyrd';

-- 7b. Join the artist, artwork, and medium tables and list out the first and last name, title, and medium_name but only for artwork with an artist of last name of Bjyrd
select first_name, last_name, title, medium_name
from artwork 
inner join artist on artist.artist_id = artwork.artist_id 
inner join medium on medium.medium_id = artwork.medium_id
where last_name = 'Bjyrd';

-- 8. Display the name of the artwork, the start date, and end date of all pieces of art that have ever been displayed at the overture center museum
select title, start_date, end_date
from display 
inner join artwork on display.artwork_id = artwork.artwork_id
inner join museum on display.museum_id = museum.museum_id
where museum_name = 'Overture Center';

-- 9. Display the number of pieces of art in each museum. Show the museum name and a count of artwork. Use aggregation.
select museum_name, count(artwork_id) as artwork_count
from museum
inner join display on display.museum_id = museum.museum_id 
group by museum.museum_name;

-- Extra ones for fun since I made the extra table

-- Display the number of art pieces grouped by medium_name
select medium.medium_name, count(artwork.artwork_id) as artwork_count
from artwork 
inner join medium on artwork.medium_id = medium.medium_id
group by medium.medium_name;

-- Display the average production time for each medium
select medium.medium_name, avg(artwork.years_to_produce) as average_production_time
from artwork
inner join medium on artwork.medium_id = medium.medium_id
group by medium.medium_name;

-- end of file
