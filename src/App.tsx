import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Episodes from './pages/Episodes';
import About from './pages/About';
import "./App.css";
import Blog from './pages/Blog';
import PodcastDetale from './pages/PodcastDetale';
import NotFoundPage from './pages/NotFoundPage';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/podcast-detail" element={<PodcastDetale />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;