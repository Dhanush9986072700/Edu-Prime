import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/components/Hero5.scss';
import heroBg from '../../images/bg/turist-visa.webp';
import SocialIcons from '../SocialIcons/SocialIcons';


const TouristVisaHero = () => {
  return (
    <section
      className="hero5"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero5__overlay"></div>
      <div className="hero5__content">
        <h1>
        Explore the World Hassle-Free with Our <br />
          <span>Tourist Visa</span> Services
        </h1>
        <p>
        Fast, Reliable, and Expert Visa Assistance for Your Next
        Adventure — Let Us Handle the Paperwork While You Focus on the Journey.
        </p>
        <div className="btns">
                    <Link className="thm-btn thm-btn--white buttongetfree" to="/#">Get Free Consultation</Link>
                </div>
        
      </div>
      <SocialIcons /> 
    </section>
  );
};

export default TouristVisaHero;

