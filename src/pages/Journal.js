import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdownContent from "../journal_entries/test1.md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Journal({ id }) {
    const [articleText, setArticleText] = useState("");

    const navigate = useNavigate();

    const getFile = () => {
        fetch(markdownContent)
            .then((response) => response.text())
            .then((text) => setArticleText(text))
    }

    return (
        <>
            <button class="home-button" onClick={() => {navigate("/")}}>Return home</button>
            <div class="grid">
                <div id="journal-page-section" class="box-section">
                    <h1>Journal</h1>
                </div>
            </div>
        </>
    );
}

export default Journal;