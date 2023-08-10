import { Router } from "express";
import { projectsControllers } from "../controllers";
// import { developerIdExistsMiddleware, emailExistsMiddleware } from "../middlewares";
// import projectsInfoRouter from "./projectsInfo.router";

const projectsRouter: Router = Router();

projectsRouter.post("", projectsControllers.create);
projectsRouter.patch("/:id", projectsControllers.update);

// projectsRouter.get("/:id", projectsControllers.readById);

export default projectsRouter;