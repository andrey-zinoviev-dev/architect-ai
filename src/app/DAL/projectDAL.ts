import prisma from "@/lib/prisma";

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