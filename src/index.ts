import "reflect-metadata";
import express from "express";
require("dotenv").config();

import cors from "cors";
import morgan from "morgan";
import { createConnection } from "typeorm";
import userRoutes from "./routes/user.routes";
import todoRoutes from "./routes/todo.routes";

const app = express()
const PORT = 3000;
createConnection();

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use(userRoutes);
app.use(todoRoutes);

app.listen(PORT);
console.log(`App listening at http://localhost:${PORT}`);


