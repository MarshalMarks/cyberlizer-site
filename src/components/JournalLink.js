import { useNavigate } from "react-router-dom";

function JournalLink({ rkey, entry }) {
    const navigate = useNavigate();

    return (
        <>
            <div class="journal-link" onClick={() => {navigate("/journal/" + rkey)}}>
                <div class="horizontal-div">
                    <h4>{new Date(entry.value.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: 'numeric',
                        minute: '2-digit'
                    })}</h4>
                </div>
                <h2>{entry.value.title}</h2>
                <h3>{entry.value.content.split(' ').slice(0,16).join(' ')}...</h3>
            </div>
        </>
    );
}

export default JournalLink;