import { Router } from "express";
import { developerControllers } from "../controllers";
import { developerIdExistsMiddleware, emailExistsMiddleware, infoExistsMiddleware, invalidOS } from "../middlewares";

const developerRouter: Router = Router();

developerRouter.post("", emailExistsMiddleware, developerControllers.create);

developerRouter.get("", developerControllers.read);

developerRouter.get("/:id", developerIdExistsMiddleware, developerControllers.readById);

developerRouter.patch("/:id", developerIdExistsMiddleware, emailExistsMiddleware, developerControllers.update);
developerRouter.delete("/:id", developerIdExistsMiddleware, developerControllers.destroy);

developerRouter.post("/:id/infos", developerIdExistsMiddleware, infoExistsMiddleware,  invalidOS, developerControllers.createInfo);

export default developerRouter;