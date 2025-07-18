import { useNavigate } from "react-router-dom";
import JournalLink from "../components/JournalLink";
import { useEffect, useState } from "react";
import JournalEntry from "./JournalEntry";

function Journal() {
    const [entries, setEntries] = useState(null);
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

    useEffect(() => {
        const fetchEntry = async () => {
            try {
                const repoDid = "did:plc:psca2btmhyqh5cpnjs4rszpa";
                const collection = "com.whtwnd.blog.entry";
                const url = `https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=${repoDid}&collection=${collection}`;
                const res = await fetch(url);
                const data = await res.json();
                setEntries(data.records);
            } catch (err) {
                console.error(err);
            }
        };

        fetchEntry();
    }, []);

    return (
        <>
            <button class="home-button" onClick={() => {navigate("/")}}>Return home</button>
            <div class="grid">
                <div id="journal-page-section" class="box-section">
                    <h1>Journal</h1>
                    <div id="journal-link-container">
                        {!entries ? <h2>Loading...</h2> : entries.map(entry => (
                            <JournalLink key={entry.cid} rkey={entry.uri.split("/")[4]} entry={entry}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Journal;