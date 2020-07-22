exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients").insert([
    {
      ingredient_name: "Ramen Cup",
      ingredient_quantity: 2,
    },
    {
      ingredient_name: "Hot Water",
      ingredient_quantity: 3,
    },
    {
      ingredient_name: "Cereal",
      ingredient_quantity: 3,
    },
    {
      ingredient_name: "Milk",
      ingredient_quantity: 1,
    },
  ]);
};
