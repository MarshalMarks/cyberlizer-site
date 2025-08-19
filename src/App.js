import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Journal from './pages/Journal';
import JournalEntry from './pages/JournalEntry';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  // fetch array of journal entries and books to use throughout site
  const [entries, setEntries] = useState(null);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const repoDid = "did:plc:psca2btmhyqh5cpnjs4rszpa";
        const collection = "com.whtwnd.blog.entry";
        const url = `https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=${repoDid}&collection=${collection}&limit=100`;
        const res = await fetch(url);
        const data = await res.json();
        setEntries(data.records);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchBooks = async () => {
      try {
        const repoDid = "did:plc:psca2btmhyqh5cpnjs4rszpa";
        const collection = "buzz.bookhive.book";
        const url = `https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=${repoDid}&collection=${collection}&limit=100`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.records);
        setBooks(data.records);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEntries();
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home entries={entries} books={books} />} />
          <Route path="/journal" element={<Journal entries={entries} />} />
          <Route path="/journal/:rkey" element={<JournalEntry entries={entries} rkey />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
