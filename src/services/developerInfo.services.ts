import format from "pg-format";
import { client } from "../database";
import { DeveloperInfoCreate, DeveloperInfo, DeveloperInfoResult } from "../interfaces";

const createInfo = async(payload: DeveloperInfoCreate): Promise<DeveloperInfo> => {
    const queryString: string = format(`
        INSERTO INTO "developerInfo" (%I)
        VALUES (%L)
        WHERE "id" = $1
        RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)    
    )

    const queryResult: DeveloperInfoResult = await client.query(queryString);

    return queryResult.rows[0];
};

export default { createInfo };