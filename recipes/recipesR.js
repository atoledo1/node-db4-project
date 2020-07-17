const express = require("express");
const dataBase = require("../data/db-config.js");
const Recipes = require("./recipesM");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to retrieve recipes",
      });
    });
});

router.get("/:id/shoppinglist", (req, res) => {
  const recipeId = req.params.id;
  Recipes.getShoppingList(recipeId)
    .then((shoppingList) => {
      res.json(shoppingList);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to retrieve shopping list",
      });
    });
});

router.get("/:id/steps", (req, res) => {
  const recipeId = req.params.id;
  Recipes.getInstructions(recipeId)
    .then((instructions) => {
      res.json(instructions);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to retrieve instructions",
      });
    });
});

module.exports = router;
