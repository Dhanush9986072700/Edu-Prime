import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Header3 from '../../../components/header3/Header3';
import JobSeekerVisaHero from '../../../components/JobSeekerVisaHero/JobSeekerVisaHero.js';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import Footer from '../../../components/footer/Footer';
import ContactSection from '../../../components/ContactSection';
import Investment from '../../../components/student-visa-components/StudentFaqSection/Investment.js';
import JobSeekerVisaInfo from '../../../components/JobSeekerVisaInfo/JobSeekerVisaInfo.js';

const JobseakerVisa = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            {/* ✅ SEO Meta Tags for Job Seeker Visa */}
            <Helmet>
                <title>Job Seeker Visa | Work & Settle Abroad Without Job Offer - Edu Prime</title>
                <meta name="description" content="Apply for job seeker visas to Germany, Austria, and Portugal. Move abroad without a job offer and explore global career opportunities with Edu Prime." />
                <meta name="keywords" content="Job Seeker Visa, Work Abroad, Germany Job Seeker Visa, Austria Red White Red Card, Portugal Work Visa, Edu Prime Immigration" />
                <link rel="canonical" href="https://www.eduprime.com/jobseeker-visa" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Job Seeker Visa - Move Abroad Without Job Offer" />
                <meta property="og:description" content="Explore visa programs that let you move abroad and search for jobs legally. Edu Prime guides you to settle in Europe or Canada with job seeker visas." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eduprime.com/jobseeker-visa" />
                <meta property="og:image" content="https://www.eduprime.com/images/social-share-image.png" />

                {/* Twitter SEO */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Job Seeker Visa - Move Abroad Without Job Offer" />
                <meta name="twitter:description" content="Explore visa programs that let you move abroad and search for jobs legally. Edu Prime guides you to settle in Europe or Canada with job seeker visas." />
                <meta name="twitter:image" content="https://www.eduprime.com/images/social-share-image.png" />
            </Helmet>

            <Header3 />
            <JobSeekerVisaHero />
            <JobSeekerVisaInfo />
            <Investment />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default JobseakerVisa;
