import { Request, Response } from "express";
// import { DevelopersInfo } from "../interfaces/developerInfo.interface";
import format from "pg-format";
import { QueryResult } from "pg";
import { client } from "../database";

const addDevInfo = async (req: Request, res: Response): Promise<Response | void> => {
    const queryString: string = format(
    `
    UPDATE "developerInfo" 
    SET (%I) = ROW(%L) WHERE "id" = $1
    RETURNING *;
    `,
    Object.keys(req.body),
    Object.values(req.body)
    );

    const queryResult: QueryResult = await client.query(queryString, [req.params.id]);
    console.log(queryResult.rows[0])
    return queryResult.rows[0];
};

export default addDevInfo;