const db = require("../data/db-config");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipe_shopping_list")
    .join("recipes", "recipes.id", "recipe_shopping_list.recipe_id")
    .where("recipes.id", recipe_id)
    .select(
      "recipe_shopping_list.id",
      "recipe_shopping_list.ingredient_id",
      "recipes.recipe_name"
    )
    .orderBy("recipes.recipe_name");
}

function getInstructions(recipe_id) {
  return db("steps")
    .join("recipes", "recipes.id", "steps.recipe_id")
    .where("recipes.id", recipe_id)
    .select("recipes.recipe_name", "steps.step_text", "steps.id")
    .orderBy("steps.id");
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
