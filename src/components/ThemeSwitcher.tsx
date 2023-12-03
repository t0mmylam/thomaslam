import useDarkMode from "use-dark-mode";
import { Tooltip, Button } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export const ThemeSwitcher = () => {
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
            <Button isIconOnly>
                {darkMode.value ? (
                    <SunIcon className='p-2.5' onClick={handleClick} />
                ) : (
                    <MoonIcon className='p-2.5' onClick={handleClick} />
                )}
            </Button>
        </Tooltip>
    );
};
