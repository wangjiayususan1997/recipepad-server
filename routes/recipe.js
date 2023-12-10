import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { createRecipe, getRecipes } from "../controllers/recipe.js";

router.get("/", getRecipes);
router.post("/", auth, createRecipe);

export default router;
