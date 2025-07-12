import { useNavigate } from "react-router-dom";

function Projects() {
    const navigate = useNavigate();

    return (
        <>
            <button class="home-button" onClick={() => {navigate("/")}}>Return home</button>
            <div class="grid">
                <div id="journal-page-section" class="box-section">
                    <h1>Projects</h1>
                </div>
            </div>
        </>
    );
}

export default Projects;