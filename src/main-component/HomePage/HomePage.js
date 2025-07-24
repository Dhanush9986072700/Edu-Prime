import React, { Fragment } from 'react';
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
    )
};
export default HomePage;