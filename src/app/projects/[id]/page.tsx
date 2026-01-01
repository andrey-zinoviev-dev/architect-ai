import { showProjectById } from "@/app/services/projectService";
import Chat from "@/app/components/Chat";
export default async function ProjectPage() {
    const project = await showProjectById(1);

    return (
        <div>
            <h1>Project {project?.title}</h1>
            <Chat></Chat>
        </div>
    );
}