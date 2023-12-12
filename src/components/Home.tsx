import { Image, Link } from "@nextui-org/react";
import { Projects } from "../utils/data";
import ProjectCard from "./ProjectCard";

const About = () => {
    const projects = Projects;
    console.log(projects);

    return (
        <div className="py-12 flex-col">
            <div className="flex justify-between mb-14">
                <div className="flex-col">
                    <h1 className="text-6xl font-bold text-primary">
                        Thomas Lam
                    </h1>
                    <h4 className="text-primary">
                        CS Student at{" "}
                        <Link href="https://www.columbia.edu/" color="success">
                            Columbia University
                        </Link>
                    </h4>
                    <p className="pt-3 text-accent max-w-md">
                        I'm a sophomore undergrad pursuing a B.A. in Computer
                        Science at Columbia College.
                    </p>
                </div>
                <Image
                    width={150}
                    radius="full"
                    alt="Profile Picture"
                    src="./pfp.jpeg"
                    className="border-2 border-foreground"
                />
            </div>
            <h2 className="text-3xl font-bold pb-4">Projects</h2>
            <div className="flex gap-8">
                {projects.map((project) =>
                    project.featured ? <ProjectCard project={project} /> : null
                )}
            </div>
        </div>
    );
};

export default About;
