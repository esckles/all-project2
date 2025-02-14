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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const node_http_1 = __importDefault(require("node:http"));
const socket_io_1 = require("socket.io");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConfig_1 = require("./utils/dbConfig");
const userRouter_1 = __importDefault(require("./router/userRouter"));
const port = process.env.PORT || 2244;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", userRouter_1.default);
const server = node_http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:8080, https://just-next-gen.web.app",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("question", (res) => {
        io.emit("question", res);
    });
    socket === null || socket === void 0 ? void 0 : socket.on("test", (res) => {
        io.emit("test", res);
    });
    socket.on("questionNumber", (question) => {
        io.emit("questionNumber", { question, reset: null, numb: 20 });
    });
    socket.on("num", () => {
        io.emit("num", 20);
    });
    socket.on("presentStage", (stage) => {
        io.emit("presentStage", stage);
    });
    socket.on("chart", (stage) => {
        io.emit("chart", stage);
    });
    socket.on("disconnect", () => {
        console.log("user went off");
    });
});
server.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    (0, dbConfig_1.dbConfig)();
}));
