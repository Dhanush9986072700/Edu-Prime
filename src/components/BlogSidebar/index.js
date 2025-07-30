import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../api/blogs';
import Services from '../../api/service';

import icon from '../../images/icon/search.svg';
import sicon3 from '../../images/icon/arrow-right.svg';
import Bg from '../../images/bg/blog_bg.png';

const BlogSidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    // Filter blog posts based on search
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="col-lg-4">
            <div className="blog-sidebar">

                {/* Search */}
                <div className="widget">
                    <h3 className="widget-title">Search</h3>
                    <form className="widget__search" onSubmit={SubmitHandler}>
                        <input
                            type="text"
                            placeholder="Search your keyword"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button><img src={icon} alt="Search Icon" /></button>
                    </form>
                </div>

                {/* Search Results / Related Posts */}
                <div className="widget">
                    <h3 className="widget-title">{searchTerm ? 'Search Results' : 'Related Posts'}</h3>
                    <div className="widget__post">
                        {(searchTerm ? filteredBlogs : blogs.slice(0, 3)).map((blog, index) => (
                            <div className="widget__post-item ul_li" key={index}>
                                <div className="post-thumb">
                                    <Link onClick={ClickHandler} to={`/blog/${blog.slug}`}>
                                        <img src={blog.screens} alt={blog.title} />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <span className="post-date">{blog.create_at}</span>
                                    <h4 className="post-title border-effect-2">
                                        <Link onClick={ClickHandler} to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                    </h4>
                                </div>
                            </div>
                        ))}
                        {searchTerm && filteredBlogs.length === 0 && (
                            <p>No results found for "{searchTerm}"</p>
                        )}
                    </div>
                </div>

                {/* Categories */}
                <div className="widget">
                    <h3 className="widget-title">Categories</h3>
                    <ul className="widget__category list-unstyled">
                        {Services.slice(0, 6).map((service, srv) => (
                            service.title && (
                                <li key={srv}>
                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                        <i className="far fa-arrow-up"></i> {service.title}
                                    </Link>
                                </li>
                            )
                        ))}
                    </ul>
                </div>

                {/* Banner */}
                <div className="widget widget-banner text-center bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <img className="mb-40" src={sicon3} alt="Banner Icon" />
                    <h4>Assured Approval – <br /> Guaranteed</h4>
                    <Link onClick={ClickHandler} className="thm-btn" to="/contact">Get in Touch</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
