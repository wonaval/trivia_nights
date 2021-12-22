
import './App.css';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Topics from './pages/Topics';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/topics" element={ <Topics /> } />
      </Routes>
    </div>
  );
}

export default App;
