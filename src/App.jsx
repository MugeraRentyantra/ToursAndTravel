import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Fleet from './pages/Fleet';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Driver from './pages/Driver';
import './index.css';

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
}

export default function App() {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--navbar-height)' }}>
        <Routes>
          <Route path="/" element={<Home addToast={addToast} />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact addToast={addToast} />} />
          <Route path="/booking" element={<Booking addToast={addToast} />} />
          <Route path="/driver" element={<Driver addToast={addToast} />} />
        </Routes>
      </main>
      <Footer />
      <Toast toasts={toasts} removeToast={removeToast} />
    </>
  );
}
