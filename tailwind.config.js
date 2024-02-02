const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        nextui({
            addCommonColors: true,
            themes: {
                light: {
                    colors: {
                        primary: "#11181c",
                        secondary: "#646b70",
                        accent: "#7e868c",
                        background: "#f8f9fa",
                        success: "#9BCBEB",
                    },
                },
                dark: {
                    colors: {
                        primary: "#d1d5db",
                        secondary: "#9ca3af",
                        accent: "#6b7280",
                        background: "#0c0f11",
                        success: "#9BCBEB",
                    },
                },
            },
        }),
    ],
};
