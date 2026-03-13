USE jzimmerman3;

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



INSERT
	INTO 		
		car_maker (car_maker_id,
		maker,
		date_founded,
		ceo,
		num_employee)
VALUES (NULL,
'Toyota',
'1937-08-28',
'Kenta Kon',
383853),
(NULL, 
'General Motors',
'1908-09-16',
'Mary Barra',
160000),
(NULL, 
'Honda',
'1948-09-24',
'Toshihiro Mibe',
194173);

-- insert body style data
SELECT * FROM model_body;

INSERT 
	INTO
	model_body 
	(body_style_id,
	body_style)
VALUES
(NULL,
'Sedan'),
(NULL,
'Coupe'),
(NULL,
'SUV'),
(NULL,
'Hatchback'),
(NULL,
'Crossover'),
(NULL,
'Truck'),
(NULL,
'Van'),
(NULL,
'Wagon'),
(NULL,
'Convertible'),
(NULL,
'Micro');

SELECT * FROM model_body;




-- Insert some car model data
SELECT * FROM car_model;
SELECT * FROM car_maker;
SELECT * FROM fuel_type;
INSERT 
	INTO 
		car_model 
		(car_model_id,
		model_name,
		car_maker_id,
		fuel_type_id,
		body_style_id)
VALUES 
(NULL,
'Prius',
2,
4,
4);
		
SELECT
	fuel_type.fuel_type,
	car_model.model_name,
	car_maker.maker
FROM
	car_model
INNER JOIN fuel_type ON
	car_model.fuel_type_id = fuel_type.fuel_type_id
INNER JOIN car_maker ON 
	car_model.car_maker_id = car_model.model_name;

