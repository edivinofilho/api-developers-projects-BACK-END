import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../database";
import { AppError } from "../errors";
import { DeveloperResult, ProjectsResult } from "../interfaces";

const developerIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if(req.method === "PATCH" && !req.body.developerId) return next();

    const id: string = req.body.developerId || req.params.id

    const queryResult: QueryResult = await client.query(
        'SELECT * FROM "developers" WHERE "id" = $1;', [id])

    if(!queryResult.rowCount){
        throw new AppError("Developer not found.", 404);
    };
    
    return next();
};


const emailExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // diferente da demo
    const queryResult: DeveloperResult = await client.query('SELECT * FROM "developers" WHERE "email" = $1;', [req.body.email]);

    if(queryResult.rowCount > 0){
        throw new AppError("Email already exists.", 409)
    }

    res.locals = { ...res.locals, developer: queryResult.rows[0] } 
    return next();
};

const infoExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const queryResult: ProjectsResult = await client.query('SELECT * FROM "developerInfo" WHERE "developerId" = $1;', [req.params.id]);

    console.log(req.params.id)
    if(!queryResult.rowCount){
        throw new AppError("Developer infos already exists.", 409);
    };
    
    return next();
};

const invalidOS = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const queryResult: QueryResult = await client.query('SELECT * FROM "developerInfo" WHERE "preferredOS" = $1;', [req.body.preferredOS]);

    if(!queryResult.rowCount){
        throw new AppError("Invalid OS option.", 400);
    };
    
    return next();
};

export { developerIdExistsMiddleware, emailExistsMiddleware, infoExistsMiddleware, invalidOS };