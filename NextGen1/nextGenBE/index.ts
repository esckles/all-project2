import express, { Application } from "express";
import cors from "cors";
import http from "node:http";
import { DefaultEventsMap, Server, Socket } from "socket.io";
import env from "dotenv";
env.config();

import { dbConfig } from "./utils/dbConfig";

import user from "./router/userRouter";

const port: any = process.env.PORT || 2244;
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", user);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8080, https://just-next-gen.web.app",
    methods: ["GET", "POST"],
  },
});

io.on(
  "connection",
  (
    socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
  ) => {
    console.log("user connected");

    socket.on("question", (res) => {
      io.emit("question", res);
    });

    socket?.on("test", (res) => {
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
  }
);
server.listen(port, async () => {
  dbConfig();
});
