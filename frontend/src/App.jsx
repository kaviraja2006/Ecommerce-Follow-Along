import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Createproudct from './components/Createproudct';
import Signup from './components/signup';

function App() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login x={handleSignupClick} />} />
          <Route path="/create" element={<Createproudct />} />
          <Route path="/signup" element={<Signup x={handleLoginClick} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;