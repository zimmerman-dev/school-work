-- northwind schema
USE northwind;

-- 10
SELECT 
	*
FROM
	region;

SELECT 
	*
FROM 
	territories;

-- 11
SELECT 
	*
FROM
	territories
WHERE
	RegionID = 3;

-- 12
SELECT
	count(*) AS "RegionID = 3"
FROM 
	territories
WHERE
	RegionID = 3;

-- 13
SELECT
	*
FROM  
	products;

-- 14
SELECT  
	*
FROM  
	categories;

-- 15
SELECT 
	ProductName,
	CategoryName
FROM  
	products
JOIN 
	categories 
ON  
	products.CategoryID = categories.CategoryID;

-- 16
SELECT 
	ProductName,
	CategoryName
FROM  
	products
JOIN 
	categories 
ON  
	products.CategoryID = categories.CategoryID
WHERE 
	CategoryName = 'Produce';


