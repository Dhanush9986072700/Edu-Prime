import React from 'react';
import '../../sass/components/ProcessTimeline.scss';
import {
  FaCheckCircle,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaPaperPlane,
  FaPassport
} from 'react-icons/fa';

const timelineData = [
  {
    icon: <FaCheckCircle aria-hidden="true" />,
    title: 'Eligibility Check',
    description: 'Assess your profile to ensure you qualify for investment migration.'
  },
  {
    icon: <FaFileAlt aria-hidden="true" />,
    title: 'Document Preparation',
    description: 'Gather and prepare all necessary legal and financial documents.'
  },
  {
    icon: <FaMoneyCheckAlt aria-hidden="true" />,
    title: 'Investment Execution',
    description: 'Make the required investment in your chosen program.'
  },
  {
    icon: <FaPaperPlane aria-hidden="true" />,
    title: 'Visa Application Submission',
    description: 'Submit your visa application to the relevant authorities.'
  },
  {
    icon: <FaPassport aria-hidden="true" />,
    title: 'Residency Approval',
    description: 'Receive your residency permit and start your new journey.'
  }
];

const ProcessTimeline = () => {
  return (
    <section
      className="process-timeline"
      aria-labelledby="timeline-heading"
    >
      <div className="container">
        <h2 id="timeline-heading" className="process-timeline__title">
          Process Timeline / How It Works
        </h2>
        <div className="process-timeline__row">
          {timelineData.map((item, index) => (
            <React.Fragment key={index}>
              <article
                className="process-timeline__card"
                aria-label={`Step ${index + 1}: ${item.title}`}
              >
                <div className="process-timeline__icon-circle" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="process-timeline__heading">
                  {item.title}
                </h3>
                <p className="process-timeline__description">
                  {item.description}
                </p>
              </article>
              {index < timelineData.length - 1 && (
                <div
                  className="process-timeline__arrow"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#104B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
