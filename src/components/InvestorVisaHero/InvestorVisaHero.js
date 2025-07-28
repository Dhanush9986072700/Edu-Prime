import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/components/Hero5.scss';
import heroBg from '../../images/bg/investment-banner-3.webp';
import SocialIcons from '../SocialIcons/SocialIcons';

const InvestorVisaHero = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIcons(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="hero5"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-label="Investor Visa Banner Section"
    >
      <div className="hero5__overlay"></div>

      {/* ✅ Hidden image for SEO crawlers */}
      <div style={{ display: 'none' }}>
        <img
          src={heroBg}
          alt="Investment Immigration Banner - Citizenship and Residency Programs"
        />
      </div>

      <div className="hero5__content">
        <h1>
          Global Leader in Fast <br />
          <span>Citizenship and Residency</span> Programs
        </h1>
        <p>
          We deliver customized, fast-track solutions for citizenship and
          residency — empowering you with greater mobility, global access,
          and guaranteed compliance.
        </p>

        {/* ✅ Replaced <a href="#contact"> with proper SPA routing */}
        <Link
          to="/contact"
          className="thm-btn thm"
          aria-label="Start your consultation for citizenship or residency"
        >
          Get a Free Consultation
        </Link>
      </div>

      {showIcons && <SocialIcons />}
    </section>
  );
};

export default InvestorVisaHero;
