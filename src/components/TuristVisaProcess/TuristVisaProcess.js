import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPassport,
  faFileAlt,
  faUserCheck,
  faPlaneDeparture,
  faEnvelopeOpenText,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import '../../sass/components/TuristVisaProcess.scss';

const steps = [
  {
    title: "Choose Your Destination",
    description: "Select your desired tourist destination based on your preferences and travel requirements.",
    icon: faMapMarkedAlt,
  },
  {
    title: "Submit Application",
    description: "Fill and submit your tourist visa application with accurate information and supporting documents.",
    icon: faFileAlt,
  },
  {
    title: "Verify Documents",
    description: "Our experts will verify your submitted documents to ensure embassy compliance.",
    icon: faUserCheck,
  },
  {
    title: "Pay Visa Fees",
    description: "Complete your visa fee payment securely via our official payment gateway.",
    icon: faEnvelopeOpenText,
  },
  {
    title: "Receive Confirmation",
    description: "Get application status updates and final visa approval notification via email or SMS.",
    icon: faPassport,
  },
  {
    title: "Fly to Destination",
    description: "Get your bags ready and board your flight to the selected tourist location.",
    icon: faPlaneDeparture,
  },
];

const TuristVisaProcess = () => {
  return (
    <section className="container  visa-process-container">
      <h2 className="section-title">Tourist Visa Process Steps</h2>
      <div className="visa-process-grid">
        {steps.map((step, index) => (
          <div className="visa-step-card" key={index}>
            <div className="step-number">Step {index + 1}</div>
            <div className="step-icon">
              <FontAwesomeIcon icon={step.icon} />
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TuristVisaProcess;
