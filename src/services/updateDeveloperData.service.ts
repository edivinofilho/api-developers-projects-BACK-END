import { Request, Response } from "express";
import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../database";

const updateDeveloperData = async (req: Request, res: Response): Promise<Response | void> => {
    const queryString: string = format(
    `UPDATE developers
    SET(%I) = ROW(%L)
    WHERE "id" = $1
    RETURNING *;`,
    Object.keys(req.body),
    Object.values(req.body)
    );

    const queryResult: QueryResult = await client.query(queryString, [req.params.id])

    return queryResult.rows[0]; 
};

export default updateDeveloperData;
