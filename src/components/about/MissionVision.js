import React from 'react';
import '../../sass/components/_missionvision.scss';

const MissionVision = () => {
  return (
    <section className="mission-section">
      <div className="container wrapper">

        {/* Mission */}
        <div className="mission-block">
          <div className="left-section">
            <div className="circle-icon teal">
              <i className="fas fa-bullseye" />
            </div>
            <h3>Our Mission</h3>
          </div>
          <div className="vertical-line" />
          <div className="right-section">
            <p>
              At Eduprime Overseas, our mission is to empower individuals to achieve their international dreams
              by offering transparent, personalized guidance for <strong>study visas</strong>, <strong>tourist visas</strong>,
              <strong> investor programs</strong>, and <strong>job seeker visas</strong>. We are committed to simplifying
              complex immigration procedures and delivering trusted support at every step.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="mission-block">
          <div className="left-section">
            <div className="circle-icon indigo">
              <i className="fas fa-eye" />
            </div>
            <h3>Our Vision</h3>
          </div>
          <div className="vertical-line" />
          <div className="right-section">
            <p>
              Our vision is to become the most trusted and recognized global consultancy for education and immigration services,
              enabling thousands of students, professionals, and investors to confidently explore
              new opportunities abroad in countries like the UK, Canada, USA, Europe, and the Gulf.
            </p>
          </div>
        </div>

        {/* Strategy */}
        <div className="mission-block">
          <div className="left-section">
            <div className="circle-icon yellow">
              <i className="fas fa-chess-board" />
            </div>
            <h3>Our Strategy</h3>
          </div>
          <div className="vertical-line" />
          <div className="right-section">
            <p>
              We focus on data-driven strategies, strong global partnerships, and expert legal and academic insights
              to deliver streamlined visa solutions. By staying aligned with evolving immigration policies and technology,
              we ensure faster processing, higher approval rates, and stress-free transitions for our clients.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
