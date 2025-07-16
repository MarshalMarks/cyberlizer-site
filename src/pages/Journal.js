import { useNavigate } from "react-router-dom";
import JournaLink from "../components/JournalLink";

function Journal() {
    const navigate = useNavigate();

    const dummyProps1 = {
        readTime: "2 minutes",
        releaseDate: "July 11, 2025",
        entryTitle: "Simple entry title 2",
        entryDescription: "This is a simple description for this journal entry.",
        entryLink: "entry-file-title-2"
    }

    const dummyProps2 = {
        readTime: "2 minutes",
        releaseDate: "July 11, 2025",
        entryTitle: "Simple entry title",
        entryDescription: "This is a simple description for this journal entry.",
        entryLink: "entry-file-title-1"
    }

    return (
        <>
            <button class="home-button" onClick={() => {navigate("/")}}>Return home</button>
            <div class="grid">
                <div id="journal-page-section" class="box-section">
                    <h1>Journal</h1>
                    <div id="journal-link-container">
                        <JournaLink props={dummyProps1} />
                        <JournaLink props={dummyProps2} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Journal;