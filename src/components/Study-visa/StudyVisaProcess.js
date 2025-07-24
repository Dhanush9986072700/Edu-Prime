import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faPassport,
  faMoneyBillWave,
  faFileSignature,
  faFolderOpen,
  faShieldHeart,
  faLanguage,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

const studyVisaSteps = [
  {
    title: "Career Counseling",
    description: "Personalized advice to align your academic goals with the right study destinations.",
    icon: faComments,
    slug: "career-counseling"
  },
  {
    title: "Visa Guidance",
    description: "Expert assistance with student visa rules, requirements, and timelines.",
    icon: faPassport,
    slug: "visa-guidance"
  },
  {
    title: "Financial Planning",
    description: "Support with planning finances and documentation required for visa approval.",
    icon: faMoneyBillWave,
    slug: "financial-planning"
  },
  {
    title: "Application Assistance",
    description: "End-to-end support in preparing your university and visa applications.",
    icon: faFileSignature,
    slug: "application-assistance"
  },
  {
    title: "Document Preparation",
    description: "Helping you compile and organize all required academic and personal documents.",
    icon: faFolderOpen,
    slug: "document-preparation"
  },
  {
    title: "Health Insurance Guidance",
    description: "Advice on selecting proper insurance based on your destination country’s norms.",
    icon: faShieldHeart,
    slug: "health-insurance"
  },
  {
    title: "Language Proficiency Tests",
    description: "Coaching and practice support for IELTS, TOEFL, and other required tests.",
    icon: faLanguage,
    slug: "language-tests"
  },
  {
    title: "Visa Submission and Tracking",
    description: "Submission, embassy appointments, and updates until final visa approval.",
    icon: faPaperPlane,
    slug: "visa-submission"
  }
];

const StudyVisaProcess = () => {
  return (
    <section
      className="service service-bottom-pb pos-rel white pt-90"
      aria-labelledby="study-visa-process-heading"
    >
      <div className="container">
        <div className="sec-title sec-title--black style-2 mb-20">
          <span className="sec-title--sub">Study Visa Process</span>
          <h2 id="study-visa-process-heading" className="section-sub-headline">
            Study Visa Process – Step-by-Step Guidance
          </h2>
        </div>

        <div className="xb-service2__wrap ul_li pt-30">
          {studyVisaSteps.map((step, index) => (
            <article
              className="xb-service2"
              key={index}
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              <div className="xb-item--inner">
                <div className="xb-item--icon" aria-hidden="true">
                  <FontAwesomeIcon icon={step.icon} size="2x" />
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title" itemProp="name">
                    {step.title}
                  </h3>
                  <p className="xb-item--content" itemProp="text">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyVisaProcess;
