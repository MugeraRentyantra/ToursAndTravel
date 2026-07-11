import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Fleet from './pages/Fleet';
import Booking from './pages/Booking';
import './index.css';

function useToast() {
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
          <Route path="/booking" element={<Booking addToast={addToast} />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <Toast toasts={toasts} removeToast={removeToast} />
    </>
  );
}
