import React from 'react';
import './Header.css';
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="name">Shara Avakian</h1>
      <div className="social-links">
        <a href="https://www.instagram.com/sharaavak/" target="_blank" aria-label="Instagram" className="social-link">
          <FaInstagram />
        </a>
        <a href="https://telegram.org" target="_blank" aria-label="Telegram" className="social-link">
          <FaTelegram />
        </a>
        <a href="https://whatsapp.com" target="_blank" aria-label="WhatsApp" className="social-link">
          <FaWhatsapp />
        </a>
      </div>
    </header>
  );
};

export default Header;