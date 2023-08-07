import { Router } from "express";

const developersRouter: Router = Router();

developersRouter.get("/:id");
developersRouter.patch("/:id");
developersRouter.delete("/:id");