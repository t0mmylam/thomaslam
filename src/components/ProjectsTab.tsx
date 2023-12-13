import { Projects } from "../utils/data";
import ProjectCard from "./ProjectCard";

const ProjectsTab = () => {
    const projects = Projects;

    return (
        <div className="py-12 flex-col">
            <h1 className="text-5xl font-bold text-primary text-center mb-2">
                Projects
            </h1>
            <h2 className="text-2xl  text-secondary text-center">
                A list of things I've worked on...
            </h2>
            <div className="grid grid-cols-3 gap-8 pt-8">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} displayDate={false}/>
                ))}
            </div>
        </div>
    );
};

export default ProjectsTab;
