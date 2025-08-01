import React, { useState } from 'react'; import { Link } from 'react-router-dom'; import BlogSidebar from '../BlogSidebar'; import blogs from '../../api/blogs'; const BlogList = () => {
    const ClickHandler = () => { window.scrollTo(10, 0); }; const blogsPerPage = 5; const [currentPage, setCurrentPage] = useState(1); const totalPages = Math.ceil(blogs.length / blogsPerPage); const startIndex = (currentPage - 1) * blogsPerPage; const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage); const handlePageClick = (pageNumber) => { setCurrentPage(pageNumber); ClickHandler(); }; const handlePrev = () => { if (currentPage > 1) { setCurrentPage(prev => prev - 1); ClickHandler(); } }; const handleNext = () => { if (currentPage < totalPages) { setCurrentPage(prev => prev + 1); ClickHandler(); } }; return (<section className="blog pt-200 pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog-post-wrapper"> {currentBlogs.map((blog, bitem) => (<article className="single-post-item" key={bitem}>
                        <div className="post-thumbnail-wrapper">
                            <Link onClick={ClickHandler} to={`/blog/${blog.slug}`}>
                                <img src={blog.bSingle} alt={blog.title} />
                            </Link>
                        </div>
                        <div className="post-content-wrapper">
                            <ul className="post-meta ul_li">
                                <li>
                                    <span>
                                        <i className="far fa-user"></i>
                                        <span className="author vcard">{blog.author}</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="posted-on">
                                        <i className="far fa-calendar-check"></i>
                                        <Link onClick={ClickHandler} to={`/blog/${blog.slug}`}>{blog.create_at}</Link>
                                    </span>
                                </li>
                            </ul>
                            <h3 className="post-title border_effect">
                                <Link onClick={ClickHandler} to={`/blog/${blog.slug}`}>{blog.title}</Link>
                            </h3>
                            <div className="post-excerpt">
                                <p>{blog.description}</p>
                            </div>
                            <div className="post-read-more">
                                <Link onClick={ClickHandler} to={`/blog/${blog.slug}`} className="thm-btn">Read More</Link>
                            </div>
                        </div>
                    </article>))} {/* Pagination */} <div className="pagination_wrap pt-20">
                            <ul>
                                <li>
                                    <button onClick={handlePrev} disabled={currentPage === 1}>
                                        <i className="far fa-long-arrow-left"></i>
                                    </button>
                                </li> {[...Array(totalPages)].map((_, index) => (<li key={index}>
                                    <button className={currentPage === index + 1 ? 'current_page' : ''} onClick={() => handlePageClick(index + 1)} > {index + 1} </button>
                                </li>))} <li>
                                    <button onClick={handleNext} disabled={currentPage === totalPages}>
                                        <i className="far fa-long-arrow-right"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> {/* Sidebar */}
                <BlogSidebar />
            </div>
        </div>
    </section>);
}; export default BlogList;