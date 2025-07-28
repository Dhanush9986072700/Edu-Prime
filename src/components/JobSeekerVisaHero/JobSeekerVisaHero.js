import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/components/Hero5.scss';
import heroBg from '../../images/bg/jobseaker-visa.webp';
import SocialIcons from '../SocialIcons/SocialIcons';

const JobSeekerVisaHero = () => {
  return (
    <section
      className="hero5"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-label="Job Seeker Visa Banner Section"
    >
      <div className="hero5__overlay"></div>

      {/* ✅ Hidden image for SEO crawlers */}
      <div style={{ display: 'none' }}>
        <img
          src={heroBg}
          alt="Job Seeker Visa Banner - Global Career Opportunities"
        />
      </div>

      <div className="hero5__content">
        <h1>
          Your Global Career Starts Here — <br />
          <span>Apply for a Job Seeker Visa</span> Today
        </h1>
        <p>
          Unlock international job opportunities with expert visa guidance.
          We make your dream of working abroad a reality — from application to arrival.
        </p>

        {/* ✅ SPA-friendly routing */}
        <Link
          className="thm-btn thm-btn--white"
          to="/contact"
          aria-label="Start your Job Seeker Visa consultation"
        >
          Get Free Consultation
        </Link>
      </div>

      <SocialIcons />
    </section>
  );
};

export default JobSeekerVisaHero;
