import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    return (
        <button class="back-button" onClick={() => {navigate(-1)}}>Go back</button>
    );
}

export default BackButton;