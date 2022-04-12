"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var sharp_1 = __importDefault(require("sharp"));
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function imgresize(width, height, mainPath, thumbPath) {
    return (0, sharp_1.default)(mainPath).resize(width, height).toFile(thumbPath);
}
exports.default = imgresize;
