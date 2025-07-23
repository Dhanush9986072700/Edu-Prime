import React, { useEffect, useState } from 'react';
import '../../sass/components/Hero5.scss';

const SocialIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIcons(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
<div className={`social-icons ${showIcons ? 'visible' : ''}`}>
    <a href="https://wa.me/yourNumber" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp"></i>
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
  </div>

 <div className="mobile-consult-bar">
  <a className="consult-btn" href="#consult-form">Get Free Consultation</a>
  <a
    className="whatsapp-icon"
    href="https://wa.me/yourNumber"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-whatsapp"></i>
  </a>
</div>

    </>
  );
};

export default SocialIcons;
