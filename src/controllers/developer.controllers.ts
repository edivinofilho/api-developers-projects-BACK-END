import { Request, Response } from "express";
import { Developer } from "../interfaces";
import { developerServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const developer: Developer = await developerServices.create(req.body);
    return res.status(201).json(developer);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const developers: Array<Developer> = await developerServices.read();
    return res.status(200).json(developers);
};

const readById = async (req: Request, res: Response): Promise<Response> => {

    const developer: Developer = await developerServices.readById(req.params.id);
    return res.status(200).json(developer);
};

const update = async (req: Request, res: Response): Promise<Response> => {

    const developer: Developer = await developerServices.update(req.params.id, req.body);

    return res.status(200).json(developer);
};

const destroy = async(req: Request, res: Response): Promise<Response> => {
    await developerServices.destroy(req.params.id);

    return res.status(204).json();
}

export default { create, read, readById, update, destroy };