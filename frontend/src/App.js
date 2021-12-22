
import './App.css';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Landing />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
