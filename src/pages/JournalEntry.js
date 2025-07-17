import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function JournalEntry() {
    const [markdownContent, setMarkdownContent] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const markdownContext = require.context('../journal_entries', false, /\.md$/);
    
    useEffect(() => {
        const fetchMarkdown = async () => {
            const path = `./${id}.md`;
            const content = markdownContext(path);
            const text = typeof content === 'string' ? content : content.default;
            setMarkdownContent(text);
        };

        fetchMarkdown();
    }, [id, markdownContext])

    const entryInfo = {
        readTime: "15 minutes",
        releaseDate: "January 15, 2025",
        entryTitle: "Simple entry title",
        entryDescription: "This is a simple description for this journal entry.",
        entryLink: "entry-file-title-1"
    }

    return (
        <>
            <button class="home-button" onClick={() => {navigate("/journal")}}>Return to journal</button>
            <div class="grid">
                <div id="entry-section" class="box-section">
                    <div id="entry-header">
                        <h1>{entryInfo.entryTitle}</h1>
                        <h2>{entryInfo.entryDescription}</h2>
                        <p>{entryInfo.releaseDate}</p>
                    </div>
                    <div id="markdown-section">
                        {markdownContent ? <ReactMarkdown>{markdownContent}</ReactMarkdown> : <p>ERROR: couldn't fetch this page :(</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default JournalEntry;