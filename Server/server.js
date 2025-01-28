import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import cookieParser from "cookie-parser";

import authRotes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";
import resultRoutes from "./routes/resultRoutes.js";

const app = express();

const corsOptions = {
  origin: "https://ielts-lts.vercel.app",
  credentials: true,
};
app.use(cors(corsOptions));

//MIDDLEWARE

app.use(express.json());
app.use(cookieParser());
//ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRotes);
app.use("/api", resultRoutes);

//START SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
