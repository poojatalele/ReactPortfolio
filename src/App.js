import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import EducationPage from './Pages/EducationPage/EducationPage';
import ExperiencePage from './Pages/ExperiencePage/ExperiencePage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/education' element={<EducationPage />} />
          <Route path='/experience' element={<ExperiencePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
