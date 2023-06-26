import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import { getTasks, postTodo } from "./controllers/task-controller.js";

dotenv.config();
connect();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "pirveli get works" });
});

app.post("/addTask", postTodo);

app.get("/api/tasks", getTasks);

app.listen(3000);
