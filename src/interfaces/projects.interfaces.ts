import { QueryResult } from "pg";

type Projects = {
    id: number;
    name: string;
    description: string;
    repository: string;
    startDate: Date;
    endDate?: Date | null;
    developerId?: number | null;
};

type ProjectsResult = QueryResult<Projects>;
type ProjectsCreate = Omit<Projects, "id">;

export { Projects, ProjectsResult, ProjectsCreate };