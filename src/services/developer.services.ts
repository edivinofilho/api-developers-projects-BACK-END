import format from "pg-format";
import { Developer, DeveloperCreate, DeveloperResult } from "../interfaces";
import { client } from "../database";
import { DeveloperInfoCreate, DeveloperInfo, DeveloperInfoResult } from "../interfaces/developerInfo.interface";


const create = async (payload: DeveloperCreate): Promise<Developer> => {
    const queryString: string = format(
        `INSERT INTO "developers" (%I) VALUES(%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    );

    const queryResult: DeveloperResult = await client.query(queryString);

    return queryResult.rows[0];
};

const read = async (): Promise<Array<Developer>> => {
    const queryResult: DeveloperResult = await client.query(
        'SELECT * FROM "developers";'
    );

    return queryResult.rows;
};

const readById = async (developerId: string): Promise<Developer> => {
    const queryString: string = format(
    `
    SELECT 
        "dev".id AS "developerId", 
        "dev".name AS "developerName", 
        "dev".email AS "developerEmail", 
        "devInfo"."developerSince" AS "developerInfoDeveloperSince",  
        "devInfo"."preferredOS" AS "developerInfoPreferredOS"
    FROM "developers" AS "dev" 
    LEFT JOIN "developerInfo" AS "devInfo"
    ON "dev".id = "devInfo"."developerId"
    WHERE "dev".id = $1;
    `
    );

    const queryResult: DeveloperResult = await client.query(queryString, [developerId])

    console.log(queryResult.rows[0])

    return queryResult.rows[0];
};

const update = async(id: string, payload: Developer): Promise<Developer> => {
    const queryString: string = format(
        `
        UPDATE "developers"
        SET(%I) = ROW(%L)
        WHERE "id" = $1
        RETURNING *;
        `,
        Object.keys(payload),
        Object.values(payload),
    );

    const queryResult: DeveloperResult = await client.query(queryString, [id]);

    return queryResult.rows[0];
};

const destroy = async(id: string): Promise<Developer> => {
    const queryString: string = format(`
    DELETE FROM "developers" WHERE "id" = $1;
    `)

    const queryResult: DeveloperResult = await client.query(queryString, [id]);

    return queryResult.rows[0]
};

const createInfo = async(payload: DeveloperInfoCreate): Promise<DeveloperInfo> => {
    const queryString: string = format(`
        INSERT INTO "developerInfo" (%I)
        VALUES (%L)
        RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)    
    )

    const queryResult: DeveloperInfoResult = await client.query(queryString);

    console.log(queryResult.rows[0])
    return queryResult.rows[0];
};


export default { create, read, readById, update, destroy, createInfo };