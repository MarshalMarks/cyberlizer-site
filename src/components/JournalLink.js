import { useNavigate } from "react-router-dom";

function JournaLink({ props }) {
    const navigate = useNavigate();

    return (
        <>
            <div class="journal-link" onClick={() => {navigate("/journal/" + props.entryLink)}}>
                <div class="horizontal-div">
                    <h4>Read time: {props.readTime}</h4>
                    <h4>{props.releaseDate}</h4>
                </div>
                <h2>{props.entryTitle}</h2>
                <h3>{props.entryDescription}</h3>
            </div>
        </>
    );
}

export default JournaLink;