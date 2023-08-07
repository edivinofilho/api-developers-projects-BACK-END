import { Request, Response } from "express";
import addNewDeveloperService from "../services/addNewDeveloper.service";

const addNewDeveloperController = async (req: Request, res: Response): Promise<Response> => {
    try {
    const result = await addNewDeveloperService(req, res);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default addNewDeveloperController;