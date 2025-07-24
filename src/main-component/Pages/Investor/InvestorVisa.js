import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Header3 from '../../../components/header3/Header3';
import InvestorVisaHero from '../../../components/InvestorVisaHero/InvestorVisaHero.js';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import Footer from '../../../components/footer/Footer';
import ContactSection from '../../../components/ContactSection';
import InvestmentBenefit from '../../../components/InvestmentBenefit/InvestmentBenefit';
import PopularCountries from '../../../components/PopularCountries/PopularCountries';
import ProcessTimeline from '../../../components/ProcessTimeline/ProcessTimeline';
import Investment from '../../../components/student-visa-components/StudentFaqSection/Investment.js';

const InvestorVisa = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            {/* ✅ SEO Meta Tags for Investor Visa */}
            <Helmet>
                <title>Investor Visa | Residency by Investment Programs - Edu Prime</title>
                <meta name="description" content="Secure permanent residency or citizenship by investment in top countries. Edu Prime offers expert investor visa guidance tailored to your goals." />
                <meta name="keywords" content="Investor Visa, Residency by Investment, Citizenship by Investment, Business Visa, EB-5, Golden Visa, Edu Prime Immigration" />
                <link rel="canonical" href="https://www.eduprime.com/investor-visa" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Investor Visa - Residency & Citizenship by Investment" />
                <meta property="og:description" content="Explore investor visa programs with expert guidance. Invest in global opportunities and gain permanent residency." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eduprime.com/investor-visa" />
                <meta property="og:image" content="https://www.eduprime.com/images/social-share-image.png" />

                {/* Twitter SEO */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Investor Visa - Residency & Citizenship by Investment" />
                <meta name="twitter:description" content="Explore investor visa programs with expert guidance. Invest in global opportunities and gain permanent residency." />
                <meta name="twitter:image" content="https://www.eduprime.com/images/social-share-image.png" />
            </Helmet>

            <Header3 />
            <InvestorVisaHero />
            <InvestmentBenefit />
            <PopularCountries />
            <ProcessTimeline />
            <Investment />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default InvestorVisa;
