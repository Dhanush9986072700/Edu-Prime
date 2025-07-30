import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo/logo-2.svg'
import logo2 from '../../images/logo/logo-black.svg'
import MobileMenu from '../MobileMenu/MobileMenu';
import icon1 from '../../images/icon/mail-2.svg'
import icon2 from '../../images/icon/h_call.svg'
import icon3 from '../../images/icon/h_search.svg'

const Header2 = (props) => {
    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    

    return (
        <header className="site-header header-style-two">
            <div className="xb-header-top">
                <div className="container">
                    <div className="xb-item--inner ul_li_between">
                        <div className="header__logo">
                            <Link onClick={ClickHandler} to="/"><img src={logo} alt="" /></Link>
                        </div>
                        <ul className="xb-item--info ul_li">
                            <li><span className="gradient-bg"><img src={icon1} alt="" /></span>infoEdu.Prime@gmail.com</li>
                            <li><span className="gradient-bg"><img src={icon2} alt="" /></span>+91-2054875454</li>
                        </ul>
                        <ul className="xb-item--social ul_li">
                            <li><Link onClick={ClickHandler} to="/"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header__wrap stricky original">
                <div className="container">
                    <div className="header__inner ul_li_between">
                        <div className="header__logo">
                            <Link onClick={ClickHandler} to="/"><img src={logo2} alt="" /></Link>
                        </div>
                        <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                            <nav className="main-menu collapse navbar-collapse">
                                <ul>
                                    <li className="menu-item-has-children active"><Link onClick={ClickHandler} to="/"><span>Home</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} to="/"><span>Immigration</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-studient-visa"><span>Studient Visa</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-travel-agency"><span>Travel Agency</span></Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/"><span>Pages</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} to="/services"><span>Services</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single/Tourist-Visa"><span>Service Details</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/coaching"><span>Coaching</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/coaching-single/Take-IELTS"><span>Coaching Details</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/visa"><span>Visa</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/visa-single/Commercial-Visa"><span>Visa Details</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/team"><span>Team</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/team-single/Esther-Howard"><span>Team Details</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/testimonial"><span>Testimonials</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/faq"><span>FAQ</span></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} to="/about"><span>About us</span></Link></li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/"><span>Country</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} to="/country"><span>Country</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/country-single/Australia"><span>Country Details</span></Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/"><span>Blog</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} to="/blog"><span>Blog</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog/Cultural-adjustment-thriving-in-a-new-country"><span>Blog Details</span></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} to="/contact"><span>Contact</span></Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="xb-hamburger-menu">
                            <div className="xb-nav-mobile">
                                <div className="xb-nav-mobile-button" onClick={() => setMobailState(!mobailActive)}><i className="fal fa-bars"></i></div>
                            </div>
                        </div>
                        <div className="header-search">
                            <span><img src={icon3} alt="" /></span>
                            <input type="text" placeholder="what're you looking for ?" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="xb-header-wrap">
                <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
                    <div className="xb-header-menu-scroll">
                        <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(false)}></div>
                        <div className="xb-logo-mobile xb-hide-xl">
                            <Link onClick={ClickHandler} to="/" rel="home"><img src={logo} alt="" /></Link></div>
                        <div className="xb-header-mobile-search xb-hide-xl">
                            <form role="search" onSubmit={SubmitHandler}>
                                <input type="text" placeholder="Search..." name="s" className="search-field" />
                                <button type="submit" className="search-submit">
                                </button>
                            </form>
                        </div>
                        <nav className="xb-header-nav">
                            <MobileMenu />
                        </nav>
                    </div>
                </div>
                <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
            </div>
        </header>
    )
}

export default Header2;