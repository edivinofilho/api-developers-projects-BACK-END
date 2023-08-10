import express, { Application, json } from "express";
import { developerRouter, projectsRouter } from "./routers";
// import "dotenv/config";

const app: Application = express();
app.use(json())

app.use("/developers", developerRouter)
app.use("/projects", projectsRouter)

export default app;
