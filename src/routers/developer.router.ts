import { Router } from "express";
import { developerControllers } from "../controllers";
import { developerIdExistsMiddleware, emailExistsMiddleware, infoExistsMiddleware, invalidOS } from "../middlewares";

// import developerInfoRouter from "./developerInfo.router";

const developerRouter: Router = Router();

developerRouter.post("", emailExistsMiddleware, developerControllers.create);

developerRouter.get("", developerControllers.read);

// developerRouter - middleware de developer exists para ser usado em todas as rotas/:id

developerRouter.get("/:id", developerIdExistsMiddleware, developerControllers.readById);

developerRouter.patch("/:id", developerIdExistsMiddleware, emailExistsMiddleware, developerControllers.update);
developerRouter.delete("/:id", developerIdExistsMiddleware, developerControllers.destroy);

developerRouter.post("/:id/infos",  developerIdExistsMiddleware, invalidOS, infoExistsMiddleware, developerControllers.createInfo);

export default developerRouter;