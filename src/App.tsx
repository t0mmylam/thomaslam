import { Tabs, Tab } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import useDarkMode from "use-dark-mode";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProjectsTab from "./components/ProjectsTab";

function App() {
    const darkMode = useDarkMode();
    const location = useLocation();

    const getSelectedKey = () => {
        const path = location.pathname;
        if (path.includes("/projects")) {
            return "projects";
        }
        return "home";
    };

    return (
        <main
            className={`${
                darkMode.value ? "dark" : "light"
            } h-full w-full text-foreground bg-background overflow-auto py-16`}
        >
            <div className="relative flex flex-col max-w-sm md:max-w-3xl m-auto p-8">
                <div className="flex flex-col w-full">
                    <Tabs defaultSelectedKey={getSelectedKey()} aria-label="Pages">
                        <Tab key="home" title="Home" className="w-full">
                            <Home />
                        </Tab>
                        <Tab key="projects" title="Projects" className="w-full">
                            <ProjectsTab />
                        </Tab>
                    </Tabs>
                </div>
                <div className="absolute top-8 right-7">
                    <ThemeSwitcher />
                </div>
                <Footer />
            </div>
        </main>
    );
}

export default App;