import { Router } from "express";
import { projectsControllers } from "../controllers";
import { developerIdExistsMiddleware, projectIdExistsMiddleware } from "../middlewares";
// import { developerIdExistsMiddleware, emailExistsMiddleware } from "../middlewares";
// import projectsInfoRouter from "./projectsInfo.router";

const projectsRouter: Router = Router();

projectsRouter.post("", developerIdExistsMiddleware, projectsControllers.create);

projectsRouter.patch("/:id", projectsControllers.update);
projectsRouter.get("/:id", projectIdExistsMiddleware, projectsControllers.readById);

export default projectsRouter;