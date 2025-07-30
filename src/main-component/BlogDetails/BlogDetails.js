import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Header3 from '../../components/header3/Header3';
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/footer/Footer';


const BlogDetails = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    return (
        <Fragment>
            <Header3 />
            <BlogSingle/>
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;