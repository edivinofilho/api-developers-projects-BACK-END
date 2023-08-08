import { Request, Response } from "express";
import { QueryConfig, QueryResult } from "pg";
import format from "pg-format";
import { client } from "../database";

const getDevById = async (req: Request, res: Response): Promise<Response | void> => {
    const queryString: string = format(
    `
    SELECT * FROM "developers" AS "dev" 
    LEFT JOIN "developerInfo" AS "devInfo"
        ON "dev".id = "devInfo"."developerId"
    WHERE "dev".id = $1;`,
    );

    const queryResult: QueryResult = await client.query(queryString, [req.params.id])

    return queryResult.rows[0];
};

export default getDevById;