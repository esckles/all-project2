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
exports.dbConfig = void 0;
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const url: string = "mongodb://127.0.0.1:27017/stemDB";
const url = "mongodb+srv://skillscapeofficier:skillscapeofficier@cluster0.0dubq.mongodb.net/nextGenDB?retryWrites=true&w=majority&appName=Cluster0";
const dbConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoose_1.connect)(url)
        .then(() => {
        console.clear();
        console.log("db Connected ❤️❤️🚀🚀🎮");
    })
        .catch((err) => {
        console.error(err);
    });
});
exports.dbConfig = dbConfig;
