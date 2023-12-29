interface Project {
    title: string;
    caption: string;
    link: string;
    github: string;
    tags: string[];
    date: string;
    featured: boolean;
    gradient: string;
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
    gradient:
        "from-orange-500 from-10% via-orange-500 via-30% to-blue-500 to-90%",
};

const letterboxedSolver = {
    title: "Letterboxed Solver",
    caption: "A website that solves NYT's Letterboxed game.",
    link: "https://t0mmylam.github.io/letterboxed-solver/",
    github: "https://github.com/t0mmylam/letterboxed-solver",
    tags: ["TypeScript", "React", "Python", "TailwindCSS"],
    date: "2023",
    featured: true,
    gradient: "from-pink-500 via-rose-500 to-red-500",
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
    gradient:
        "from-emerald-500 from-10% via-emerald-500 via-30% to-blue-500 to-90%",
};

const chat = {
    title: "TCP Chat Server",
    caption: "A CLI TCP chat server written in Go.",
    link: "",
    github: "https://github.com/t0mmylam/chat-cli",
    tags: ["Go"],
    date: "2023",
    featured: false,
    gradient: "from-purple-500 via-blue-500 to-blue-500",
};

const personalWebsite = {
    title: "Personal Website",
    caption: "This website.",
    link: ".",
    github: "https://github.com/t0mmylam/thomaslam",
    tags: ["TypeScript", "React", "TailwindCSS", ""],
    date: "2021-2023",
    featured: false,
    gradient: "from-red-500 via-indigo-500 to-purple-500",
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
    gradient: "from-emerald-500 via-emerald-500 to-teal-500",
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
};

const Projects: Project[] = [
    theCourseForum,
    iMessageWrapped,
    letterboxedSolver,
    chat,
    personalWebsite,
    dot,
];

export { Projects, Badges };
export type { Project };
