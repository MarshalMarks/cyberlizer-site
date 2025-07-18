import { useNavigate } from "react-router-dom";

function MiniJournalLink({ rkey, entry }) {
    const navigate = useNavigate();

    return (
        <>
            <div class="mini-journal-link" onClick={() => {navigate("/journal/" + rkey)}}>
                <h2>{entry.value.title}</h2>
                <h4>{new Date(entry.value.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}</h4>
            </div>
        </>
    );
}

export default MiniJournalLink;