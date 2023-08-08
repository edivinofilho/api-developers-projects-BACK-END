import { Request, Response } from "express";
import addNewDeveloperService from "../services/addNewDeveloper.service";

const addNewDeveloperController = async (req: Request, res: Response): Promise<Response | void> => {
    try {
    const result = await addNewDeveloperService(req, res);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

export default addNewDeveloperController;