import React from "react";
import {
  FaGlobe, FaUserCheck, FaFileAlt, FaCalendarCheck,
  FaComments, FaClock, FaStar, FaMapMarkedAlt
} from "react-icons/fa";

const CategoryData = [
  { title: "What is a Tourist Visa?", icon: <FaGlobe />, color: "#1E90FF", description: "Allows travelers to visit another country for leisure, tourism, or family visits for a limited duration." },
  { title: "Who Can Apply?", icon: <FaUserCheck />, color: "#28C76F", description: "Anyone with a valid passport and proof of travel intent. We assist applicants across all ages." },
  { title: "Tourist Visa Requirements", icon: <FaFileAlt />, color: "#F39C12", description: "Passport, itinerary, photos, funds proof, stay details, and completed visa forms are commonly required." },
  { title: "Visa Validity Period", icon: <FaCalendarCheck />, color: "#9B59B6", description: "Tourist visas typically last 30 to 90 days. Duration varies by country and purpose." },
  { title: "Is Interview Required?", icon: <FaComments />, color: "#E74C3C", description: "Some countries conduct interviews to ensure purpose and document validity before visa approval." },
  { title: "Visa Processing Time", icon: <FaClock />, color: "#20C997", description: "Processing ranges between 7 to 30 working days. Faster options available for urgent plans." },
  { title: "Why Choose Edu Prime?", icon: <FaStar />, color: "#FFD700", description: "98% success rate, expert guidance, fast approvals, and support from start to finish." },
  { title: "Countries We Assist", icon: <FaMapMarkedAlt />, color: "#FF851B", description: "We assist for USA, UK, Canada, Europe, Australia, Dubai, Singapore, and more destinations." },
];

const CategorySection = () => {
  return (
    <section className="info-section  bg-white">
      <div className="container">
        <div className="info-header text-center">
          <p className="info-subtitle">Tourist Visa Guide</p>
          <h2 className="info-title">Everything You Need to Know</h2>
        </div>

        <div className="info-list">
          {CategoryData.map((item, index) => (
            <div className="info-item" key={index}>
              <div
                className="info-icon"
                style={{
                  backgroundColor: `${item.color}1A`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <div className="info-content">
                <h3 className="info-item-title">{item.title}</h3>
                <p className="info-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
