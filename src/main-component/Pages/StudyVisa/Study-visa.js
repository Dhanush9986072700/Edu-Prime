import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
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
import StudentFunFact from '../../../components/student-visa-components/StudentFunFact/StudentFunFact';
import StudyVisaProcess from '../../../components/Study-visa/StudyVisaProcess';

const StudyVisa = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            {/* ✅ SEO Meta Tags for Study Visa Page */}
            <Helmet>
                <title>Study Visa | Study Abroad with Expert Guidance - Edu Prime</title>
                <meta name="description" content="Get complete support for your Study Visa applications. Edu Prime helps students apply to top universities in UK, USA, Canada, Australia, and more." />
                <meta name="keywords" content="Study Visa, Study Abroad, Student Visa, University Admission, UK Study Visa, Canada Student Visa, Edu Prime Immigration" />
                <link rel="canonical" href="https://www.eduprime.com/study-visa" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Study Abroad with Edu Prime - Secure Your Study Visa" />
                <meta property="og:description" content="Apply for a study visa with full support from university selection to visa approval. Explore programs in UK, USA, Europe & more." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eduprime.com/study-visa" />
                <meta property="og:image" content="https://www.eduprime.com/images/social-share-image.png" />

                {/* Twitter SEO */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Study Abroad with Edu Prime - Secure Your Study Visa" />
                <meta name="twitter:description" content="Apply for a study visa with full support from university selection to visa approval. Explore programs in UK, USA, Europe & more." />
                <meta name="twitter:image" content="https://www.eduprime.com/images/social-share-image.png" />
            </Helmet>

            <Header3 />
            <Studyvisahero />
            <PopularPakage />
            <Studentvisauniversity />
            <StudyVisaProcess />
            <CtaSection />
            <StudentFunFact />
            <StudentFaqSection />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default StudyVisa;
