import { Router } from "express";

const developersRouterMain: Router = Router();

developersRouterMain.post("/developers");

export { developersRouterMain };
