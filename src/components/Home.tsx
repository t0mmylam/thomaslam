import { Image, Link } from "@nextui-org/react";
import { Projects } from "../utils/data";
import ProjectCard from "./ProjectCard";

const Home = () => {
    const projects = Projects;

    return (
        <div className="py-12 flex-col">
            <div className="flex justify-between mb-14">
                <div className="flex-col">
                    <h1 className="text-6xl font-bold text-primary">
                        Thomas Lam
                    </h1>
                    <p className="pt-3 text-secondary max-w-md">
                        I'm an undergraduate sophomore student pursuing a B.A.
                        in Computer Science at{" "}
                        <Link href="https://www.columbia.edu/" color="success">
                            Columbia University
                        </Link>
                        . I recently did a summer internship at{" "}
                        <Link
                            href="https://www.nutanix.com/"
                            style={{ color: "#A48CFF" }}
                        >
                            Nutanix
                        </Link>
                        .
                    </p>
                </div>
                <Image
                    width={160}
                    radius="full"
                    alt="Profile Picture"
                    src="./pfp.jpeg"
                    className="border-2 border-foreground"
                />
            </div>
            <h2 className="text-3xl font-bold pb-4">Featured Projects</h2>
            <div className="flex justify-between">
                {projects.map((project) =>
                    project.featured ? (
                        <ProjectCard key={project.title} project={project} displayDate={false}/>
                    ) : null
                )}
            </div>
            <p className="pt-8 text-secondary">
                Outside of programming, I enjoy listening to music,
                snowboarding, and trying new restaurants around NYC.
            </p>
        </div>
    );
};

export default Home;
