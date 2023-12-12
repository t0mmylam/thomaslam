import useDarkMode from "use-dark-mode";
import { Tooltip, Button } from "@nextui-org/react";
import { IconSun, IconMoon } from "@tabler/icons-react";

const ThemeSwitcher = () => {
    const darkMode = useDarkMode(false);

    const handleClick = () => {
        darkMode.toggle();
    };

    return (
        <Tooltip
            key="bottom"
            placement="bottom"
            content={darkMode.value ? "Light Mode" : "Dark Mode"}
        >
            <Button isIconOnly onClick={handleClick} variant="flat">
                {darkMode.value ? (
                    <IconSun stroke-width="1.25" />
                ) : (
                    <IconMoon stroke-width="1.25" />
                )}
            </Button>
        </Tooltip>
    );
};

export default ThemeSwitcher;
