import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faCheckCircle, faShieldAlt, faStar, faThumbsUp, faClock } from "@fortawesome/free-solid-svg-icons";

const features = [
  { icon: faCertificate, label: "100% Genuine" },
  { icon: faCheckCircle, label: "100% Success Rate" },
  { icon: faShieldAlt, label: "Secure Process" },
  { icon: faStar, label: "Top Rated Service" },
  { icon: faThumbsUp, label: "Trusted Experts" },
  { icon: faClock, label: "Fast Processing" } // newly added item
];


const PartnerSection = () => {
  return (
    <section className="container partner-section">
      <h2 className="partner-title">Why People Trust Us</h2>
      <div className="partner-grid">
        {features.map((feature, index) => (
          <div className="partner-card" key={index}>
            <div className="partner-icon">
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <p className="partner-label">{feature.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerSection;
