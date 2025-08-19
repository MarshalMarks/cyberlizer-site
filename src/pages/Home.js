import { useNavigate } from "react-router-dom";
import MiniJournalLink from "../components/MiniJournalLink";
import MiniBookLink from "../components/MiniBookLink";

function Home({ entries, books }) {
    const navigate = useNavigate();

    return (
        <>
            <div id="home-grid">
                <div id="image-section" class="box-section">
                    <img src="https://cdn.bsky.app/img/avatar/plain/did:plc:psca2btmhyqh5cpnjs4rszpa/bafkreiaglwtblswey2bvld4gtipflv6hm5oe5voyal4cqxfjjnzrjytsmy@jpeg" alt="Red wedge piercing an outline of Texas" id="pfp" />
                </div>
                <div id="about-section" class="box-section">
                    <h2>About Me</h2>
                    <div id="about-text-container">
                        <p>Hi! My name is <b>Clay</b>.</p>
                        <p>I'm a 22-year-old programmer from Texas trying to orient myself in a mercurial world.</p>
                        <p>I love electronic music (Aphex Twin, Porter Robinson, underscores, Iglooghost) and automation/puzzle games (Minecraft Create, Oxygen Not Included, Factorio, Zachtronics games, Portal).</p>
                    </div>
                </div>
                <div id="links-section" class="box-section">
                    <h2>Links</h2>
                    <a href="https://bsky.app/profile/cyberlizer.net?utm_source=cyberlizer.net" target="_blank" rel="noreferrer noopener">Bluesky</a>
                    <a href="https://github.com/MarshalMarks?utm_source=cyberlizer.net" target="_blank" rel="noreferrer noopener">GitHub</a>
                    <a href="mailto:marshmarks@gmail.com">Email</a>
                    <a href="https://talk.opn.haus/memberlist.php?mode=viewprofile&u=64&utm_source=cyberlizer.net" target="_blank" rel="noreferrer noopener">Open House*</a>
                    <h2 id="friends-header">Cool people</h2>
                    <a href="https://geminiworkshops.neocities.org/?utm_source=cyberlizer.net" target="_blank" rel="noreferrer noopener">Milo</a>
                    <a href="https://mmatt.net/?utm_source=cyberlizer.net" target="_blank" rel="noreferrer noopener">Matt</a>
                    <a href="https://www.aprils.garden/?utm_source=cyberlizer.net" target="_blank" rel="noreferrer noopener">April</a>
                    <a href="https://opn.haus/gb?utm_source=cyberlizer.net" target="_blank" rel="noreferrer noopener">Wyhatt</a>
                </div>
                <div id="journal-section" class="box-section">
                    <h2>Journal</h2>
                    <div id="mini-journal-container">
                        {!entries ? <h2>Loading...</h2> : entries.map(entry => (
                            <MiniJournalLink key={entry.cid} rkey={entry.uri.split("/")[4]} entry={entry}/>
                        ))}
                    </div>
                    <button onClick={() => { navigate("/journal") }}>See all entries</button>
                </div>
                <div id="projects-section" class="box-section">
                    <h2>Recently Read</h2>
                    <div id="mini-journal-container">
                        {!books ? <h2>Loading...</h2> : books.filter(book => book.value.status === "buzz.bookhive.defs#finished").map(book => (
                            <MiniBookLink key={book.value.hiveId} book={book}/>
                        ))}
                    </div>
                    <a href="https://bookhive.buzz/profile/cyberlizer.net" class="link-button-wrapper" target="_blank" rel="noopener noreferrer"><button>See reading list</button></a>
                </div>
            </div>
        </>
    );
}

export default Home;