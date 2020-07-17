exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_shopping_list").insert([
    {
      recipe_id: 1,
      ingredient_id: 3,
    },
    {
      recipe_id: 1,
      ingredient_id: 4,
    },
    {
      recipe_id: 2,
      ingredient_id: 1,
    },
    {
      recipe_id: 2,
      ingredient_id: 2,
    },
  ]);
};
