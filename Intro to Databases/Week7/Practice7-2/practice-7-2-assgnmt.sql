-- Practice 7.2

USE jzimmerman3_7_2_teams;

SHOW tables;

-- Insert TEAM data
INSERT
	INTO
		team (TeamID,
		CountryRepresented,
		PopulationOfCountry,
		JerseyColor)
VALUES (NULL,
	'Spain', 
	47420000,
	'Red/Yellow');

INSERT
	INTO 
		team (TeamID,
		CountryRepresented,
		PopulationOfCountry,
		JerseyColor)
VALUES (NULL,
	'England',
	55980000,
	'White/Blue');

-- Insert PLAYER data (testing multi insert)
INSERT 
	INTO 
		player (PlayerID,
		FirstName,
		LastName,
		JerseyNumber,
		`position`,
		TeamID)
VALUES
	(NULL, 'Misa', 'Rodriguez', 1, 'Goalkeeper', 1),
	(NULL, 'Enith', 'Salon', 13, 'Goalkeeper', 1);

-- Insert the rest of PLAYER data
INSERT 
	INTO 
		player (PlayerID,
		FirstName,
		LastName,
		JerseyNumber,
		`position`,
		TeamID)
VALUES
	(NULL, 'Cata', 'Coll', 23, 'Goalkeeper', 1),
	(NULL, 'Ona', 'Batlle', 2, 'Defender', 1),
	(NULL, 'Irene', 'Paredes', 4, 'Defender', 1),
	(NULL, 'Ivana', 'Andres', 5, 'Defender', 1),
	(NULL, 'Oihane', 'Hernandez', 12, 'Defender', 1),
	(NULL, 'Laia', 'Codina', 14, 'Defender', 1),
	(NULL, 'Olga', 'Carmona', 19, 'Defender', 1),
	(NULL, 'Rocio', 'Galvez', 20, 'Defender', 1),
	(NULL, 'Mariona', 'Caldentey', 8, 'Forward', 1),
	(NULL, 'Esther', 'Gonzalez', 9, 'Forward', 1),
	(NULL, 'Jennifer', 'Hermoso', 10, 'Forward', 1),
	(NULL, 'Eva', 'Navarro', 15, 'Forward', 1),
	(NULL, 'Alba', 'Redondo', 17, 'Forward', 1),
	(NULL, 'Salma', 'Paralluelo', 18, 'Forward', 1),
	(NULL, 'Athena', 'Del Castillo', 22, 'Forward', 1),
	(NULL, 'Teresa', 'Abelleria', 3, 'Midfielder', 1),
	(NULL, 'Aitana', 'Bonmarti', 6, 'Midfielder', 1),
	(NULL, 'Irene', 'Guerrero', 7, 'Midfielder', 1),
	(NULL, 'Alexia', 'Putellas', 11, 'Midfielder', 1),
	(NULL, 'Maria', 'Perez', 16, 'Midfielder', 1),
	(NULL, 'Claudia', 'Zornoza', 21, 'Midfiedler', 1),
	(NULL, 'Mary', 'Earps', 1, 'Goalkeeper', 2),
	(NULL, 'Hannah', 'Hampton', 13, 'Goalkeeper', 2),
	(NULL, 'Ellie', 'Roebuck', 21, 'Goalkeeper', 2),
	(NULL, 'Lucy', 'Bronze', 2, 'Defender', 2),
	(NULL, 'Niamh', 'Charles', 3, 'Defender', 2),
	(NULL, 'Alex', 'Greenwood', 5, 'Defender', 2),
	(NULL, 'Millie', 'Bright', 6, 'Defender', 2);

-- Five Select Queries

-- 1
SELECT
	*
FROM
	player
ORDER BY
	JerseyNumber;

-- 2
SELECT
	player.FirstName,
	player.LastName,
	player.JerseyNumber,
	player.`position`,
	team.JerseyColor,
	team.CountryRepresented
FROM
	player
INNER JOIN team
ON 
	player.TeamID = team.TeamID;

-- 3
SELECT 
	player.FirstName,
	player.LastName,
	player.JerseyNumber,
	player.`Position`,
	team.CountryRepresented
FROM
	player
INNER JOIN team
ON 
	player.TeamID = team.TeamID
WHERE
	`Position` = 'Defender'
	AND JerseyNumber > 6;

-- 4
SELECT
	*
FROM
	team
WHERE PopulationOfCountry > 48000000;

-- 5
SELECT
	player.JerseyNumber,
	player.FirstName,
	player.LastName,
	team.JerseyColor
FROM
	player
INNER JOIN team
ON 
	player.TeamID = team.TeamID
ORDER BY 
	player.JerseyNumber DESC;

