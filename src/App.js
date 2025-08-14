import './App.css';
import Header from './components/Header.js';
import HomePage from './components/HomePage.js';
import Footer from './components/Footer.js';
import ProjectPage from './components/ProjectsPage.js';
import DesignsPage from './components/DesignsPage.js';
import Contact from './components/Contact.js';
import MenuContext from './context/MenuContext.js';
import GalleryContext from './context/GalleryContext.js';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState("artworks");

  return (
    <MenuContext.Provider value={{menuVisible, setMenuVisible}}>
      <GalleryContext.Provider value={{galleryVisible, setGalleryVisible}}>
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
      </GalleryContext.Provider>
    </MenuContext.Provider>
  );
}

export default App;
