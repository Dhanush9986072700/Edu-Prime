// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
// import icon1 from '../../images/icon/n_pad.svg'
// import icon2 from '../../images/icon/time.svg'
// import icon3 from '../../images/icon/location.svg'
// import icon4 from '../../images/icon/search.svg'
// import icon5 from '../../images/icon/us_flag.png'
// import icon6 from '../../images/icon/arrow_down.svg'
// import logo from '../../images/logo/logo.svg'
// import MobileMenu from '../MobileMenu/MobileMenu'

// const Header = (props) => {

//     const [searchActive, setSearchState] = useState(false);
//     const [mobailActive, setMobailState] = useState(false);

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }

//     const SubmitHandler = (e) => {
//         e.preventDefault()
//     }

//     const [isSticky, setSticky] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 80) {
//                 setSticky(true);
//             } else {
//                 setSticky(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         // Clean up
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);


//     return (
//         <header className="site-header header-style-one">
//             <div className="header__top-wrap gray-bg">
//                 <div className="container">
//                     <div className="header__top ul_li_between">
//                         <div className="header__top-cta">
//                             <img src={icon1} alt="" /><span>Help Desk :</span> +91 590 088 55
//                         </div>
//                         <ul className="header__top-info ul_li">
//                             <li><img src={icon2} alt="" />Monday - Friday 09:00 am - 05:00 Pm</li>
//                             <li><img src={icon3} alt="" />456 Elm Avenue Springfield, IL 62701</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className={`header__wrap stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
//                 <div className="container">
//                     <div className="header__inner ul_li_between">
//                         <div className="header__logo">
//                             <Link onClick={ClickHandler} to="/"><img src={logo} alt="" /></Link>
//                         </div>
//                         <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
//                             <nav className="main-menu collapse navbar-collapse">
//                                 <ul>
//                                     <li className="active"><Link onClick={ClickHandler} to="/"><span>Home</span></Link>
//                                         {/* <ul className="submenu">
//                                             <li><Link onClick={ClickHandler} to="/"><span>Immigration</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/home-studient-visa"><span>Studient Visa</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/home-travel-agency"><span>Travel Agency</span></Link></li>
//                                         </ul> */}
//                                     </li>
//                                     <li className="menu-item-has-children">
//                                         <Link onClick={ClickHandler} to="/"><span>Pages</span></Link>
//                                         <ul className="submenu">
//                                             <li><Link onClick={ClickHandler} to="/services"><span>Services</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/service-single/Tourist-Visa"><span>Service Details</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/coaching"><span>Coaching</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/coaching-single/Take-IELTS"><span>Coaching Details</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/visa"><span>Visa</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/visa-single/Commercial-Visa"><span>Visa Details</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/team"><span>Team</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/team-single/Esther-Howard"><span>Team Details</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/testimonial"><span>Testimonials</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/faq"><span>FAQ</span></Link></li>
//                                         </ul>
//                                     </li>
//                                     <li><Link onClick={ClickHandler} to="/about"><span>About us</span></Link></li>
//                                     <li className="menu-item-has-children">
//                                         <Link onClick={ClickHandler} to="/"><span>Country</span></Link>
//                                         <ul className="submenu">
//                                             <li><Link onClick={ClickHandler} to="/country"><span>Country</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/country-single/Australia"><span>Country Details</span></Link></li>
//                                         </ul>
//                                     </li>
//                                     <li className="menu-item-has-children">
//                                         <Link onClick={ClickHandler} to="/"><span>Blog</span></Link>
//                                         <ul className="submenu">
//                                             <li><Link onClick={ClickHandler} to="/blog"><span>Blog</span></Link></li>
//                                             <li><Link onClick={ClickHandler} to="/blog/Cultural-adjustment-thriving-in-a-new-country"><span>Blog Details</span></Link></li>
//                                         </ul>
//                                     </li>
//                                     <li><Link onClick={ClickHandler} to="/contact"><span>Contact</span></Link></li>
//                                 </ul>
//                             </nav>
//                         </div>
//                         <div className="xb-hamburger-menu">
//                             <div className="xb-nav-mobile">
//                                 <div className="xb-nav-mobile-button" onClick={() => setMobailState(!mobailActive)}><i className="fal fa-bars"></i></div>
//                             </div>
//                         </div>
//                         <ul className="header__action ul_li">
//                             <li>
//                                 <span className="header__search header-search-btn" onClick={() => setSearchState(!searchActive)}>
//                                     <img src={icon4} alt="" />Search
//                                 </span>
//                             </li>
//                             <li>
//                                 <div className="header__language">
//                                     <ul>
//                                         <li><Link onClick={ClickHandler} to="/" className="lang-btn">
//                                             <div className="flag"><img src={icon5} alt="" /></div>
//                                             English
//                                             <div className="arrow_down"><img src={icon6} alt="" /></div>
//                                         </Link>
//                                             <ul className="lang_sub_list">
//                                                 <li><Link onClick={ClickHandler} to="/">English</Link></li>
//                                                 <li><Link onClick={ClickHandler} to="/">Arabic</Link></li>
//                                                 <li><Link onClick={ClickHandler} to="/">Bangla</Link></li>
//                                             </ul>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="xb-header-wrap">
//                 <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
//                     <div className="xb-header-menu-scroll">
//                         <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
//                         <div className="xb-logo-mobile xb-hide-xl">
//                             <Link onClick={ClickHandler} to="/" rel="home"><img src={logo} alt="" /></Link></div>
//                         <div className="xb-header-mobile-search xb-hide-xl">
//                             <form role="search" onSubmit={SubmitHandler}>
//                                 <input type="text" placeholder="Search..." name="s" className="search-field" />
//                                 <button type="submit" className="search-submit">
//                                 </button>
//                             </form>
//                         </div>
//                         <nav className="xb-header-nav">
//                             <MobileMenu />
//                         </nav>
//                     </div>
//                 </div>
//                 <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
//             </div>

//             <div className={`header-search-form-wrapper ${searchActive ? "open" : ""}`}>
//                 <div className="xb-search-close xb-close" onClick={() => setSearchState(!searchActive)}></div>
//                 <div className="header-search-container">
//                     <form role="search" className="search-form" onSubmit={SubmitHandler}>
//                         <input type="search" className="search-field" placeholder="Search …" name="s" />
//                     </form>
//                 </div>
//             </div>
//             <div className={`body-overlay ${searchActive ? "active" : ""}`}></div>
//         </header>
//     )
// }

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../images/icon/n_pad.svg';
import icon2 from '../../images/icon/time.svg';
import icon3 from '../../images/icon/location.svg';
import logo from '../../images/logo/logo.svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import whatsappIcon from '../../images/icon/gree-whatsapp.svg'; // You should have this icon in the path

const Header = (props) => {
    const [mobailActive, setMobailState] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="site-header header-style-one">
            <div className="header__top-wrap gray-bg">
                <div className="container">
                    <div className="header__top ul_li_between">
                        <div className="header__top-cta">
                            <img src={icon1} alt="" /><span>Help Desk :</span> +91 590 088 55
                        </div>
                        <ul className="header__top-info ul_li">
                            <li><img src={icon2} alt="" />Monday - Friday 09:00 am - 05:00 Pm</li>
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                paddingTop: '2px'
                            }}>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f" style={{ color: '#4267B2', fontSize: '16px' }}></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram" style={{ color: '#C13584', fontSize: '16px' }}></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in" style={{ color: '#0077B5', fontSize: '16px' }}></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter" style={{ color: '#1DA1F2', fontSize: '16px' }}></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube" style={{ color: '#FF0000', fontSize: '16px' }}></i>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className={`header__wrap stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="header__inner ul_li_between">
                        <div className="header__logo">
                            <Link onClick={ClickHandler} to="/"><img src={logo} alt="" /></Link>
                        </div>
                        <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                            <nav className="main-menu collapse navbar-collapse">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/"><span>Home</span></Link></li>
                                    <li><Link onClick={ClickHandler} to="/about"><span>About Us</span></Link></li>
                                    
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/"><span>Migrate</span></Link>
                                        <ul className="submenu">
                                        <li><Link onClick={ClickHandler} to="/Study-visa"><span>Study Visa</span></Link></li>
                                        <li><Link onClick={ClickHandler} to="/TouristVisa"><span>Tourist Visa</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/"><span>Investor Visa</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/"><span>Job Seeker Visa</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/"><span>Permanent Residency</span></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} to="/contact"><span>Blog</span></Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact"><span>Contact Us</span></Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="xb-hamburger-menu">
                            <div className="xb-nav-mobile">
                                <div className="xb-nav-mobile-button" onClick={() => setMobailState(!mobailActive)}><i className="fal fa-bars"></i></div>
                            </div>
                        </div>
                        <ul className="header__action ul_li">
                            <li>
                                <Link className="thm-btn thm" to="/book-appointment">
                                    Personal Consultation
                                </Link>
                            </li>
                            <li>
                                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                                    <img src={whatsappIcon} alt="WhatsApp Chat" style={{ width: '44px', height: '44px' }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="xb-header-wrap">
                <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
                    <div className="xb-header-menu-scroll">
                        <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                        <div className="xb-logo-mobile xb-hide-xl">
                            <Link onClick={ClickHandler} to="/" rel="home"><img src={logo} alt="" /></Link>
                        </div>
                        <nav className="xb-header-nav">
                            <MobileMenu />
                        </nav>
                    </div>
                </div>
                <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
            </div>
        </header>
    );
};

export default Header;
