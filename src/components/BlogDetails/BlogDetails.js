import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogs from '../../api/blogs';
import BlogSidebar from '../BlogSidebar';

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find(item => item.slug === slug);
  const currentURL = window.location.href;

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  if (!blog) {
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

  const { title, description, bSingle, author, create_at, content } = blog;

  return (
    <section className="blog pt-150 pb-120">
      <Helmet>
        <title>{content.metaTitle || `${title} | EduPrime`}</title>
        <meta name="description" content={content.metaDescription || description} />
        <meta property="og:title" content={content.metaTitle || title} />
        <meta property="og:description" content={content.metaDescription || description} />
        <meta property="og:image" content={bSingle} />
        <meta property="og:url" content={currentURL} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="container">
        <div className="row">
          {/* Left Blog Content */}
          <div className="col-lg-8">
            <div className="blog-post-wrapper">
              <article className="post-details">
                <div className="post-thumb">
                  <img src={bSingle} alt={title} />
                </div>
                <ul className="post-meta ul_li">
                  <li>
                    <span><i className="far fa-user"></i>{author}</span>
                  </li>
                  <li>
                    <span className="posted-on">
                      <i className="far fa-calendar-check"></i>
                      <Link onClick={ClickHandler} to="/blog">{create_at}</Link>
                    </span>
                  </li>
                </ul>

                <h2>{title}</h2>

                {content.sections?.map((section, idx) => (
                  <div key={idx} className="blog-section">
                    {section.heading && <h3>{section.heading}</h3>}
                    {section.body?.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                ))}
              </article>

              {/* Share Options */}
              <div className="post-footer mt-10 mb-40 ul_li_between">
                <div className="social-share ul_li mt-20">
                  <h5 className="title">Share:</h5>
                  <ul className="post-share ul_li">
                    <li>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentURL)}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href={`https://wa.me/?text=${encodeURIComponent(title + ' - ' + currentURL)}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(currentURL);
                          alert('Link copied to clipboard!');
                        }}
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        <i className="fas fa-link"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
