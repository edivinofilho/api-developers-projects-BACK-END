import express, { Application, json } from "express";
import { developerRouter } from "./routers";
// import "dotenv/config";

// import { developersRouter } from "./routers";

const app: Application = express();
app.use(json())

app.use("/developers", developerRouter)

export default app;
