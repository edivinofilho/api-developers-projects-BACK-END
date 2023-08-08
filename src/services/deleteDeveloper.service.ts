import { Request, Response } from "express";
import { client } from "../database";
import { QueryResult } from "pg";

const deleteDeveloper = async (req: Request, res: Response): Promise<Response | void> => {
    const queryString: string = 
    `DELETE FROM developers WHERE id = $1;`

    const queryResult: QueryResult = await client.query(queryString, [req.params.id]);

};

export { deleteDeveloper };