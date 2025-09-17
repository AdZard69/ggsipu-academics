import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BOS from './pages/BOS';
import Programmes from './pages/Programmes';
import SchemeSyllabus from './pages/SchemeSyllabus';
import Laboratories from './pages/Laboratories';
import AcademicCalendar from './pages/AcademicCalendar';
import Research from './pages/Research';
import GrantsSchemes from './pages/GrantsSchemes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bos" element={<BOS />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/scheme-syllabus" element={<SchemeSyllabus />} />
          <Route path="/laboratories" element={<Laboratories />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/research" element={<Research />} />
          <Route path="/grants-schemes" element={<GrantsSchemes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;