import { Request, Response } from "express";
import { deleteDeveloper } from "../services/deleteDeveloper.service";

const deleteDeveloperController = async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const result = await deleteDeveloper(req, res);
        return res.status(204).json(result);
    } catch (error) {
        console.log(error)
    }
};
export { deleteDeveloperController };