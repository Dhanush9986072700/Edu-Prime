import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/components/Hero5.scss';
import heroBg from '../../images/bg/student-visa-banner.png'; // update path if needed
import SocialIcons from '../SocialIcons/SocialIcons';

const Studyvisahero = () => {
    return (
        <section className="hero5" style={{ backgroundImage: `url(${heroBg})` }} >
            <div className="hero5__overlay"></div>
            <div className="hero5__content">
                <h1>
                    Planning to study abroad?<br />
                    <span>Get Your Study Visa</span> with Expert Guidance
                </h1>
                <p>
                    From choosing the right country to securing your student visa —<br />
                    we guide you every step of the way for a hassle-free admission journey.
                </p>
                <div className="btns">
                    <Link className="thm-btn" to="/#">Read Story</Link>
                </div>

            </div>
            <SocialIcons />
        </section>
    );
};

export default Studyvisahero;
