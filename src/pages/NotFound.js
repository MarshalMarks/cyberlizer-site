import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <div class="grid">
                <div id="not-found-section" class="box-section">
                    <h1 id="text404">404</h1>
                    <h1>We couldn't find the page you were looking for :(</h1>
                    <button onClick={() => {navigate("/")}}>Return home</button>
                </div>
            </div>
        </>
    );
}

export default NotFound;