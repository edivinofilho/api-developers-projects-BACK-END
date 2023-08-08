import { Request, Response } from "express";
import updateDeveloperData from "../services/updateDeveloperData.service";

const updateDeveloperDataController = async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const result = await updateDeveloperData(req, res);
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
};

export default updateDeveloperDataController;