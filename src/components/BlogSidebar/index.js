import React from 'react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'
import Services from '../../api/service';
import icon from '../../images/icon/search.svg';
import sicon3 from '../../images/icon/b_icon.png'
import Bg from '../../images/bg/b_bg.jpg'


const BlogSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="col-lg-4">
            <div className="blog-sidebar">
                <div className="widget">
                    <h3 className="widget-title">Search</h3>
                    <form className="widget__search" onSubmit={SubmitHandler}>
                        <input type="text" placeholder="Search your keyword" />
                        <button><img src={icon} alt="" /></button>
                    </form>
                </div>
                <div className="widget">
                    <h3 className="widget-title">Related Posts</h3>
                    <div className="widget__post">
                        {blogs.slice(0, 3).map((blog, Bitem) => (
                            <div className="widget__post-item ul_li" key={Bitem}>
                                <div className="post-thumb">
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><img src={blog.screens} alt="" /></Link>
                                </div>
                                <div className="post-content">
                                    <span className="post-date">{blog.create_at}</span>
                                    <h4 className="post-title border-effect-2"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget">
                    <h3 className="widget-title">Categories</h3>
                    <ul className="widget__category list-unstyled">
                        {Services.slice(0, 6).map((service, srv) => (
                            <>
                                {service.title ?
                                    <li key={srv}>
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}><i className="far fa-arrow-up"></i> {service.title}</Link>
                                    </li>
                                    : ''}
                            </>
                        ))}
                    </ul>
                </div>
                <div className="widget">
                    <h3 className="widget-title">Tags</h3>
                    <div className="tagcloud">
                        <Link onClick={ClickHandler} to="/blog">Citizenship</Link>
                        <Link onClick={ClickHandler} to="/blog">Family</Link>
                        <Link onClick={ClickHandler} to="/blog">Immigration</Link>
                        <Link onClick={ClickHandler} to="/blog">Traveling</Link>
                        <Link onClick={ClickHandler} to="/blog">Government</Link>
                        <Link onClick={ClickHandler} to="/blog">Visa</Link>
                        <Link onClick={ClickHandler} to="/blog">Visa Process</Link>
                        <Link onClick={ClickHandler} to="/blog">Abroad</Link>
                        <Link onClick={ClickHandler} to="/blog">Visa</Link>
                    </div>
                </div>
                <div className="widget widget-banner text-center bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <img className="mb-40" src={sicon3} alt="" />
                    <h4>Assured Approval – <br /> Guaranteed</h4>
                    <Link onClick={ClickHandler} className="thm-btn" to="/contact">Get in Touch</Link>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
