import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaLink } from 'react-icons/fa';
import '../css/RadialSocialMenu.css'; // Adjust the path as necessary
import { FaXTwitter } from 'react-icons/fa6';

const RadialSocialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`radial-menu ${isOpen ? 'open' : ''}`}>
      <button className="main-button" onClick={toggleMenu} title="Contact Us">
        <FaLink />
      </button>

      <div className="item item1">
        <a href="https://facebook.com/ucbethuel" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
      </div>
      <div className="item item2">
        <a href="https://x.com/ucbethuel" target="_blank" rel="noreferrer">
          <FaXTwitter />
        </a>
      </div>
      <div className="item item3">
        <a href="https://instagram.com/ucbethuel" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="item item4">
        <a href="https://wa.me/2348148368548" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default RadialSocialMenu;

