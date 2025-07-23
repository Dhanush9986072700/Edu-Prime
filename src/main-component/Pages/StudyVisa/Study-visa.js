import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Header3 from '../../../components/header3/Header3';
import Studyvisahero from '../../../components/Study-visa/studyvisahero';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import Footer from '../../../components/footer/Footer';
import ContactSection from '../../../components/ContactSection';
import Studentvisauniversity from '../../../components/student-visa-components/TopInstitutions/uk-universitylist';
import PopularPakage from '../../../components/Study-visa/StudyVisaCountries';
import CtaSection from '../../../components/student-visa-components/CtaSection/CtaSection';
import StudentFaqSection from '../../../components/student-visa-components/StudentFaqSection/StudentFaqSection';
import StudentTestimonial from '../../../components/student-visa-components/StudentTestimonial/StudentTestimonial';
import StudentFunFact from '../../../components/student-visa-components/StudentFunFact/StudentFunFact';
import StudyVisaProcess from '../../../components/Study-visa/StudyVisaProcess';



const StudyVisa = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            <Header3 />
            <Studyvisahero />
            <PopularPakage />
            <Studentvisauniversity />
            <StudyVisaProcess />
            <CtaSection />
            <StudentFunFact />
            <StudentFaqSection />
            <StudentTestimonial />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default StudyVisa;
