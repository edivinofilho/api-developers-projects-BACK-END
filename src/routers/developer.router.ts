import { Router } from "express";
import { developerControllers } from "../controllers";
import { developerIdExistsMiddleware, emailExistsMiddleware } from "../middlewares";

const developerRouter: Router = Router();

developerRouter.post("", emailExistsMiddleware, developerControllers.create);
developerRouter.get("", developerControllers.read);

developerRouter.get("/:id", developerIdExistsMiddleware, developerControllers.readById);
developerRouter.patch("/:id", emailExistsMiddleware, developerIdExistsMiddleware, developerControllers.update);
developerRouter.delete("/:id", developerIdExistsMiddleware, developerControllers.destroy);

developerRouter.post("/:id/infos", developerInfoControllers.);

export default developerRouter;