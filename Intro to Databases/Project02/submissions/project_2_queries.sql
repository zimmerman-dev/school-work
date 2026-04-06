-- Project 2 - Recipe Database

use jzimmerman3_project_2_recipes;

-- querying for which recipe has the least work involved to make it by finding out which ingredients have no prep/technique steps.
select *
from recipe_ingredient
inner join recipe 
on recipe_ingredient.recipe_id = recipe.recipe_id
where technique is null;

-- Viewing all the data in the database
select *
from recipe_ingredient 
inner join recipe 
on recipe_ingredient.recipe_id = recipe.recipe_id
inner join ingredient 
on recipe_ingredient.ingredient_id = ingredient.ingredient_id;


-- The total amount of ingredients records across all recipes
select count(recipe_ingredient.ingredient_id)
from recipe_ingredient
inner join ingredient
on recipe_ingredient.ingredient_id = ingredient.ingredient_id;

-- The total amount of recipes that are homemade
select *
from recipe_ingredient 
inner join recipe 
on recipe_ingredient.recipe_id = recipe.recipe_id
inner join ingredient 
on recipe_ingredient.ingredient_id = ingredient.ingredient_id
where recipe.acquired_from like '%trial and error%';

-- select all ingredients alphabetically

select *
from ingredient
order by ingredient_name;

-- select all recipe_names that start with 'G'.
select * 
from recipe
where recipe_name like'G%';




