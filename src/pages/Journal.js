import JournalLink from "../components/JournalLink";
import BackButton from "../components/BackButton";

function Journal({ entries }) {
    return (
        <>
            <BackButton />
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