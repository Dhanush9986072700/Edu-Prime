import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async'; // ✅ Import Helmet

import Header3 from '../../components/header3/Header3';
import Homepagehero from '../../components/Homepagehero/Homepagehero';
import PartnerSection from '../../components/PartnerSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ImmigrationProcess from '../../components/about/ImmigrationProcess';
import FunFactSection from '../../components/FunFact/FunFact';
import FaqSection from '../../components/FaqSection/FaqSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>EduPrime | Trusted Immigration & Visa Consultants</title>
                <meta name="description" 
                    content="EduPrime helps individuals, families, and businesses with visa and immigration services for Canada, USA, UK, Australia & more. Get expert consultation now." 
                />
                <meta name="keywords" content="immigration consultants, visa experts, study abroad, work visa, Canada PR, EduPrime" />
                
                {/* Open Graph for Facebook */}
                <meta property="og:title" content="EduPrime | Trusted Immigration & Visa Consultants" />
                <meta property="og:description" content="Looking to move abroad? Get expert immigration guidance for study, work, or business visas." />
                <meta property="og:image" content="/social-share-image.webp" />
                <meta property="og:url" content="https://www.eduprime.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="EduPrime | Trusted Immigration & Visa Consultants" />
                <meta name="twitter:description" content="Get expert support for Canada, USA, UK, Australia, and more." />
                <meta name="twitter:image" content="/social-share-image.webp" />
            </Helmet>

            <div>
                <Header3 />
                <Homepagehero />
                <PartnerSection />
                <ServiceSection />
                <ImmigrationProcess />
                <FunFactSection />
                <Testimonial />
                <FaqSection />
                <BlogSection />
                <ContactSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    );
};

export default HomePage;
