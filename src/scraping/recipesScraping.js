"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
exports.scrapingRecipes = void 0;
var axios_1 = require("axios");
var area_service_1 = require("../services/area.service");
var category_service_1 = require("../services/category.service");
var ingredient_service_1 = require("../services/ingredient.service");
var recipe_service_1 = require("../services/recipe.service");
var scrapingRecipes = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
exports.scrapingRecipes = scrapingRecipes;
var areaScrapping = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, area_service_1["default"].clear()];
            case 1:
                _a.sent();
                axios_1["default"]
                    .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
                    .then(function (response) { return __awaiter(void 0, void 0, void 0, function () {
                    var areas, _a, areas_1, areas_1_1, area, e_1_1;
                    var _b, e_1, _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                areas = response.data.meals;
                                _e.label = 1;
                            case 1:
                                _e.trys.push([1, 9, 10, 15]);
                                _a = true, areas_1 = __asyncValues(areas);
                                _e.label = 2;
                            case 2: return [4 /*yield*/, areas_1.next()];
                            case 3:
                                if (!(areas_1_1 = _e.sent(), _b = areas_1_1.done, !_b)) return [3 /*break*/, 8];
                                _d = areas_1_1.value;
                                _a = false;
                                _e.label = 4;
                            case 4:
                                _e.trys.push([4, , 6, 7]);
                                area = _d;
                                return [4 /*yield*/, area_service_1["default"].create({ name: area.strArea })];
                            case 5:
                                _e.sent();
                                return [3 /*break*/, 7];
                            case 6:
                                _a = true;
                                return [7 /*endfinally*/];
                            case 7: return [3 /*break*/, 2];
                            case 8: return [3 /*break*/, 15];
                            case 9:
                                e_1_1 = _e.sent();
                                e_1 = { error: e_1_1 };
                                return [3 /*break*/, 15];
                            case 10:
                                _e.trys.push([10, , 13, 14]);
                                if (!(!_a && !_b && (_c = areas_1["return"]))) return [3 /*break*/, 12];
                                return [4 /*yield*/, _c.call(areas_1)];
                            case 11:
                                _e.sent();
                                _e.label = 12;
                            case 12: return [3 /*break*/, 14];
                            case 13:
                                if (e_1) throw e_1.error;
                                return [7 /*endfinally*/];
                            case 14: return [7 /*endfinally*/];
                            case 15: return [2 /*return*/];
                        }
                    });
                }); })["catch"](function (error) {
                    console.log(error);
                });
                console.log("finish areaScrapping");
                return [2 /*return*/];
        }
    });
}); };
var categoryScrapping = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, category_service_1["default"].clear()];
            case 1:
                _a.sent();
                axios_1["default"]
                    .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
                    .then(function (response) { return __awaiter(void 0, void 0, void 0, function () {
                    var categories, _a, categories_1, categories_1_1, category, e_2_1;
                    var _b, e_2, _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                categories = response.data.meals;
                                _e.label = 1;
                            case 1:
                                _e.trys.push([1, 9, 10, 15]);
                                _a = true, categories_1 = __asyncValues(categories);
                                _e.label = 2;
                            case 2: return [4 /*yield*/, categories_1.next()];
                            case 3:
                                if (!(categories_1_1 = _e.sent(), _b = categories_1_1.done, !_b)) return [3 /*break*/, 8];
                                _d = categories_1_1.value;
                                _a = false;
                                _e.label = 4;
                            case 4:
                                _e.trys.push([4, , 6, 7]);
                                category = _d;
                                return [4 /*yield*/, category_service_1["default"].create({ name: category.strCategory })];
                            case 5:
                                _e.sent();
                                return [3 /*break*/, 7];
                            case 6:
                                _a = true;
                                return [7 /*endfinally*/];
                            case 7: return [3 /*break*/, 2];
                            case 8: return [3 /*break*/, 15];
                            case 9:
                                e_2_1 = _e.sent();
                                e_2 = { error: e_2_1 };
                                return [3 /*break*/, 15];
                            case 10:
                                _e.trys.push([10, , 13, 14]);
                                if (!(!_a && !_b && (_c = categories_1["return"]))) return [3 /*break*/, 12];
                                return [4 /*yield*/, _c.call(categories_1)];
                            case 11:
                                _e.sent();
                                _e.label = 12;
                            case 12: return [3 /*break*/, 14];
                            case 13:
                                if (e_2) throw e_2.error;
                                return [7 /*endfinally*/];
                            case 14: return [7 /*endfinally*/];
                            case 15: return [2 /*return*/];
                        }
                    });
                }); })["catch"](function (error) {
                    console.log(error);
                });
                console.log("finish categoryScrapping");
                return [2 /*return*/];
        }
    });
}); };
var ingredientScrapping = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ingredient_service_1["default"].clear()];
            case 1:
                _a.sent();
                axios_1["default"]
                    .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
                    .then(function (response) { return __awaiter(void 0, void 0, void 0, function () {
                    var ingredients, _a, ingredients_1, ingredients_1_1, ingredient, e_3_1;
                    var _b, e_3, _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                ingredients = response.data.meals;
                                _e.label = 1;
                            case 1:
                                _e.trys.push([1, 9, 10, 15]);
                                _a = true, ingredients_1 = __asyncValues(ingredients);
                                _e.label = 2;
                            case 2: return [4 /*yield*/, ingredients_1.next()];
                            case 3:
                                if (!(ingredients_1_1 = _e.sent(), _b = ingredients_1_1.done, !_b)) return [3 /*break*/, 8];
                                _d = ingredients_1_1.value;
                                _a = false;
                                _e.label = 4;
                            case 4:
                                _e.trys.push([4, , 6, 7]);
                                ingredient = _d;
                                return [4 /*yield*/, ingredient_service_1["default"].create({
                                        name: ingredient.strIngredient
                                    })];
                            case 5:
                                _e.sent();
                                return [3 /*break*/, 7];
                            case 6:
                                _a = true;
                                return [7 /*endfinally*/];
                            case 7: return [3 /*break*/, 2];
                            case 8: return [3 /*break*/, 15];
                            case 9:
                                e_3_1 = _e.sent();
                                e_3 = { error: e_3_1 };
                                return [3 /*break*/, 15];
                            case 10:
                                _e.trys.push([10, , 13, 14]);
                                if (!(!_a && !_b && (_c = ingredients_1["return"]))) return [3 /*break*/, 12];
                                return [4 /*yield*/, _c.call(ingredients_1)];
                            case 11:
                                _e.sent();
                                _e.label = 12;
                            case 12: return [3 /*break*/, 14];
                            case 13:
                                if (e_3) throw e_3.error;
                                return [7 /*endfinally*/];
                            case 14: return [7 /*endfinally*/];
                            case 15: return [2 /*return*/];
                        }
                    });
                }); })["catch"](function (error) {
                    console.log(error);
                });
                console.log("finish ingredientScrapping");
                return [2 /*return*/];
        }
    });
}); };
var recipeScrapping = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, axios_1["default"]
                .get("https://www.themealdb.com/api/json/v1/1/random.php")
                .then(function (response) { return __awaiter(void 0, void 0, void 0, function () {
                var recipe, category, area, ingredientsMesure, recipeObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            recipe = response.data.meals[0];
                            return [4 /*yield*/, category_service_1["default"].findByName(recipe.strCategory)];
                        case 1:
                            category = _a.sent();
                            return [4 /*yield*/, area_service_1["default"].findByName(recipe.strArea)];
                        case 2:
                            area = _a.sent();
                            return [4 /*yield*/, getIngredientsMesureForRecipe(recipe)];
                        case 3:
                            ingredientsMesure = _a.sent();
                            recipeObj = {
                                name: recipe.strMeal,
                                instructions: recipe.strInstructions,
                                imgUrl: recipe.strMealThumb,
                                category: category,
                                area: area,
                                ingredients: ingredientsMesure
                            };
                            return [4 /*yield*/, recipe_service_1["default"].create(recipeObj)];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })["catch"](function (error) {
                console.log(error);
            })];
    });
}); };
var recipesScrapping = function () { return __awaiter(void 0, void 0, void 0, function () {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, recipe_service_1["default"].clear()];
            case 1:
                _a.sent();
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < 20)) return [3 /*break*/, 5];
                return [4 /*yield*/, recipeScrapping()];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); };
var getIngredientsMesureForRecipe = function (recipe) { return __awaiter(void 0, void 0, void 0, function () {
    var ingredientsMesure, i, ingredient, measure, obj;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ingredientsMesure = [];
                i = 1;
                _a.label = 1;
            case 1:
                if (!(i <= 20)) return [3 /*break*/, 7];
                if (!(recipe["strIngredient1".concat(i)] !== null &&
                    recipe["strIngredient1".concat(i)] !== undefined &&
                    recipe["strIngredient1".concat(i)] !== "")) return [3 /*break*/, 6];
                return [4 /*yield*/, ingredient_service_1["default"].findByName(recipe["strIngredient1".concat(i)])];
            case 2:
                ingredient = _a.sent();
                if (!!ingredient) return [3 /*break*/, 5];
                return [4 /*yield*/, ingredient_service_1["default"].create({
                        name: recipe["strIngredient1".concat(i)]
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, ingredient_service_1["default"].findByName(recipe["strIngredient1".concat(i)])];
            case 4:
                ingredient = _a.sent();
                _a.label = 5;
            case 5:
                measure = recipe["strMeasure1".concat(i)];
                if (ingredient) {
                    obj = {
                        ingredient: ingredient._id,
                        measure: measure
                    };
                    ingredientsMesure.push(obj);
                }
                _a.label = 6;
            case 6:
                i++;
                return [3 /*break*/, 1];
            case 7: return [2 /*return*/, ingredientsMesure];
        }
    });
}); };
