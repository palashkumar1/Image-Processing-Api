"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageRouter_1 = __importDefault(require("./imageRouter"));
var listImagesRouter_1 = __importDefault(require("./listImagesRouter"));
var router = express_1.default.Router();
// router.get('/', (req: express.Request, res: express.Response) => {
//     res.render('index', { title: 'imageResizer' });
// });
router.use('/images', imageRouter_1.default);
router.use('/listImages', listImagesRouter_1.default);
exports.default = router;
