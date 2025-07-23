import React, { useEffect, useState } from 'react';
import '../../sass/components/Hero5.scss';
import heroBg from '../../images/bg/investment-banner-3.png';
import SocialIcons from '../SocialIcons/SocialIcons';

const Hero5 = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    // Small delay to trigger transition after mount
    const timer = setTimeout(() => setShowIcons(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero5" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero5__overlay"></div>
      <div className="hero5__content">
        <h1>
          Global Leader in Fast <br />
          <span>Citizenship and Residency</span> Programs
        </h1>
        <p>
          We provide fast, tailored solutions for Citizenship and Residency with
          seeking enhanced mobility and global opportunities and seamless results.
        </p>
        <a href="#contact" className="thm-btn thm">
          Get a Free Consultation
        </a>
      </div>

      <SocialIcons /> 
    </section>
  );
};

export default Hero5;
