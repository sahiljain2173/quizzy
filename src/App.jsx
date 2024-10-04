import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
