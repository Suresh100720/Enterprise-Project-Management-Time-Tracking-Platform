import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import { connectDB } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import timeRoutes from "./routes/timeRoutes.js";

import { initSocket } from "./socket/socket.js";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/time", timeRoutes);

// initialize socket
initSocket(io);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});