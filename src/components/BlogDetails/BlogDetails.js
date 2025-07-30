import React from 'react';
import { Link, useParams } from 'react-router-dom';
import blogs from '../../api/blogs';
import BlogSidebar from '../BlogSidebar';

import blog1 from '../../images/blog/post_04.jpg';
import author from '../../images/blog/avatar1.png';
import author2 from '../../images/blog/avatar2.png';
import author3 from '../../images/blog/avatar3.png';
import icon1 from '../../images/icon/quote.png';
import icon2 from '../../images/icon/arrow_right2.svg';
import icon3 from '../../images/icon/c_user.svg';
import icon4 from '../../images/icon/c_mail.svg';
import icon5 from '../../images/icon/c_message.svg';

const BlogSingle = () => {
    const { slug } = useParams();
    const BlogDetails = blogs.find(item => item.slug === slug);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const currentURL = window.location.href; // ✅ define here

    if (!BlogDetails) {
        return (
            <section className="blog pt-120 pb-120">
                <div className="container">
                    <h2>Blog Not Found</h2>
                    <p>The blog you're looking for doesn't exist.</p>
                    <Link to="/blog" className="thm-btn">Back to Blog</Link>
                </div>
            </section>
        );
    }

    return (
        <section className="blog pt-150 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-post-wrapper">
                            <article className="post-details">
                                <div className="post-thumb">
                                    <img src={BlogDetails.bSingle} alt={BlogDetails.title} />
                                </div>
                                <ul className="post-meta ul_li">
                                    <li><span><i className="far fa-user"></i> <span className="author vcard">{BlogDetails.author}</span></span></li>
                                    <li><Link onClick={ClickHandler} to="/blog"><i className="far fa-comments"></i> Comments ({BlogDetails.comment})</Link></li>
                                    <li><span className="posted-on"><i className="far fa-calendar-check"></i> <Link onClick={ClickHandler} to="/blog">{BlogDetails.create_at}</Link></span></li>
                                </ul>
                                <h2>{BlogDetails.title}</h2>
                                <p>This phrase suggests that the act of seeking professional help, such as from a visa consultant or agency, can take your visa application to a higher level. It implies that the assistance provided will enhance the overall quality of your application.</p>
                                <p>This phrase underscores the idea that seeking professional help instills a sense of assurance in the applicant. It implies that having experts guide you through the process can boost your confidence in the success of your application.</p>
                                <blockquote>
                                    <p>"Creativity is allowing yourself to make mistakes. You only have to do a few things right in your life so long as you don’t do too many things."</p>
                                    <span>Cameron Williamson</span>
                                    <div className="quote"><img src={icon1} alt="Quote Icon" /></div>
                                </blockquote>
                                <p>Visa consultants provide continuous support, helping you navigate any additional requests from immigration authorities and addressing any concerns that may arise during the processing period.</p>

                                <div className="row align-items-center mt-none-20 mb-30">
                                    <div className="col-lg-6 col-md-6 mt-30">
                                        <img src={blog1} alt="Visa process" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-30">
                                        <ul className="post-info-list list-unstyled">
                                            <li><img src={icon2} alt="" />Elevating Your Visa Application</li>
                                            <li><img src={icon2} alt="" />Navigating Complexity</li>
                                            <li><img src={icon2} alt="" />With Confidence</li>
                                            <li><img src={icon2} alt="" />The Power of Assistance</li>
                                            <li><img src={icon2} alt="" />A Multifaceted Approach</li>
                                            <li><img src={icon2} alt="" />Achieving Success</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3>The Visa Consulting Process Unveiled</h3>
                                <p>Visa consulting is an invaluable resource for anyone navigating the complexities of international travel, work, or family reunification. By enlisting the expertise of a visa consultant, you can save time, reduce stress, and increase your chances of a successful visa application.</p>
                            </article>

                            {/* ✅ Share section with working links */}
                            <div className="post-footer mt-10 mb-40 ul_li_between">
                                <div className="social-share ul_li mt-20">
                                    <h5 className="title">Share:</h5>
                                    <ul className="post-share ul_li">
                                        {/* Facebook */}
                                        <li>
                                            <a
                                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        {/* Twitter */}
                                        <li>
                                            <a
                                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}&text=${encodeURIComponent(BlogDetails.title)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        {/* LinkedIn */}
                                        <li>
                                            <a
                                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentURL)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>


                                        {/* ✅ WhatsApp */}
                                        <li>
                                            <a
                                                href={`https://wa.me/?text=${encodeURIComponent(BlogDetails.title + ' - ' + currentURL)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-whatsapp"></i>
                                            </a>
                                        </li>

                                        {/* ✅ Copy Link */}
                                        <li>
                                            <button onClick={() => { navigator.clipboard.writeText(currentURL); alert('Link copied to clipboard!'); }}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer' }} >
                                                <i className="fas fa-link"></i>
                                            </button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            {/* End Share */}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <BlogSidebar />
                </div>
            </div>
        </section>
    );
};

export default BlogSingle;
