exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes").insert([
    {
      recipe_name: "Bowl of cereal",
    },
    {
      recipe_name: "Ramen Cup",
    },
  ]);
};
