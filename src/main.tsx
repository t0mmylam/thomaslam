import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NextUIProvider className="h-full w-full">
            <Router>
            <App />
            </Router>
        </NextUIProvider>
    </React.StrictMode>
);
