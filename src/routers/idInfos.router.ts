import { Router } from "express";

const developersRouter: Router = Router();

developersRouter.post("/:id/infos");

export { developersRouter };