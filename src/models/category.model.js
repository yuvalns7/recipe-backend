"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true }
});
exports["default"] = mongoose_1["default"].model('Category', CategorySchema);
