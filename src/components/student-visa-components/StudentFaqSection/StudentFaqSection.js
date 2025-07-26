import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import aIcon1 from '../../../images/icon/h_star.png';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

const StudentFaqSection = () => {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    setOpen(open === id ? undefined : id);
  };

  // JSON-LD structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a student visa and why do I need one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A student visa allows you to legally study in a foreign country. It proves that you’ve been accepted into a recognized educational institution and are eligible to stay for the duration of your course."
        }
      },
      {
        "@type": "Question",
        "name": "What is the consultation process like?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our consultation process is simple and personalized. We begin with an eligibility check, then guide you through university selection, documentation, and visa filing with full support."
        }
      },
      {
        "@type": "Question",
        "name": "How much do your services cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our service fees vary depending on the destination country and service level. We offer transparent pricing with no hidden charges and free initial consultation."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with your services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting started is easy. Contact us via our website or phone, and our expert counsellors will guide you through the entire student visa process."
        }
      },
      {
        "@type": "Question",
        "name": "What is your success rate with visa applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We maintain a high success rate due to our experienced staff, detailed documentation support, and personalized approach for each applicant."
        }
      }
    ]
  };

  return (
    <section className="faq pos-rel gray-bg-2 pt-120 pb-130">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container">
        <div className="row align-items-center mb-30">
          <div className="col-lg-6 col-md-7">
            <div className="sec-title style-2 mb-30">
              <span className="sec-title--sub">
                <img src={aIcon1} alt="star icon" />
                Popular
                <img src={aIcon1} alt="star icon" />
              </span>
              <h2 className="sec-title--heading">Student Visa FAQs</h2>
            </div>
          </div>
        </div>

        <div className="xb-faq xb-faq2">
          <Accordion open={open} toggle={toggle} className="accordion_box">
            <AccordionItem className="block">
              <AccordionHeader targetId="1" className="acc-btn">
                What is a student visa and why do I need one?
                <span className="arrow"></span>
              </AccordionHeader>
              <AccordionBody accordionId="1" className="acc_body">
                <div className="content">
                  <p>
                    A student visa allows you to legally study in a foreign country. It proves that you’ve been accepted into a recognized educational institution and are eligible to stay for the duration of your course.
                  </p>
                  <ul>
                    <li><i className="far fa-check"></i>Legally permits study abroad</li>
                    <li><i className="far fa-check"></i>Required for visa interviews & travel</li>
                    <li><i className="far fa-check"></i>Essential for long-term stays</li>
                  </ul>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem className="block">
              <AccordionHeader targetId="2" className="acc-btn">
                What is the consultation process like?
                <span className="arrow"></span>
              </AccordionHeader>
              <AccordionBody accordionId="2" className="acc_body">
                <div className="content">
                  <p>
                    Our consultation process is simple and personalized. We begin with an eligibility check, then guide you through university selection, documentation, and visa filing with full support.
                  </p>
                  <ul>
                    <li><i className="far fa-check"></i>Initial profile evaluation</li>
                    <li><i className="far fa-check"></i>Course & country guidance</li>
                    <li><i className="far fa-check"></i>Step-by-step documentation help</li>
                  </ul>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem className="block">
              <AccordionHeader targetId="3" className="acc-btn">
                How much do your services cost?
                <span className="arrow"></span>
              </AccordionHeader>
              <AccordionBody accordionId="3" className="acc_body">
                <div className="content">
                  <p>
                    Our service fees vary depending on the destination country and service level. We offer transparent pricing with no hidden charges and free initial consultation.
                  </p>
                  <ul>
                    <li><i className="far fa-check"></i>Affordable and flexible packages</li>
                    <li><i className="far fa-check"></i>No hidden processing fees</li>
                    <li><i className="far fa-check"></i>Free initial consultation</li>
                  </ul>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem className="block">
              <AccordionHeader targetId="4" className="acc-btn">
                How do I get started with your services?
                <span className="arrow"></span>
              </AccordionHeader>
              <AccordionBody accordionId="4" className="acc_body">
                <div className="content">
                  <p>
                    Getting started is easy. Contact us via our website or phone, and our expert counsellors will guide you through the entire student visa process.
                  </p>
                  <ul>
                    <li><i className="far fa-check"></i>Book a free consultation</li>
                    <li><i className="far fa-check"></i>Submit basic documents</li>
                    <li><i className="far fa-check"></i>Start your university/visa journey</li>
                  </ul>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem className="block">
              <AccordionHeader targetId="5" className="acc-btn">
                What is your success rate with visa applications?
                <span className="arrow"></span>
              </AccordionHeader>
              <AccordionBody accordionId="5" className="acc_body">
                <div className="content">
                  <p>
                    We maintain a high success rate due to our experienced staff, detailed documentation support, and personalized approach for each applicant.
                  </p>
                  <ul>
                    <li><i className="far fa-check"></i>High approval rates across countries</li>
                    <li><i className="far fa-check"></i>Error-free documentation support</li>
                    <li><i className="far fa-check"></i>Experienced visa consultants</li>
                  </ul>
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default StudentFaqSection;
