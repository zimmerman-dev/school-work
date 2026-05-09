/******************************************************************************/
/*											                                    */
/*		Introduction to Databases - Project 3 INSERT STATEMENTS					*/
/* 																				*/
/*		Depending on your exact implmentation you may need to modify 			*/
/*	    some of these statements to insert them into your Project 3 tables.	    */
/*																				*/
/*		Artist and Artwork information sourced from Dane Arts Buy Local 		*/
/*		website: https://dablmarket.com/ 										*/
/*																				*/
/*																				*/
/******************************************************************************/


/*****   ARTIST	DATA   ********************************************************/

INSERT INTO artist (artist_id, first_name, last_name, website, email) VALUES(
	 NULL, 'Shandra', 'Bjyrd', 'bjyrdceramics.com', NULL);
INSERT INTO artist (artist_id, first_name, last_name, website, email) VALUES(
	 NULL, 'Sharon', 'Bjyrd', 'www.bohemianblackart.com', 'ethniqueworldwide@gmail.com');
INSERT INTO artist (artist_id, first_name, last_name, website, email) VALUES(
	 NULL, 'William', 'del Moral', NULL, 'williamdelmoralart@gmail.com');
INSERT INTO artist (artist_id, first_name, last_name, website, email) VALUES(
	 NULL, 'Wendy', 'Schneider', 'www.wendyschneider.com', NULL);

/*****   MEDIUM	DATA   ******************************************************/

INSERT INTO medium (medium_id, medium_name) VALUES(1, 'Ceramics');
INSERT INTO medium (medium_id, medium_name) VALUES(2, 'Painting');
INSERT INTO medium (medium_id, medium_name) VALUES(3, 'Drawing');

/*****   ARTWORK DATA   ****************************************************/

INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(100, 'AHAF', 0.1, 1, 1);
INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(200, 'SpBlue50sq', 0.5, 1, 1);
INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(300, '1GWCB', 1.2, 1, 1);
INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(400, 'Bright Light', 0.5, 2, 2);
INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(500, 'The Thinker', 0.3, 2, 2);
INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(600, 'Hiraeth', 1, 2, 2);
INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(700, 'Abundance', 2.5, 2, 3);
INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(800, 'Portrait of You', 1.3, 2, 3);
INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(900, 'Sunny Elder', 0.2, 3, 4);
INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(1000, 'Real Sunnys with Planets on Road', 0.5, 3, 4);    
INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(1100, 'The Original Sunny', 0.1, 3, 4);   
INSERT INTO artwork (artwork_id, title, years_to_produce, medium_id, artist_id) 
	VALUES(1200, 'Girl Dancing on Elephant No Sunny', 0.9, 3, 4);       
    
    
/*****   MUSEUM DATA   *********************************************************/

INSERT INTO museum (museum_id, museum_name, country, state, city, phone, director_last_name) 
	VALUES(3001, 'Monona Terrace Art Gallery', 'United States', 'Wisconsin', 'Madison', '608-999-0293', 'Wright');
INSERT INTO museum (museum_id, museum_name, country, state, city, phone, director_last_name) 
	VALUES(3002, 'Overture Center', 'United States', 'Wisconsin', 'Madison', '608-333-2929', 'Frautschi');
INSERT INTO museum (museum_id, museum_name, country, state, city, phone, director_last_name) 
	VALUES(3003, 'Milwaukee Museum of Art', 'United States', 'Wisconsin', 'Milwaukee', '414-392-2938', 'Miller');


/*****   DISPLAY DATA   ******************************************************/

INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(100, 3001, '2009-04-04', '2009-09-30');
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(200, 3001, '2009-04-04', '2009-09-30');
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(300, 3001, '2009-04-04', '2009-09-30');
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(300, 3002, '2010-02-03', '2010-04-30');
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(200, 3002, '2010-02-03', '2010-04-30');
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(1200, 3002, '2010-02-03', '2010-04-30');
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(1100, 3002, '2010-02-03', '2010-04-30');
    
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(400, 3003, '2012-01-01', '2015-12-31');
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(600, 3003, '2012-01-01', '2015-12-31');    
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(100, 3003, '2012-01-01', '2015-12-31');  
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(200, 3003, '2012-01-01', '2015-12-31');  
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(1000, 3003, '2012-01-01', '2015-12-31');
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(900, 3003, '2012-01-01', '2015-12-31');
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(500, 3003, '2012-01-01', '2015-12-31');
INSERT INTO display (artwork_id, museum_id, start_date, end_date) 
	VALUES(700, 3003, '2012-01-01', '2015-12-31');
    
/****************************************************************************************/
