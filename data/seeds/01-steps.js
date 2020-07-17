exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps").insert([
    {
      step_text: "Get milk, a spoon, cereal and a bowl.",
      recipe_id: 1,
    },
    {
      step_text: "Put cereal in bowl and pour milk. Enjoy.",
      recipe_id: 1,
    },
    {
      step_text: "Get Ramen Cup, hot water and a spoon",
      recipe_id: 2,
    },
    {
      step_text: "Pour water on top of the Ramen, then stir and enjoy",
      recipe_id: 2,
    },
  ]);
};
