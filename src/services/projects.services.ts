import format from "pg-format";
import { Projects, ProjectsCreate, ProjectsResult } from "../interfaces";
import { client } from "../database";


const create = async (payload: ProjectsCreate): Promise<Projects> => {
    const queryString: string = format(
        `INSERT INTO "projects" (%I) VALUES(%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    );

    const queryResult: ProjectsResult = await client.query(queryString);

    return queryResult.rows[0];
};


const readById = async (projectId: string): Promise<Projects> => {
    const queryString: string = format(
    `
    SELECT 
        "p".id AS "projectId",
        "p".name AS "projectName",
        "p".description AS "projectDescription",
        "p".repository AS "projectRepository",
        "p"."startDate" AS "projectStartDate",
        "p"."endDate" AS "projectEndDate",
        "dev".name AS "projectDeveloperName" 
    FROM "developers" AS "dev" 
    LEFT JOIN "projects" AS "p"
        ON "dev".id = "p"."developerId"
    WHERE "p".id = $1;
    `
    );

    const queryResult: ProjectsResult = await client.query(queryString, [projectId])

    return queryResult.rows[0];
};

const update = async(id: string, payload: Projects): Promise<Projects> => {
    const queryString: string = format(
        `
        UPDATE "projects"
        SET(%I) = ROW(%L)
        WHERE "id" = $1
        RETURNING *;
        `,
        Object.keys(payload),
        Object.values(payload),
    );

    const queryResult: ProjectsResult = await client.query(queryString, [id]);

    return queryResult.rows[0];
};

export default { create, readById, update };