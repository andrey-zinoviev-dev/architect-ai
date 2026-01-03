import { BuildingProjectCreateInterface } from "@/app/interfaces/interfaces";
import { createProject } from "@/app/services/projectService";

//rewrite to client component

//server action
const createProjectSubmitHandler = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const area = formData.get("area") as string;
    const project: BuildingProjectCreateInterface = { title, area };

    try {
        const newProject = await createProject(project);
        
        // redirect(`/projects/${newProject.id}`);
    } catch (error) {
        console.error(error);
        throw new Error("Failed to create project");
    }
}

export default function NewProjectPage() {
    return (
        <div>
            <form action={createProjectSubmitHandler}>
                <input type="text" name="title" placeholder="Название проекта" />
                <input type="text" name="area" placeholder="Регион, где будет проект" />
                <button type="submit">Создать проект</button>
            </form>
        </div>
    );
}