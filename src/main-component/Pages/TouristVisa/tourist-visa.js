import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Header3 from '../../../components/header3/Header3.js';
import TouristVisaHero from '../../../components/TouristVisaHero/TouristVisaHero.js';
import About from '../../../components/travel-agency-components/about/about.js';
import TuristVisaCountry from '../../../components/travel-agency-components/PopularPakage/TuristVisaCountry.js';
import CategoryLayout from '../../../components/travel-agency-components/CategorySection/CategoryLayout.js';
import Testimonial from '../../../components/Testimonial/Testimonial.js';
import ContactSection from '../../../components/ContactSection/index.js';
import Footer from '../../../components/footer/Footer.js';
import Scrollbar from '../../../components/scrollbar/scrollbar.js';
import TuristVisaProcess from '../../../components/TuristVisaProcess/TuristVisaProcess.js';

const TouristVisa = () => {
    return (
        <Fragment>
            {/* ✅ SEO Meta Tags for Tourist Visa Page */}
            <Helmet>
                <title>Tourist Visa | Travel Abroad Hassle-Free with Edu Prime</title>
                <meta name="description" content="Get tourist visas for top destinations like USA, Dubai, Europe, and Asia. Quick processing, documentation help, and end-to-end travel support from Edu Prime." />
                <meta name="keywords" content="Tourist Visa, Travel Visa, USA Tourist Visa, Dubai Visit Visa, Europe Visa, Schengen Visa, Edu Prime Immigration" />
                <link rel="canonical" href="https://www.eduprime.com/tourist-visa" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Tourist Visa - Travel Abroad Made Simple" />
                <meta property="og:description" content="Apply for tourist visas to top countries. Fast processing and expert support for smooth travel experiences." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eduprime.com/tourist-visa" />
                <meta property="og:image" content="https://www.eduprime.com/images/social-share-image.png" />

                {/* Twitter SEO */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Tourist Visa - Travel Abroad Made Simple" />
                <meta name="twitter:description" content="Apply for tourist visas to top countries. Fast processing and expert support for smooth travel experiences." />
                <meta name="twitter:image" content="https://www.eduprime.com/images/social-share-image.png" />
            </Helmet>

            <div>
                <Header3 />
                <TouristVisaHero />
                <About />
                <TuristVisaCountry />
                <TuristVisaProcess />
                <CategoryLayout />
                <Testimonial />
                <ContactSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    );
};

export default TouristVisa;
