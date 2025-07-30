import React, { Fragment } from 'react';
import Header3 from '../../components/header3/Header3';
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogList from '../../components/BlogList';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/footer/Footer';
import SocialIcons from '../../components/SocialIcons/SocialIcons';


const FaqPage = (props) => {

    return (
        <Fragment>
            <Header3 />
            <BlogList />
            <ContactSection />
            <Footer />
            <Scrollbar />
            <SocialIcons />
        </Fragment>
    )
};
export default FaqPage;