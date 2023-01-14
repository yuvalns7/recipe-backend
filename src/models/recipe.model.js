"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var RecipeSchema = new mongoose_1.Schema({
    // user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true, unique: true },
    instructions: { type: String, required: true },
    imgUrl: { type: String, required: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category" },
    area: { type: mongoose_1.Schema.Types.ObjectId, ref: "Area" },
    ingredients: [
        {
            ingredient: { type: mongoose_1.Schema.Types.ObjectId, ref: "Ingredient" },
            measure: { type: String }
        },
    ]
});
// Export the model and return your IUser interface
exports["default"] = mongoose_1["default"].model("Recipe", RecipeSchema);
// const RecipeModel = mongoose.model<IRecipe>('Recipe', RecipeSchema);
// RecipeModel.findOne({}).populate<Pick<IPopulatedRecipe, 'category'>>('category').orFail().then(doc => {
//   // Works
//   const t: string = doc.category?.name || '';
// });
