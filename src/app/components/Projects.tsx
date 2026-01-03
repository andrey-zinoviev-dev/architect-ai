import { showUserProjects } from "@/app/services/projectService";
import Link from "next/link";

export default async function Projects() {
    const projects = await showUserProjects();
    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.area}</p>
                    <Link href={`/projects/${project.id}`}>Открыть проект</Link>
                </div>
            ))}
            <Link href="/projects/new">Добавить проект</Link>
        </div>
    );
}