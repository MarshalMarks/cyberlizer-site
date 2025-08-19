import { Link } from "react-router-dom";

function MiniBookLink({ key, book }) {
    return (
        <>
            <Link to={`https://bookhive.buzz/books/${book.value.hiveId}`} target="_blank" rel="noopener noreferrer" class="mini-book-link">
                <h2>{book.value.title}</h2>
                <h4>{book.value.authors}</h4>
            </Link>
        </>
    );
}

export default MiniBookLink;