import { Request, Response } from "express";
import format from "pg-format";
import { QueryResult } from "pg";
import { client } from "../database";

const addNewDeveloperService = async (req: Request, res: Response): Promise<Response | void> => {

    const queryString: string = format(
        `
        INSERT INTO "developers" (%I)
        VALUES(%L)
        RETURNING *;
        `,
        Object.keys(req.body),
        Object.values(req.body)
    );

    const queryResult: QueryResult = await client.query(queryString);

    console.log(Object.keys)
    return queryResult.rows[0];
};

export default addNewDeveloperService;