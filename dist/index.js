"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const news_controller_1 = require("./controllers/news.controller");
const app = (0, express_1.default)();
const router = express_1.default.Router();
const port = process.env.PORT || 80;
app.use(express_1.default.json()); // for parsing application/json
app.use((0, cookie_parser_1.default)()); //for parsing from cookie
router.get('/news', news_controller_1.News.get);
app.use('/api/v1', router);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map