import { Router } from "express";
import addNewDeveloperController from "../controllers/addNewDeveloper.controller";
import getDevByIdController from "../controllers/getDevById.controller";
import { deleteDeveloperController } from "../controllers/deleteDeveloper.controller";
import updateDeveloperDataController from "../controllers/updateDeveloperData.controller";
import emailExistsMiddleware from "../middlewares/emailExists.middleware";
import developerIdExistsMiddleware from "../middlewares/developerIdExists.middleware";
import addDevInfoController from "../controllers/addDevInfo.controller";

const developersRouter: Router = Router();

developersRouter.post("", emailExistsMiddleware, addNewDeveloperController)
developersRouter.get("/:id", developerIdExistsMiddleware, getDevByIdController);
developersRouter.patch("/:id", emailExistsMiddleware, developerIdExistsMiddleware, updateDeveloperDataController);
developersRouter.delete("/:id", developerIdExistsMiddleware, deleteDeveloperController);
developersRouter.post("/:id/infos", addDevInfoController);

export { developersRouter };