import React, { useState } from "react";
import "../index.css";

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ThemeSwitch from "./ThemeSwitch";

function App() {
    const [githubLink, setGithubLink] = useState("");
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [darkMode, setDarkMode] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(githubLink, selectedFiles);
        // Send data to backend
    };

    const handleFilesChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const toggleDarkMode = () => {  // Added function to toggle dark mode
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}>
            <div className={`bg-white p-8 rounded-lg shadow-xl w-96 ${darkMode ? "bg-gray-800" : "bg-white"}`}>

                <div className="flex justify-between items-center mb-4">
                    <h1 className={`text-3xl font-bold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>Commit-o-matic</h1>

                    {/*THEME SWITCH*/}
                    <ThemeSwitch mode={darkMode} setMode={setDarkMode} />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-blue-400" : "text-blue-600"}`} htmlFor="githubLink">
                            GitHub Link
                        </label>
                        <input
                            type="text"
                            id="githubLink"
                            placeholder="Enter your GitHub repository link"
                            className={`w-full p-3 border rounded-md ${darkMode ? "bg-gray-700 text-white" : ""}`}
                            value={githubLink}
                            onChange={(e) => setGithubLink(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-blue-400" : "text-blue-600"}`} htmlFor="githubLink">
                            Local File Directory
                        </label>
                        <input
                            type="file"
                            id="directoryInput"
                            style={{ display: "none" }}
                            className={`w-full p-3 border rounded-md ${darkMode ? "bg-gray-700 text-white" : ""}`}
                            onChange={handleFilesChange}
                            webkitdirectory="true"
                            directory="true"
                            multiple
                        />
                        <label htmlFor="directoryInput" className={`w-full p-3 border rounded-md cursor-pointer ${darkMode ? "bg-gray-700 text-white-200" : ""}`}>
                            Select Directory
                        </label>
                    </div>
                    <div className="mb-4">
                        <button type="submit" className={`w-full p-3 rounded-md transition ease-in-out duration-200 ${darkMode ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700"}`}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );


}


export default App;
