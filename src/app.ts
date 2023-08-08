import express, { Application, json } from "express";
import "dotenv/config";

import { developersRouter } from "./routers";

const app: Application = express();
app.use(json())

app.use("/developers", developersRouter)
export default app;
