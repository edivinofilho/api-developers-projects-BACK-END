import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../database";

const developerIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const queryString: string = `SELECT * FROM "developers" WHERE "id" = $1;`;

    const queryResult: QueryResult = await client.query(queryString, [req.params.id])

    if(queryResult.rowCount === 0){
        return res.status(404).json({ message: "Developer not found."})
    };
    
    return next();
};


const emailExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const queryString: string = 
    `SELECT * FROM "developers" WHERE "email" = $1;`;

    const queryResult: QueryResult = await client.query(queryString, [req.body.email]);

    if(queryResult.rowCount > 0){
        return res.status(409).json({ message: "Email already exists."});
    }

    res.locals = { ...res.locals, developer: queryResult.rows[0] } 
    return next();
};

export { developerIdExistsMiddleware, emailExistsMiddleware };