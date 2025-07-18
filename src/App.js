import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Journal from './pages/Journal';
import JournalEntry from './pages/JournalEntry';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  // fetch array of journal entries to use throughout site
  const [entries, setEntries] = useState(null);
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
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home entries={entries} />} />
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
