import React, { Fragment } from 'react';
import Header3 from '../../../components/header3/Header3.js';
import Hero4 from '../../../components/hero4/hero4.js';
import About from '../../../components/travel-agency-components/about/about.js';
import TuristVisaCountry from '../../../components/travel-agency-components/PopularPakage/TuristVisaCountry.js';
import CategoryLayout from '../../../components/travel-agency-components/CategorySection/CategoryLayout.js';
import TravelTestimonial from '../../../components/travel-agency-components/TravelTestimonial/TravelTestimonial.js';
import ContactSection from '../../../components/ContactSection/index.js';
import NewsLatter from '../../../components/NewsLatter/NewsLatter.js';
import Footer from '../../../components/footer/Footer.js';
import Scrollbar from '../../../components/scrollbar/scrollbar.js';
import TuristVisaProcess from '../../../components/TuristVisaProcess/TuristVisaProcess.js';



const TouristVisa = () => {

    return (
        <Fragment>
            <div>
                <Header3 />
                <Hero4 />
                <About />
                <TuristVisaCountry />
                <TuristVisaProcess />
                <CategoryLayout />
                <TravelTestimonial />
                <NewsLatter />
                <ContactSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default TouristVisa;