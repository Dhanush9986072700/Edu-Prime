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
      {/* Desktop Social Icons */}
      <div
        className={`social-icons ${showIcons ? 'visible' : ''}`}
        role="navigation"
        aria-label="Social Media Links"
      >
        <a
          href="https://wa.me/yourNumber"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </div>

      {/* Mobile Consultation Bar */}
      <div
        className="mobile-consult-bar"
        role="complementary"
        aria-label="Mobile Consultation Call-to-Action"
      >
        <a
          className="consult-btn"
          href="#consult-form"
          aria-label="Get Free Consultation"
        >
          Get Free Consultation
        </a>
        <a
          className="whatsapp-icon"
          href="https://wa.me/yourNumber"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat"
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
};

export default SocialIcons;
