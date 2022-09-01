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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const axios_1 = __importDefault(require("axios"));
const api_1 = require("../core/network/api");
const getQueryToString_1 = require("../core/heplers/getQueryToString");
class NewsController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.query) {
                const queryString = (0, getQueryToString_1.getQueryToString)(req.query);
                try {
                    const news = yield axios_1.default.get(`${api_1.NewsAPI.getAll}${queryString}`);
                    return res.status(200).json(news.data);
                }
                catch (e) {
                    return res.status(e.response.status).json(Object.assign({}, e.response.data));
                }
            }
            else {
                try {
                    const news = yield axios_1.default.get(`${api_1.NewsAPI.getAll}`);
                    return res.status(200).json(news.data);
                }
                catch (e) {
                    return res.status(e.response.status).json(Object.assign({}, e.response.data.results));
                }
            }
        });
    }
}
exports.News = new NewsController();
//# sourceMappingURL=news.controller.js.map