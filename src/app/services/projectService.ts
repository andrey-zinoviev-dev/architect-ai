import { getProjectById, getProjects } from "@/app/DAL/projectDAL";

export const showUserProjects = async () => {
    try {
        const projects = await getProjects();
        return projects;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get projects");
    }
};

export const showProjectById = async (id: number) => {
    try {
        const project = await getProjectById(id);
        return project;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get project");
    }
};