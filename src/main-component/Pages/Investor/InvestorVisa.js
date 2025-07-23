import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Header3 from '../../../components/header3/Header3';
import Hero5 from '../../../components/hero5/hero5';
import Scrollbar from '../../../components/scrollbar/scrollbar'
import Footer from '../../../components/footer/Footer';
import ContactSection from '../../../components/ContactSection';
import InvestmentBenefit from '../../../components/InvestmentBenefit/InvestmentBenefit';
import PopularCountries from '../../../components/PopularCountries/PopularCountries';
import ProcessTimeline from '../../../components/ProcessTimeline/ProcessTimeline';
import Investment from '../../../components/student-visa-components/StudentFaqSection/Investment.js';



const InvestorVisa = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Header3 />
            <Hero5 />
            <InvestmentBenefit />
            <PopularCountries />
            <ProcessTimeline />
            <Investment />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default InvestorVisa;
