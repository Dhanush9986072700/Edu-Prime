import React, { useState } from "react";
import {
  FaGraduationCap,
  FaSuitcase,
  FaMoneyBillAlt,
  FaLanguage,
  FaRegIdCard,
  FaGlobe,
  FaUserPlus,
  FaSearchLocation,
  FaHandsHelping,
  FaPlaneDeparture,
  FaSearch,
} from "react-icons/fa";

import "../../sass/components/JobSeekerVisaInfo.scss";
import { jobSeekerCountries } from "../../api/JobseakerData";

const JobSeekerVisaInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredCountries = jobSeekerCountries.filter((country) =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const countriesToShow = searchTerm
    ? filteredCountries
    : showAll
    ? jobSeekerCountries
    : jobSeekerCountries.slice(0, 12);

  const eligibility = [
    {
      icon: <FaGraduationCap />,
      title: "Relevant Degree",
      text: "Bachelor’s or Master’s from a recognized university, preferably in STEM, IT, or healthcare.",
    },
    {
      icon: <FaSuitcase />,
      title: "Work Experience",
      text: "Minimum 2–5 years of relevant professional experience in your field.",
    },
    {
      icon: <FaMoneyBillAlt />,
      title: "Financial Means",
      text: "Proof of sufficient funds to support yourself during job search abroad.",
    },
    {
      icon: <FaLanguage />,
      title: "Language Skills",
      text: "Basic proficiency in English or the local language (e.g., German).",
    },
    {
      icon: <FaRegIdCard />,
      title: "Age Requirement",
      text: "Applicants typically should be between 18 and 45 years old.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Readiness",
      text: "Willingness to relocate, adapt to a new environment, and attend interviews locally.",
    },
  ];

  const stepsData = [
    {
      icon: <FaUserPlus />,
      title: "Submit Your Profile",
      description:
        "Send us your basic details and documents to start your job seeker journey.",
    },
    {
      icon: <FaSearchLocation />,
      title: "Country Match & Review",
      description:
        "Our visa experts will evaluate your profile and suggest the best country options.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Job Search & Support",
      description:
        "Get help with resume building, job search strategy, and expert guidance.",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Visa Filing & Relocation",
      description:
        "We assist with documentation, visa application, and relocation planning.",
    },
  ];

  return (
    <section className="visa-info" aria-label="Job Seeker Visa Information">
      {/* COUNTRY LIST */}
      <div className="visa-info__section visa-info__countries">
        <header className="visa-info__header">
          <h2 className="visa-info__title">
            Top Countries Offering Job Seeker Visas
          </h2>

          <div className="visa-info__search-wrapper">
            <FaSearch className="visa-info__search-icon" />
            <input
              type="text"
              placeholder="Search country..."
              className="visa-info__search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search countries by name"
            />
          </div>
        </header>

        <div className="visa-info__country-grid">
          {countriesToShow.length > 0 ? (
            countriesToShow.map((country, index) => (
              <article
                className="visa-info__country-item"
                key={index}
                aria-label={`${country.country} job seeker visa info`}
              >
                <img
                  loading="lazy"
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={`${country.country} Flag`}
                  className="visa-info__country-flag"
                />
                <h3 className="visa-info__country-name">{country.country}</h3>
                <p className="visa-info__country-description">
                  {country.description}
                </p>
              </article>
            ))
          ) : (
            <p className="visa-info__no-results" role="alert">
              No matching country found.
            </p>
          )}
        </div>

        {!searchTerm && jobSeekerCountries.length > 12 && (
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button
              className="visa-info__cta-button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-label="Toggle show all countries"
            >
              {showAll ? "Show Less" : "View All Countries"}
            </button>
          </div>
        )}
      </div>

      {/* ELIGIBILITY SECTION */}
      <div className="visa-info__section visa-info__eligibility">
        <h2 className="visa-info__title">Who Can Apply?</h2>
        <div className="visa-info__eligibility-grid">
          {eligibility.map((item, index) => (
            <div
              className="visa-info__eligibility-item"
              key={index}
              aria-label={item.title}
            >
              <div className="visa-info__eligibility-icon">{item.icon}</div>
              <h3 className="visa-info__eligibility-title">{item.title}</h3>
              <p className="visa-info__eligibility-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STEPS SECTION */}
      <div className="visa-info__section steps-section">
        <h2 className="visa-info__title">Steps to Get Started</h2>
        <div className="steps-grid">
          {stepsData.map((step, index) => (
            <div className="step-card" key={index} aria-label={step.title}>
              <div className="icon-wrapper">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobSeekerVisaInfo;
