import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import Header from './components/layouts/Header.jsx';
import Footer from './components/layouts/Footer.jsx';
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import './styles/app.scss';

function BodyClassManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const slug = pathname === '/' ? 'home' : pathname.replace(/\//g, '-').replace(/^-/, '');
    document.body.className = `page page--${slug}`;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <BodyClassManager/>

        <Header />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
