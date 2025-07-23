import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Header3 from '../../../components/header3/Header3';
import Hero6 from '../../../components/hero6/hero6';
import Scrollbar from '../../../components/scrollbar/scrollbar'
import Footer from '../../../components/footer/Footer';
import ContactSection from '../../../components/ContactSection';
import Investment from '../../../components/student-visa-components/StudentFaqSection/Investment.js';
import JobSeekerVisaInfo from '../../../components/JobSeekerVisaInfo/JobSeekerVisaInfo.js';

const JobseakerVisa = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Header3 />
            <Hero6 />
            <JobSeekerVisaInfo />
            <Investment />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default JobseakerVisa;
