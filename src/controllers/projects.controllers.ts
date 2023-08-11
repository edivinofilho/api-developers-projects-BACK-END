import { Request, Response } from "express";
import { Projects } from "../interfaces";
import { projectsServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const project: Projects = await projectsServices.create(req.body);
   
    return res.status(201).json(project);
};


const readById = async (req: Request, res: Response): Promise<Response> => {
    const project: Projects = await projectsServices.readById(req.params.id);
    return res.status(200).json(project);
};

const update = async (req: Request, res: Response): Promise<Response> => {

    const project: Projects = await projectsServices.update(req.params.id, req.body);

    return res.status(200).json(project);
};

export default { create, readById, update };