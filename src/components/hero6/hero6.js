import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/components/Hero5.scss';
import heroBg from '../../images/bg/jobseaker-visa.png'; // replace with your correct path
import SocialIcons from '../SocialIcons/SocialIcons';


const Hero6 = () => {
  return (
    <section className="hero5" style={{ backgroundImage: `url(${heroBg})` }} >
      <div className="hero5__overlay"></div>
      <div className="hero5__content">
        <h1>
          Your Global Career Starts Here  Apply for a  <br />
          <span>Job Seeker Visa</span> Today
        </h1>
        <p>
          Unlock international job opportunities with our expert visa guidance.
          We make your dream of working abroad a reality — from application to arrival.
        </p>
        <div className="btns">
          <Link className="thm-btn thm-btn--white" to="/#">Get Free Consultation</Link>
        </div>
      </div>
            <SocialIcons /> 

    </section>
  );
};

export default Hero6;
