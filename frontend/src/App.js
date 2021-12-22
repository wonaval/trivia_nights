import './App.css';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Account from './pages/Account';
import Topics from './pages/Topics';
import Confirmation from './pages/Confirmation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/topics" element={ <Topics /> } />
        <Route path="/account" element={ <Account /> } />
        <Route path="/account/Confirmation" element={ <Confirmation /> } />
      </Routes>
    </div>
  );
}

export default App;
