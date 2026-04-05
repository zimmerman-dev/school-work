-- database for employees and what skills they have

use jzimmerman3_9_1_option1;

-- insert title data

insert into title 
	(title_name, salary_minimum, salary_maximum)
values 
	('CEO', 100000, 120000),
	('President', 80000, 120000),
	('Vice President', 110000, 120000),
	('Director', 110000, 120000),
	('Manager', 105000, 115000),
	('Software Developer', 70000, 100000),
	('Cloud Developer', 60000, 90000),
	('DevOps Engineer', 75000, 95000),
	('Copy Editor', 50000, 75000),
	('Executive Assistance',50000, 75000);


-- insert skill data

insert into skill
	(skill_name, skill_description)
values 
	('Typing', 'General dictating skills'),
	('Excel Macros', 'Spreadsheet utilization skills'),
	('HTML', 'Markup that meets standards'),
	('Web Accessibility Standards', 'Follows WebAIM guidelines'),
	('Java Programming', 'Backend development focused'),
	('JavaScript Programming', NULL),
	('Graphic Design', NULL);


-- insert employee data

insert into employee 
	(first_name, last_name, title_id)
values 
	('Nnedi', 'Okorafor', 1),
	('N.K.', 'Jenisen', 6),
	('Rainbow', 'Rowell', 7),
	('Kameron', 'Hurley', 8),
	('Ann', 'Leckie', 5),
	('Cory', 'Doctorow', 10),
	('Malinda', 'Lo', 6),
	('Lauren', 'Beukes', 8),
	('Malka', 'Older', 9),
	('Aditi', 'Khorana', 3),
	('Sofia', 'Samatar', 4),
	('Helen', 'Wecker', 5),
	('Kelly', 'Link', 10),
	('Neal', 'Stephenson', 3),
	('Ramez', 'Naam', 2),
	('V.E.', 'Schwab', 6),
	('Pierce', 'Brown', 9),
	('Elizabeth', 'Hand', 3),
	('Erika', 'Johansen', 6);
	

-- insert skill_level data

insert into skill_level 
	(skill_level)
values	
	('Beginner'),
	('Intermediate'),
	('Advanced');


-- Insert employee_skill data

insert into employee_skill
	(skill_id, employee_id, skill_level_id)
values 
	(1, 1, 2),
	(1, 2, 3),
	(1, 3, 2),
	(1, 4, 2),
	(1, 5, 1),
	(1, 6, 3),
	(2, 7, 3),
	(2, 8, 3),
	(2, 9, 3),
	(2, 5, 2),
	(2, 10, 1),
	(3, 2, 3),
	(3, 6, 1),
	(3, 11, 2),
	(3, 12, 3),
	(3, 13, 2),
	(4, 3, 1),
	(4, 14, 2),
	(4, 15, 3),
	(4, 11, 3),
	(4, 16, 3),
	(5, 1, 3),
	(5, 17, 1),
	(5, 15, 3),
	(5, 18, 2),
	(5, 7, 2),
	(5, 2, 2),
	(5, 16, 3),
	(5, 8, 2),
	(6, 15, 2),
	(6, 18, 2),
	(6, 9, 3),
	(6, 19, 3),
	(6, 2, 1),
	(6, 7, 1),
	(6, 16, 2),
	(6, 4, 3),
	(6, 13, 2),
	(7, 4, 1),
	(7, 6, 3),
	(7, 7, 3),
	(7, 14, 2),
	(7, 17, 3),
	(7, 16, 2);

-- Big inner join to check all my data

select
	employee.employee_id,
	first_name,
	last_name,
	title.title_id,
	title_name,
	skill_name,
	skill_level,
	skill_description,
	salary_minimum,
	salary_maximum
from
	employee
inner join 
	title on employee.title_id = title.title_id
inner join 
	employee_skill on employee.employee_id = employee_skill.employee_id
inner join 	
	skill on employee_skill.skill_id = skill.skill_id
inner join 
	skill_level on employee_skill.skill_level_id = skill_level.skill_level_id;


-- Fixed typo for "Executive Assistant" from "Executive Assistance"

update
	title
set title_name = 'Executive Assistant'
where
	title.title_id = 10;

-- end of file

