import { Tabs, Tab } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
    const darkMode = useDarkMode(false);

    return (
        <main
            className={`${
                darkMode.value ? "dark" : ""
            } h-full w-full text-foreground bg-background`}
        >
            <div className="flex max-w-2xl justify-between m-auto pt-24">
                <Tabs aria-label="Options">
                    <Tab key="about" title="About"></Tab>
                    <Tab key="experience" title="Experience"></Tab>
                    <Tab key="projects" title="Projects"></Tab>
                </Tabs>
                <ThemeSwitcher />
            </div>
        </main>
    );
}

export default App;
