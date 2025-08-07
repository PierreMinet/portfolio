import './App.css';
import Header from './components/Header.js';
import HomePage from './components/HomePage.js';
import Footer from './components/Footer.js';
import ProjectPage from './components/ProjectsPage.js';
import DesignsPage from './components/DesignsPage.js';
import Contact from './components/Contact.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/designs' element={<DesignsPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
