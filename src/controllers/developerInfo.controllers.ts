import { Request, Response } from "express";
import { DeveloperInfo } from "../interfaces";
import { developerInfoServices } from "../services";


const createInfo = async (req: Request, res: Response): Promise<Response> => {
    const developerInfo: DeveloperInfo = await developerInfoServices.createInfo(req.body);
    return res.status(200).json(developerInfo);
};

export { createInfo }