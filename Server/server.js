// server.js or app.js
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";
import resultRoutes from "./routes/resultRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";

const app = express();

const corsOptions = {
  origin: ["https://ielts-lts.vercel.app", "http://localhost:5173"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/api", resultRoutes);
app.use("/api", certificateRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
