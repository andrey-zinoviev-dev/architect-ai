import { getProjectById, getProjects, createProjectDAL } from "@/app/DAL/projectDAL";
import { BuildingProjectCreateInterface } from "../interfaces/interfaces";

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

export const createProject = async (project: BuildingProjectCreateInterface) => {
    try {
        const newProject = await createProjectDAL(project);
        return newProject;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to create project");
    }
};