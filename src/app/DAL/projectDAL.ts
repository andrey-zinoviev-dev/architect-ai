import prisma from "@/lib/prisma";
import { BuildingProjectCreateInterface } from "../interfaces/interfaces";

export const getProjects = async () => {
    try {
        const projects = await prisma.buildingProject.findMany();
        return projects;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get projects");
    }
};

export const getProjectById = async (id: number) => {
    try {
        const project = await prisma.buildingProject.findUnique({
            where: {
                id: id
            }
        });
        return project;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get project");
    }
};

export const createProjectDAL = async (project: BuildingProjectCreateInterface) => {
    try {
        const newProject = await prisma.buildingProject.create({
            data: project
        });
        return newProject;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to create project");
    }
};