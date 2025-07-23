import React from 'react';
import blog1 from '../../images/blog/post_04.jpg'
import author from '../../images/blog/avatar1.png'
import author2 from '../../images/blog/avatar2.png'
import author3 from '../../images/blog/avatar3.png'
import icon1 from '../../images/icon/quote.png'
import icon2 from '../../images/icon/arrow_right2.svg'
import icon3 from '../../images/icon/c_user.svg'
import icon4 from '../../images/icon/c_mail.svg'
import icon5 from '../../images/icon/c_message.svg'
import blogs from '../../api/blogs';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar';

const BlogSingle = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-post-wrapper">
                            <article className="post-details">
                                <div className="post-thumb">
                                    <img src={BlogDetails.bSingle} alt="" />
                                </div>
                                <ul className="post-meta ul_li">
                                    <li><span><i className="far fa-user"></i><span className="author vcard">{BlogDetails.author}</span></span></li>
                                    <li><Link onClick={ClickHandler} to="/blog"><i className="far fa-comments"></i> Comments ({BlogDetails.comment})</Link></li>
                                    <li><span className="posted-on"><i className="far fa-calendar-check"></i> <Link onClick={ClickHandler} to="/blog">{BlogDetails.create_at}</Link></span></li>
                                </ul>
                                <h2>{BlogDetails.title}</h2>
                                <p>This phrase suggests that the act of seeking professional help, such as from a visa consultant or agency, can take your visa application to a higher level. It implies that the assistance provided will enhance the overall quality of your application. The term  acknowledges that the visa application process can be intricate</p>
                                <p>This phrase underscores the idea that seeking professional help instills a sense of assurance in the applicant. It implies that having experts guide you through the process can boost your confidence in the success of your application.</p>
                                <blockquote>
                                    <p>"Creativity is allowing yourself to make mistakes. You only have to do a few things right in your life so long as you don’t do too many things."</p>
                                    <span>Cameron Williamson</span>
                                    <div className="quote"><img src={icon1} alt="" /></div>
                                </blockquote>
                                <p>The phrase "with confidence" signifies that seeking expert guidance can provide you with a sense of assurance and self-assuredness throughout the application journey. It highlights that you're not alone in facing the challenges of the application process.It positions expert guidance as a powerful tool that can significantly impact.</p>
                                <p>Visa consultants provide continuous support, helping you navigate any additional requests from immigration authorities and addressing any concerns that may arise during the processing period.</p>
                                <div className="row align-items-center mt-none-20 mb-30">
                                    <div className="col-lg-6 col-md-6 mt-30">
                                        <img src={blog1} alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-30">
                                        <ul className="post-info-list list-unstyled">
                                            <li><img src={icon2} alt="" />Elevating Your Visa Application</li>
                                            <li><img src={icon2} alt="" />Navigating Complexity</li>
                                            <li><img src={icon2} alt="" />With Confidence</li>
                                            <li><img src={icon2} alt="" />The Power of  Assistance</li>
                                            <li><img src={icon2} alt="" />A Multifaceted Approach</li>
                                            <li><img src={icon2} alt="" />Achieving Success</li>
                                        </ul>
                                    </div>
                                </div>
                                <h3>The Visa Consulting Process Unveiled Initial Consultation</h3>
                                <p>Visa consulting is an invaluable resource for anyone navigating the complexities of international travel, work, or family reunification. By enlisting the expertise of a visa consultant, you can save time, reduce stress, and increase your chances of a successful visa application. Make sure to do your due diligence when choosing a consultant, and you'll be well on your way to realizing your global aspirations.</p>
                            </article>
                            <div className="post-footer mt-10 mb-40 ul_li_between">
                                <div className="post-tags ul_li mt-20">
                                    <h5 className="tag-title">Tags:</h5>
                                    <span className="tags-links">
                                        <Link onClick={ClickHandler} to="/blog" rel="tag">Family</Link>
                                        <Link onClick={ClickHandler} to="/blog" rel="tag">Citizenship</Link>
                                        <Link onClick={ClickHandler} to="/blog" rel="tag">Immigration</Link>
                                    </span>
                                </div>
                                <div className="social-share ul_li mt-20">
                                    <h5 className="title">Share:</h5>
                                    <ul className="post-share ul_li">
                                        <li>
                                            <Link onClick={ClickHandler} to="/blog">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link onClick={ClickHandler} to="/blog">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link onClick={ClickHandler} to="/blog">
                                                <i className="fab fa-linkedin-in"></i>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link onClick={ClickHandler} to="/blog">
                                                <i className="fab fa-pinterest"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="post-comments">
                                        <h2 className="title mb-25">03 Comments</h2>
                                        <div className="latest__comments">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src={author} alt="" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar-name">
                                                                <h5>Matt Gartner</h5>
                                                                <span>19th May 2023</span>
                                                                <Link onClick={ClickHandler} to="/blog" className="reply">Reply</Link>
                                                            </div>
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the leap into electronic typesetting, remaining
                                                                essentiallyuncha opularisedthe with the release of Letrasetsheets containingthe leap electrtypesetting remaining
                                                                majority have.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="children">
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src={author2} alt="" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar-name">
                                                                <h5>Dan Whiting</h5>
                                                                <span>19th May 2023</span>
                                                                <Link onClick={ClickHandler} to="/blog" className="reply">Reply</Link>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                                tempor incididunt
                                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                                exercitation.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src={author3} alt="" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar-name">
                                                                <h5>Carlin Wong</h5>
                                                                <span>19th May 2023</span>
                                                                <Link onClick={ClickHandler} to="/blog" className="reply">Reply</Link>
                                                            </div>
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the leap into electronic typesetting, remaining
                                                                essentiallyuncha opularisedthe with the release of Letrasetsheets containingthe leap electrtypesetting remaining
                                                                majority have.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="comments-form">
                                        <div className="comment-heading">
                                            <h2 className="title">Post Comments</h2>
                                            <p>Your email address will not be published. Required fields are marked * </p>
                                        </div>
                                        <form className="xb-item--form contact-from" onSubmit={submitHandler}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="xb-item--field">
                                                        <span><img src={icon3} alt="" /></span>
                                                        <input type="text" placeholder="Goladria Gomez" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="xb-item--field">
                                                        <span><img src={icon4} alt="" /></span>
                                                        <input type="text" placeholder="Edu.Prime@services.com" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="xb-item--field">
                                                        <span><img src={icon5} alt="" /></span>
                                                        <textarea name="message" id="message" cols="30" rows="10"
                                                            placeholder="Write Your Message..."></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="thm-btn" type="submit">Post comment</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <BlogSidebar />

                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
