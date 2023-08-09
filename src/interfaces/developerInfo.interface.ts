import { QueryResult } from "pg";

type DeveloperInfo = {
    id: number;
    developerSince: Date;
    preferredOS: "Windows" | "Linux" | "MacOS";
    developerId: number;
};

type DeveloperInfoResult = QueryResult<DeveloperInfo>;
type DeveloperInfoCreate = Omit<DeveloperInfo, "id">;

export { DeveloperInfo, DeveloperInfoResult, DeveloperInfoCreate };