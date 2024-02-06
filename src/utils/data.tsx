interface Project {
    title: string;
    caption: string;
    link: string;
    github: string;
    tags: string[];
    date: string;
    featured: boolean;
    color: string;
}

const theCourseForum = {
    title: "theCourseForum",
    caption:
        "A platform where University of Virginia students can read and share course and professor reviews.",
    link: "https://thecourseforum.com",
    github: "https://github.com/thecourseforum/theCourseForum2",
    tags: ["Django", "Python", "PostgreSQL", "JavaScript"],
    date: "2022 - 2023",
    featured: true,
    color: "orange"
};

const letterboxedSolver = {
    title: "Letterboxed Solver",
    caption: "A website that solves NYT's Letterboxed game.",
    link: "https://t0mmylam.github.io/letterboxed-solver/",
    github: "https://github.com/t0mmylam/letterboxed-solver",
    tags: ["TypeScript", "React", "Python", "TailwindCSS"],
    date: "2023",
    featured: true,
    color: "pink"
};

const iMessageWrapped = {
    title: "iMessage Wrapped",
    caption:
        "A MacOS application that generates a Spotify Wrapped-style report for your iMessage texts.",
    link: "",
    github: "https://github.com/t0mmylam/imessage-wrapped",
    tags: ["Swift", "SQLite", "Shell"],
    date: "2023",
    featured: true,
    color:
        "#3b82f6"
};

const chat = {
    title: "TCP Chat Server",
    caption: "A CLI TCP chat server written in Go.",
    link: "",
    github: "https://github.com/t0mmylam/chat",
    tags: ["Go"],
    date: "2023",
    featured: false,
    color: "#2dd4bf"
};

const personalWebsite = {
    title: "Personal Website",
    caption: "This website.",
    link: ".",
    github: "https://github.com/t0mmylam/thomaslam",
    tags: ["TypeScript", "React", "TailwindCSS", "Netlify"],
    date: "2021-2023",
    featured: false,
    color: "white"
};

const timeClockBot = {
    title: "Time Clock Bot",
    caption: "A Discord bot that tracks time for users.",
    link: "",
    github: "https://github.com/t0mmylam/time-clock-bot",
    tags: ["Python", "SQLite", "Heroku"],
    date: "2023",
    featured: false,
    color: "#10b981"
};

const dot = {
    title: ".dot",
    caption:
        "Script to setup and replicate my dev environment on any 64-bit macOS or Debian system.",
    link: "",
    github: "https://github.com/t0mmylam/.dot",
    tags: ["Shell"],
    date: "2023",
    featured: false,
    color: "#a78bfa"
};

const airtableScripts = {
    title: "Airtable Scripts",
    caption:
        "A collection of scripts to automate tasks on Airtable that I wrote for a friend.",
    link: "",
    github: "https://github.com/t0mmylam/airtable-scripts",
    tags: ["JavaScript", "Airtable"],
    date: "2023",
    featured: false,
    color: "#f43f5e"
};

const Badges: { [key: string]: string } = {
    Django: "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    Python: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    PostgreSQL:
        "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    JavaScript:
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    TypeScript:
        "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    Swift: "https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white",
    SQLite: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
    React: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    TailwindCSS:
        "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    Shell: "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white",
    Vite: "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
    Go: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
    Heroku: "https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white",
    Netlify:
        "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7",
    Airtable:
        "https://img.shields.io/badge/Airtable-18BFFF?style=for-the-badge&logo=Airtable&logoColor=white",
};

const Projects: Project[] = [
    iMessageWrapped,
    letterboxedSolver,
    theCourseForum,
    chat,
    personalWebsite,
    airtableScripts,
    dot,
    timeClockBot,
];

export { Projects, Badges };
export type { Project };
