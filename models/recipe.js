import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  title: String,
  description: String,
  name: String,
  creator: String,
  category: String,
  tags: [String],
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likes: {
    type: [String],
    default: [],
  },
});

const RecipeModal = mongoose.model("Recipe", recipeSchema);

export default RecipeModal;
