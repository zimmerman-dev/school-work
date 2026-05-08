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

INSERT INTO ARTIST (ArtistID, FirstName, LastName, Website, Email) VALUES(
	 NULL, 'Shandra', 'Bjyrd', 'bjyrdceramics.com', NULL);
INSERT INTO ARTIST (ArtistID, FirstName, LastName, Website, Email) VALUES(
	 NULL, 'Sharon', 'Bjyrd', 'www.bohemianblackart.com', 'ethniqueworldwide@gmail.com');
INSERT INTO ARTIST (ArtistID, FirstName, LastName, Website, Email) VALUES(
	 NULL, 'William', 'del Moral', NULL, 'williamdelmoralart@gmail.com');
INSERT INTO ARTIST (ArtistID, FirstName, LastName, Website, Email) VALUES(
	 NULL, 'Wendy', 'Schneider', 'www.wendyschneider.com', NULL);


/*****   ARTWORK DATA   ****************************************************/

INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(100, 'AHAF', 'Ceramics', 0.1, 1);
INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(200, 'SpBlue50sq', 'Ceramics', 0.5, 1);
INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(300, '1GWCB', 'Ceramics', 1.2, 1);
INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(400, 'Bright Light', 'Painting', 0.5, 2);
INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(500, 'The Thinker', 'Painting', 0.3, 2);
INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(600, 'Hiraeth', 'Painting', 1, 2);
INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(700, 'Abundance', 'Painting', 2.5, 3);
INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(800, 'Portrait of You', 'Painting', 1.3, 3);
INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(900, 'Sunny Elder', 'Drawing', 0.2, 4);
INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(1000, 'Real Sunnys with Planets on Road', 'Drawing', 0.5, 4);    
INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(1100, 'The Original Sunny', 'Drawing', 0.1, 4);   
INSERT INTO ARTWORK (ArtworkID, Title, `Type`, YearsToProduce, ArtistID) 
	VALUES(1200, 'Girl Dancing on Elephant No Sunny', 'Drawing', 0.9, 4);       
    
    
/*****   MUSEUM DATA   *********************************************************/

INSERT INTO MUSEUM (MuseumID, MuseumName, Country, State, City, Phone, DirectorLastName) 
	VALUES(3001, 'Monona Terrace Art Gallery', 'United States', 'Wisconsin', 'Madison', '608-999-0293', 'Wright');
INSERT INTO MUSEUM (MuseumID, MuseumName, Country, State, City, Phone, DirectorLastName) 
	VALUES(3002, 'Overture Center', 'United States', 'Wisconsin', 'Madison', '608-333-2929', 'Frautschi');
INSERT INTO MUSEUM (MuseumID, MuseumName, Country, State, City, Phone, DirectorLastName) 
	VALUES(3003, 'Milwaukee Museum of Art', 'United States', 'Wisconsin', 'Milwaukee', '414-392-2938', 'Miller');


/*****   DISPLAY DATA   ******************************************************/

INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(100, 3001, '2009-04-04', '2009-09-30');
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(200, 3001, '2009-04-04', '2009-09-30');
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(300, 3001, '2009-04-04', '2009-09-30');
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(300, 3002, '2010-02-03', '2010-04-30');
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(200, 3002, '2010-02-03', '2010-04-30');
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(1200, 3002, '2010-02-03', '2010-04-30');
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(1100, 3002, '2010-02-03', '2010-04-30');
    
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(400, 3003, '2012-01-01', '2015-12-31');
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(600, 3003, '2012-01-01', '2015-12-31');    
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(100, 3003, '2012-01-01', '2015-12-31');  
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(200, 3003, '2012-01-01', '2015-12-31');  
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(1000, 3003, '2012-01-01', '2015-12-31');
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(900, 3003, '2012-01-01', '2015-12-31');
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(500, 3003, '2012-01-01', '2015-12-31');
INSERT INTO DISPLAY (ArtworkID, MuseumID, StartDate, EndDate) 
	VALUES(700, 3003, '2012-01-01', '2015-12-31');
    
/****************************************************************************************/
