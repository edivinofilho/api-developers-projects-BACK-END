type Projects = {
    id: number;
    name: string;
    description?: string | null;
    repository: string;
    startDate: Date;
    endDate?: Date | null;
    developerId: number;
}

export { Projects };