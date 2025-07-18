import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import remarkGfm from 'https://esm.sh/remark-gfm@4?bundle'

function JournalEntry() {
    const [entry, setEntry] = useState(null);
    const navigate = useNavigate();
    const params = useParams();
    
    useEffect(() => {
        const fetchEntry = async () => {
            try {
                const repoDid = "did:plc:psca2btmhyqh5cpnjs4rszpa";
                const collection = "com.whtwnd.blog.entry";
                const url = `https://bsky.social/xrpc/com.atproto.repo.getRecord?repo=${repoDid}&collection=${collection}&rkey=${params.rkey}`;
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
                setEntry(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchEntry();
    }, []);

    return (
        <>
            <button class="home-button" onClick={() => {navigate("/journal")}}>Return to journal</button>
            <div class="grid">
                <div id="entry-section" class="box-section">
                {entry ?
                    <>
                        <div id="entry-header">
                            <h1>{entry.value.title}</h1>
                            <p>Posted on {new Date(entry.value.createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: 'numeric',
                                minute: '2-digit'
                            })}</p>
                        </div>
                        <div id="markdown-section">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.value.content}</ReactMarkdown>
                        </div>
                    </>
                : <p>ERROR: couldn't fetch this page :(</p>}
                </div>
            </div>
        </>
    );
}

export default JournalEntry;