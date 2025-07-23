import React from 'react'
import blogs from '../../../api/blogs'
import { Link } from 'react-router-dom'
import rating from '../../../images/icon/h_star.png'
import icon1 from '../../../images/icon/cat.svg'
import icon2 from '../../../images/icon/calendar2.svg'
import icon3 from '../../../images/icon/comment.svg'

import shape1 from '../../../images/shape/b_shape1.png'
import shape2 from '../../../images/shape/b_shape2.png'


const StudentBlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog pos-rel pt-120 pb-120">
            <div className="container">
                <div className="sec-title style-2 text-center mb-60">
                    <span className="sec-title--sub"><img src={rating} alt="" />latest news<img src={rating} alt="" /></span>
                    <h3 className="sec-title--heading">Latest Blog & Article</h3>
                </div>
                <div className="row mt-none-30">
                    {blogs.slice(3, 4).map((blog, Bitem) => (
                        <div className="col-lg-8 mt-30" key={Bitem}>
                            <div className="xb-blog2 xb-blog2--big">
                                <div className="xb-item--inner">
                                    <div className="xb-item--img">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><img src={blog.screens} alt="" /></Link>
                                    </div>
                                    <div className="xb-item--holder">
                                        <div className="xb-item--meta">
                                            <span className="xb-item--dots"><span></span><span></span><span></span></span>
                                            <ul className="ul_li">
                                                <li><span><img src={icon1} alt="" /></span>{blog.thumb}</li>
                                                <li><span><img src={icon2} alt="" /></span>{blog.create_at}</li>
                                                <li><span><img src={icon3} alt="" /></span>{blog.comment}</li>
                                            </ul>
                                        </div>
                                        <h2 className="xb-item--title border-effect"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <p className="xb-item--content">{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-lg-4 mt-30">
                        <div className="xb-blog-list">
                            {blogs.slice(4, 7).map((blog, Bitem) => (
                                <div className="xb-blog2" key={Bitem}>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--holder">
                                            <div className="xb-item--meta">
                                                <span className="xb-item--dots"><span></span><span></span><span></span></span>
                                                <ul className="ul_li">
                                                    <li><span><img src={icon1} alt="" /></span>{blog.thumb}</li>
                                                </ul>
                                            </div>
                                            <h2 className="xb-item--title border-effect"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                            <p className="xb-item--content">{blog.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":-70}'>
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
                        <img src={shape2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentBlogSection;