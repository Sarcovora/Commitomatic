import React, { useState } from 'react';

const Home = () => {
    const [githubLink, setGithubLink] = useState("");
    const [fileDirectory, setFileDirectory] = useState("");

    const handleSubmit = () => {
        // Here, you would send 'githubLink' and 'fileDirectory' to your Python backend.
        alert(`GitHub Link: ${githubLink}, File Directory: ${fileDirectory}`);
    };

    return (
        <div className="container">
            <h1>Commitomatic</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter GitHub link"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter file directory"
                    value={fileDirectory}
                    onChange={(e) => setFileDirectory(e.target.value)}
                />
            </div>
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default Home;
