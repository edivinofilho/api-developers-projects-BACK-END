import { Router } from "express";
import { projectsControllers } from "../controllers";
import { developerIdExistsMiddleware, projectIdExistsMiddleware } from "../middlewares";

const projectsRouter: Router = Router();

projectsRouter.post("", developerIdExistsMiddleware, projectsControllers.create);

projectsRouter.patch("/:id", projectIdExistsMiddleware, developerIdExistsMiddleware,  projectsControllers.update);
projectsRouter.get("/:id", projectIdExistsMiddleware, projectsControllers.readById);

export default projectsRouter;