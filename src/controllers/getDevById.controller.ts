import { Request, Response } from "express";
import getDevById from "../services/getDevById.service";

const getDevByIdController = async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const result = await getDevById(req, res);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error)
    };
};

export default getDevByIdController;