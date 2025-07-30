import React from 'react';
import blogs from '../../api/blogs';
import { Link } from 'react-router-dom';
import Bg from '../../images/bg/blog_bg.png';
import icon1 from '../../images/icon/user.svg';
import icon2 from '../../images/icon/calendar.svg';
import icon3 from '../../images/icon/right_arrow.svg';

const BlogSection = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="blog pb-130">
            <div className="container">
                <div className="blog-wrap">
                    <div className="sec-title mb-60 text-center">
                        <h2 className="mb-30 wow skewIn">Cast Your Eyes Upon Our <br /> <span>Newest Article</span></h2>
                        <p>Explore the most recent addition to our informative articles</p>
                    </div>
                    <div className="row justify-content-md-center mt-none-30">
                        {blogs.slice(0, 3).map((blog, Bitem) => (
                            <div className="col-lg-4 col-md-6 mt-30" key={Bitem}>
                                <div className="xb-blog">
                                    <div className="xb-item--inner">
                                        <div className="xb-item--img">
                                            <img src={blog.screens} alt={blog.title} />
                                        </div>
                                        <div className="xb-item--holder">
                                            <span className={`xb-item--category ${blog.style || ''}`}>{blog.thumb}</span>
                                            <ul className="xb-item--meta ul_li mb-20">
                                                <li><img src={icon1} alt="Author" />By {blog.author}</li>
                                                <li><img src={icon2} alt="Date" />{blog.create_at}</li>
                                            </ul>
                                            <h3 className="xb-item--title border-effect">
                                                <Link onClick={ClickHandler} to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                            </h3>
                                            <Link onClick={ClickHandler} to={`/blog/${blog.slug}`} className="xb-item--link">
                                                Read the article <span><img src={icon3} alt="arrow" /></span>
                                            </Link>
                                        </div>
                                        <Link onClick={ClickHandler} to={`/blog/${blog.slug}`} className="xb-overlay xb-overlay-link"></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="xb-blog-bg" style={{ backgroundImage: `url(${Bg})` }}></div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
