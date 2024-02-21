import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan"; // muestra las peticiones por consola

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api",authRoutes);
app.use("/api", taskRoutes);

export default app;