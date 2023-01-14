"use strict";
exports.__esModule = true;
exports.Gender = void 0;
var mongoose_1 = require("mongoose");
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
    Gender["undisclosed"] = "undisclosed";
})(Gender = exports.Gender || (exports.Gender = {}));
var UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    // Gets the Mongoose enum from the TypeScript enum
    gender: { type: String, "enum": Object.values(Gender) }
});
// Export the model and return your IUser interface
exports["default"] = mongoose_1["default"].model('User', UserSchema);
