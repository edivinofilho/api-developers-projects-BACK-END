import express, { Application, json } from "express";
import "dotenv/config";
import { developersRouter } from "./routers/idInfos.router";
import { developersRouterMain } from "./routers";

const app: Application = express();
app.use(json())

app.use(developersRouterMain) // rota /developers simples - é assim?
app.use("/developers", developersRouter)
export default app;
