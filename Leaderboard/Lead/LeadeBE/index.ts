import express, { Application } from "express";
import cors from "cors";
import http from "node:http";
import { DefaultEventsMap, Server, Socket } from "socket.io";

import { dbConfig } from "./utils/dbConfig";

import user from "./router/userRouter";

const port: number = 2211;
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", user);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
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
      io.emit("nullValue", null);
    });

    socket.on("disconnect", () => {
      console.log("user went off");
    });
  }
);
server.listen(port, async () => {
  dbConfig();
});
