-- Data entry for Recipe Database

use jzimmerman3_project_2_recipes;

-- Data for 1st recipe - Guacamole

insert into ingredient
	(ingredient_name)
values
	('Avocados'),
	('Onion'),
	('Garlic'),
	('Red Peppers'),
	('Limes');

insert into recipe 
	(recipe_name, notes, acquired_from)
values 
	('Guacamole', 'Tasty with or without garlic.', 'Qdoba/Trial and error');

insert into recipe_ingredient
	(recipe_id, ingredient_id, quantity, technique)
values 
	(1, 1, '10', 'Mash'),
	(1, 2, '1/2 large', 'Chopped'),
	(1, 3, '2 cloves', 'Minced'),
	(1, 4, '1/2 large', 'Chopped'),
	(1, 5, '1', 'Squeezed');


-- Data for 2nd recipe - grilled pizza

select * from recipe;

insert into recipe
	(recipe_name, notes, acquired_from)
values
	('Grilled Pizzas', 'Shown with pre-made dough. Makes 12 - 9" individual pizzas.', 'https://thekitchen.com');

insert into ingredient
	(ingredient_id, ingredient_name)
values
	(null, 'Pizza Dough'),
	(null, 'Pizza Slice'),
	(null, 'Olive Oil'),
	(null, 'Pizza Cheese');

insert into recipe_ingredient 
	(recipe_id, ingredient_id, quantity, technique)
values
	(2, 6, '12 - 9"', 'Purchase pre-made'),
	(2, 7, '2 cups', null),
	(2, 8, '1/2 cup', null),
	(2, 9, '8 Ounces', null),
	(2, 2, '1/2 large', 'Sliced thin'),
	(2, 3, '4 tablespoons', 'Minced');


-- Data for 3rd recipe - Chicken Stir Fry

insert into recipe
	(recipe_name, notes, acquired_from)
values  
	('Chicken Stir Fry', 'Can substitute vegtables as desired.', 'Unknown');

insert into ingredient 
	(ingredient_name)
values
	('Chicken',)
	('Carrots'),
	('Black Pepper'),
	('Soy Sauce'),
	('Rice');

insert into recipe_ingredient 
	(recipe_id, ingredient_id, quantity, technique)
values
	(3, 10, '2 lbs.', 'Sliced thin'),
	(3, 4, '1 whole', 'Minced'),
	(3, 2, '1 whole', 'Sliced, 1.5" width'),
	(3, 11, '1/2 bag', 'Sliced thin'),
	(3, 3, '1 tablspoon', 'Minced'),
	(3, 12, '1 tablespoon', null),
	(3, 13, 'To taste', null),
	(3, 14, '2 cups', null);
	

-- Data from 4th recipe - CrocPot Chicken Curry

insert into recipe 
	(recipe_name, notes, acquired_from)
values
	('CrocPot Chicken Curry', 'Can substitute heavy cream for coconut milk', 'Trial and error');

insert into ingredient
	(ingredient_name)
values
	('Boneless Chicken Thighs'),
	('Neutral Cooking Oil'),
	('Fresh Ginger'),
	('Curry Powder'),
	('Tomato Paste'),
	('Cayenne'),
	('Coconut Milk'),
	('Salt'),
	('Cilantro'),
	('Garam Masala'),
	('Cumin'),
	('Turmeric'),
	('Chicken Broth');

insert into recipe_ingredient 
	(recipe_id, ingredient_id, quantity, technique)
values
	(4, 15, '1.5 lbs.', 'Cubed'),
	(4, 16, '2 tablespoon', null),
	(4, 17, '2 teaspoon', 'Finely grated'),
	(4, 2, '1/2 large', 'Chopped'),
	(4, 3, '4 cloves', 'Minced'),
	(4, 18, '2 tablespoons', null),
	(4, 19, '2 tablespoons', null),
	(4, 20, '1 teaspoon', null),
	(4, 21, '14 oz', null),
	(4, 22, 'To taste', null),
	(4, 23, '1/2 cup', 'De-stemmed'),
	(4, 24, '1 tablespoon', null),
	(4, 5, '1', 'Squeezed'),
	(4, 25, '2 tablespoon', null),
	(4, 26, '1/2 teaspoon', null),
	(4, 27, '1 cup', null);


-- Data from 5th recipe - Overnight Oats

insert into recipe 
	(recipe_name, notes, acquired_from)
values
	('Overnight Oats', 'Any milk or milk substitute works. Adjust liquid to preference', 'Trial and error');

insert into ingredient
	(ingredient_name)
values
	('Rolled Oats'),
	('Frozen Blueberries'),
	('Quinoa'),
	('Banana'),
	('Splenda'),
	('Powdered Peanut  Butter'),
	('Vanilla Almond Milk'),
	('Granola'),
	('Almond Sliced');

insert into recipe_ingredient 
	(recipe_id, ingredient_id, quantity, technique)
values
	(5, 28, '1/2 cup', null),
	(5, 29, '1/4 cup', null),
	(5, 30, '1 tablespoon', null),
	(5, 31, '1', 'Sliced or mashed'),
	(5, 32, '2 packets', null),
	(5, 33, '1.5 tablespoon', null),
	(5, 34, '1.5 cup', null),
	(5, 35, '2 tablespoon', null),
	(5, 36, '1 tablespoon', null);

-- Test data

select *
from recipe_ingredient 
inner join recipe 
on recipe_ingredient.recipe_id = recipe.recipe_id
inner join ingredient 
on recipe_ingredient.ingredient_id = ingredient.ingredient_id;

UPDATE ingredient set ingredient_name = 'Frozen Blueberries' WHERE ingredient_id = 29;

-- EOF