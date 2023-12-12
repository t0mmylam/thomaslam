import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
} from "@nextui-org/react";
import { Project, Badges } from "../utils/data";

const ProjectCard = (props: { project: Project }) => {
    const project = props.project;

    function handlePress(link: string, github: string) {
        if (github !== "") window.open(github, "_blank");
        if (link !== "") window.open(link, "_blank");
    }

    return (
        <Card
            key={project.title}
            isPressable
            onPress={() => handlePress(project.link, project.github)}
            className={`h-60 w-60 rounded-[14px] bg-gradient-to-r ${project.gradient} p-[2.3px]`}
        >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <h4 className="text-primary text-xl font-bold mb-1">
                    {project.title}
                </h4>
                <h2 className="mb-2">{project.date}</h2>
                <p className="text-medium text-primary/60 text-left">
                    {project.caption}
                </p>
            </CardHeader>
            <CardBody className="col-span-12 sm:col-span-4 h-full w-full bg-background rounded-[14px]"></CardBody>
            <CardFooter className="absolute bottom-0 flex-wrap gap-1">
                {project.tags.map((tag) => (
                    <Image key={tag} alt={tag} className="h-[20px]" src={Badges[tag]} />
                ))}
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
