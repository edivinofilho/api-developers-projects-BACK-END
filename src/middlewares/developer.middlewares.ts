import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../database";
import { AppError } from "../errors";
import { DeveloperResult, ProjectsResult } from "../interfaces";

const developerIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if(req.baseUrl === "/projects" && !req.body.developerId) return next();

    const id: string = req.body.developerId || req.params.id

    const queryResult: DeveloperResult = await client.query(
        'SELECT * FROM "developers" WHERE "id" = $1;', [id])

    if(!queryResult.rowCount){
        throw new AppError("Developer not found.", 404);
    };

    return next();
};


const emailExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const queryResult: DeveloperResult = await client.query('SELECT * FROM "developers" WHERE "email" = $1;', [req.body.email]);

    if(queryResult.rowCount > 0){
        throw new AppError("Email already exists.", 409)
    }

    res.locals = { ...res.locals, developer: queryResult.rows[0] } 
    return next();
};

const infoExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const queryResult: ProjectsResult = await client.query('SELECT * FROM "developerInfos" WHERE "developerId" = $1;', [req.params.id]);

    
    if(queryResult.rowCount){
        throw new AppError("Developer infos already exists.", 409);
    };
    
    return next();
};

const invalidOS = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        
    const inPreferredOS = ['Windows', 'Linux', 'MacOS'].includes(req.body.preferredOS)

      
    if(!inPreferredOS){
        throw new AppError("Invalid OS option.", 400);
    };
    
    return next();
};

export { developerIdExistsMiddleware, emailExistsMiddleware, infoExistsMiddleware, invalidOS };