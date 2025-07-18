import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import remarkGfm from 'https://esm.sh/remark-gfm@4?bundle'
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";

function JournalEntry({ entries }) {
    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const setEntry = (entry) => {
            setTitle(entry.value.title);
            setDate(new Date(entry.value.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: 'numeric',
                minute: '2-digit'
            }));
            setContent(entry.value.content);
            setLoading(false);
        };

        const fetchAPIEntry = async () => {
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
                setLoading(false);
            }
        };

        const searchLocalEntry = async () => {
            const match = entries?.find(e => e.uri.split("/")[4] === params.rkey);
            if (match) {
                console.log("Found in local entries:", match);
                setEntry(match);
            } else {
                // Fallback to fetching
                console.log("Not found locally, fetching from API...");
                fetchAPIEntry();
            }
        }

        if (entries && entries.length > 0) {
            searchLocalEntry();
        } else {
            fetchAPIEntry(); // fallback for direct page load
        }
    }, [params.rkey, entries]);

    return (
        <>
            <BackButton />
            <div class="grid">
                <div id="entry-section" class="box-section">
                {loading ? <Loading /> :
                content ?
                    <>
                        <div id="entry-header">
                            <h1>{title}</h1>
                            <p>Posted on {date}</p>
                            <p><i>by Clay Marks</i></p>
                        </div>
                        <div id="markdown-section">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                        </div>
                        <a target="_blank" rel="noreferrer noopener" class="whitewind-link" href={"https://whtwnd.com/cyberlizer.net/" + params.rkey}>View entry on WhiteWind</a>
                    </>
                : <p>ERROR: couldn't fetch this page :(</p>}
                </div>
            </div>
        </>
    );
}

export default JournalEntry;