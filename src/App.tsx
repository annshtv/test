
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Episodes from './pages/Episodes';
import About from './pages/About';
import Blog from './pages/Blog';
import PodcastDetale from './pages/PodcastDetale';
import NotFoundPage from './pages/NotFoundPage';
import AccountPage from './pages/AccountPage';
import LoginForm from './UI/LoginForm';
import Register from './UI/RegistrationForm';
import { AuthProvider, useAuth } from './context/AuthContext';
import "./App.css";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/podcast/:id" element={<PodcastDetale />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/account" 
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;