import { Image, Link } from "@nextui-org/react";
import { Projects } from "../utils/data";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const Home = () => {
  const projects = Projects;

  const [width, setWidth] = useState<number>(window.innerWidth);

  // debounce the window resize event to prevent performance issues and weird pfp resizing
  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 200);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="py-12 flex-col">
      <div className="flex flex-col md:flex-row justify-between mb-14">
        <div className="flex-col">
          <h1 className="text-5xl font-bold text-primary">Thomas Lam</h1>
          <p className="pt-3 text-secondary max-w-md pb-8 lg:pb-0">
            I'm an undergraduate junior student pursuing a B.A. in Computer
            Science at{" "}
            <Link href="https://www.columbia.edu/" color="success">
              Columbia University
            </Link>
            . I recently did a summer internship at{" "}
            <Link href="https://www.nutanix.com/" style={{ color: "#A48CFF" }}>
              Nutanix
            </Link>{" "}
            and am currently working at{" "}
            <Link href="https://www.remod.tech/" style={{ color: "#3f83f8" }}>
              Remod
            </Link>{" "}
            through the{" "}
            <Link
              href="https://business.columbia.edu/lang/student-and-alumni-programming/launch/columbia-build-lab"
              style={{ color: "#009bdb" }}
            >
              Columbia Build Lab course
            </Link>
            .
          </p>
        </div>
        <Image
          key={width}
          width={width < 768 ? "full" : "160px"}
          radius="full"
          alt="Profile Picture"
          src="./pfp.jpeg"
          className="border-2 border-foreground"
        />
      </div>
      <h2 className="text-3xl font-bold pb-4">Current Projects</h2>
      <div className="flex md:flex-row flex-col lg:flex justify-center gap-2">
        {projects.map((project) =>
          project.current ? (
            <ProjectCard
              key={project.title}
              project={project}
              displayDate={false}
            />
          ) : null
        )}
      </div>
      {/* will eventually move this onto an about page */}
      <p className="pt-8 text-secondary">
        Outside of programming, I enjoy listening to music, snowboarding, and
        trying new restaurants around NYC.
      </p>
    </div>
  );
};

export default Home;
