import { Request, Response } from "express";
import addDevInfo from "../services/addDevInfo.service";

const addDevInfoController = async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const result = await addDevInfo(req, res);
        console.log(result)
        return res.status(201).json(result);
    } catch (error) {
        console.log(error)
    }
};

export default addDevInfoController;