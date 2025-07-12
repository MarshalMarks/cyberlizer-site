import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdownContent from "../journal_entries/test1.md";
import { useState } from "react";

function Journal({ id }) {
    const [articleText, setArticleText] = useState("");

    const getFile = () => {
        fetch(markdownContent)
            .then((response) => response.text())
            .then((text) => setArticleText(text))
    }

    return (
        <>
            <h1>Journal</h1>
            <button onClick={getFile}></button>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{articleText}</ReactMarkdown>
        </>
    );
}

export default Journal;