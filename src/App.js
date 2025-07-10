import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
