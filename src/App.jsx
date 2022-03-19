import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import VideoDetail from './pages/VideoDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/vid:id" element={<VideoDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;

// Array(10).fill('')
