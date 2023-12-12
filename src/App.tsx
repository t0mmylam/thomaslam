import { Tabs, Tab } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
    const darkMode = useDarkMode(true);

    return (
        <main
            className={`${
                darkMode.value ? "dark" : "light"
            } h-full w-full text-foreground bg-background`}
        >
            <div className="relative flex flex-col max-w-3xl m-auto pt-24">
                <div className="flex w-full">
                    <div className="flex flex-col w-full">
                        <Tabs aria-label="Pages">
                            <Tab
                                key="home"
                                title="Home"
                                className="w-full"
                            >
                                <Home />
                            </Tab>
                            <Tab key="about" title="About" className="w-full"></Tab>
                            <Tab key="projects" title="Projects" className="w-full"></Tab>
                        </Tabs>
                    </div>
                    <div className="absolute top-24 right-0">
                        <ThemeSwitcher />
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
}

export default App;
