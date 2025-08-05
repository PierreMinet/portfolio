import './App.css';
import Header from './components/Header.js';
import HomePage from './components/HomePage.js';
import Footer from './components/Footer.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
