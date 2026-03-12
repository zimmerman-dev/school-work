USE jzimmerman3;

SELECT * FROM fuel_type;

SELECT * FROM car_maker;

INSERT
	INTO 
		car_maker (car_maker_id,
		maker,
		year_founded,
		ceo,
		num_employee)
VALUES (NULL,
'Ford',
'1903-06-16',
'Scott Griffith',
177000);

SELECT * FROM car_maker;

-- change column name in car_maker
ALTER TABLE car_maker RENAME COLUMN year_founded TO date_founded;

SELECT * FROM car_maker;
