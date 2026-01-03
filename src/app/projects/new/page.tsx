import { BuildingProjectCreateInterface } from "@/app/interfaces/interfaces";
import { createProject } from "@/app/services/projectService";

//rewrite to client component

//server action
const createProjectSubmitHandler = async (formData: FormData) => {
  "use server";
    const project: BuildingProjectCreateInterface = {
        title: formData.get("title") as string,
        urban_or_architecture: formData.get("urban_or_architecture") as string,
        project_category: formData.get("project_category") as string,
        region: formData.get("region") as string,
        plot_area: formData.get("plot_area") as string,
        building_type: formData.get("building_type") as string,
        basic_limits: formData.get("basic_limits") as string,
    };
//   const project: BuildingProjectCreateInterface = formData as BuildingProjectCreateInterface;

//   const title = formData.get("title") as string;
//   const area = formData.get("area") as string;
//   const project: BuildingProjectCreateInterface = { title, area };

  try {
    const newProject = await createProject(project);

    // redirect(`/projects/${newProject.id}`);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create project");
  }
};

export default function NewProjectPage() {
  return (
    <div>
      <form action={createProjectSubmitHandler}>
        <input type="text" name="title" placeholder="Название проекта" />
        {/* <input
          type="text"
          name="urban_or_architecture"
          placeholder="Вы делаете градостроительство (генпланы) или архитектуру (проекты зданий)?"
        /> */}
        <select name="urban_or_architecture" id="urban_or_architecture"><option value="urban">Градостроительство</option><option value="architecture">Архитектура</option></select>
        {/* <input
          type="text"
          name="project_stage"
          placeholder="Новое здание, реконструкция или реставрация"
        /> */}
        <select name="project_category" id="project_category">
          <option value="new">Новое здание</option>
          <option value="reconstruction">Реконструкция</option>
          <option value="restoration">Реставрация</option>
        </select>
        <input type="text" name="region" placeholder="Регион, где будет проект" />
        <input
          type="text"
          name="plot_area"
          placeholder="Площадь территории, где будет постройка"
        />
        <input type="text" name="building_type" placeholder="Тип постройки" />
        <input
          type="text"
          name="basic_limits"
          placeholder="Рамки на строительство: этажность, пятно застройки"
        />
        <button type="submit">Создать проект</button>
      </form>
    </div>
  );
}
