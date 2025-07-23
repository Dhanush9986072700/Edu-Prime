import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-edu-prime.png';
import icon4 from '../../images/icon/gree-whatsapp.svg';
import searchIcon from '../../images/icon/search.svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import ContactForm from '../../components/ContactFrom/ContactForm';
import VisaSearchResults from '../VisaSearch/VisaSearch';
import { allVisaData } from '../../api/GlobalData';

const Header3 = () => {
    const [searchActive, setSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [mobailActive, setMobailState] = useState(false);
    const [sitebarActive, setSitebarState] = useState(false);
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (!query) {
            setFilteredResults([]);
            return;
        }

        const filtered = allVisaData.filter((item) => {
            return Object.values(item).some((val) =>
                typeof val === 'string' && val.toLowerCase().includes(query)
            );
        });

        setFilteredResults(filtered);
    };


    // ✅ Inline styles for SEO-friendly suggestions
    const linkStyle = {
        padding: '12px 18px',
        borderRadius: '6px',
        backgroundColor: '#e7f1ff',
        color: '#004AAD',
        textDecoration: 'none',
        fontWeight: '500',
        display: 'inline-block',
        transition: '0.3s ease'
    };

    const countryLinkStyle = {
        padding: '12px 18px',
        borderRadius: '6px',
        backgroundColor: '#fff3cd',
        color: '#856404',
        textDecoration: 'none',
        fontWeight: '500',
        display: 'inline-block',
        transition: '0.3s ease'
    };

    return (
        <header className="site-header header-style-three">
            {/* Sticky Header */}
            <div className={`header__wrap stricky ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="header__inner ul_li_between">
                        <div className="header__logo">
                            <Link to="/"><img className='headerlogo' src={logo} alt="Edu Prime Logo" /></Link>
                        </div>

                        <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                            <nav className="main-menu collapse navbar-collapse">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/Study-visa">Study Visa</Link></li>
                                    <li><Link to="/TouristVisa">Tourist Visa</Link></li>
                                    <li><Link to="/InvestorVisa">Investor Visa</Link></li>
                                    <li><Link to="/JobseakerVisa">Job Seeker Visa</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header__action ul_li">
                            <button onClick={() => setSearchActive(true)} style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#ffffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px', border: 'none', cursor: 'pointer' }}>
                                <img src={searchIcon} alt="Search" style={{ width: '20px', height: '20px' }} />
                            </button>
                            <button className="header__bar offcanvas-sidebar-btn" onClick={() => setSitebarState(!sitebarActive)}>
                                <div className="header__bar-icon"><span></span><span></span><span></span><span></span></div>
                            </button>
                        </div>

                        <div className="xb-hamburger-menu">
                            <div className="xb-nav-mobile">
                                <div className="xb-nav-mobile-button" onClick={() => setMobailState(!mobailActive)}>
                                    <i className="fal fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="xb-header-wrap">
                <div className={`xb-header-menu ${mobailActive ? 'active' : ''}`}>
                    <div className="xb-header-menu-scroll">
                        <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(false)}></div>
                        <div className="xb-logo-mobile xb-hide-xl">
                            <Link to="/"><img src={logo} alt="Mobile Logo" /></Link>
                        </div>
                        <div className="xb-header-mobile-search xb-hide-xl">
                            <input
                                type="text"
                                placeholder="Search..."
                                readOnly
                                onClick={() => {
                                    setSearchActive(true);       // open search overlay
                                    setMobailState(false);       // close mobile menu
                                }}
                                style={{
                                    width: '100%',
                                    padding: '12px 15px',
                                    fontSize: '16px',
                                    border: '1px solid #ccc',
                                    borderRadius: '6px',
                                    marginTop: '10px',
                                    cursor: 'pointer',
                                    backgroundColor: '#fff'
                                }}
                            />
                        </div>

                        <nav className="xb-header-nav">
                            <MobileMenu setSearchActive={setSearchActive} setMobailState={setMobailState} />

                        </nav>
                    </div>
                </div>
                <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
            </div>

            {/* 🔍 Search Overlay */}
            {searchActive && (
                <div style={{
                    zIndex: '9999',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'rgba(255, 255, 255, 0.98)',
                    overflowY: 'auto',
                    padding: '80px 20px 40px',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)'
                }}>
                    {/* Close Button */}
                    <div onClick={() => {
                        setSearchActive(false);
                        setSearchQuery('');
                        setFilteredResults([]);
                    }} style={{
                        position: 'absolute',
                        top: '20px',
                        right: '30px',
                        fontSize: '30px',
                        cursor: 'pointer',
                        color: '#333'
                    }}>&times;</div>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <input
                            type="search"
                            autoFocus
                            placeholder="Search for visas, countries, services…"
                            value={searchQuery}
                            onChange={handleSearch}
                            style={{
                                width: '100%',
                                padding: '15px 20px',
                                fontSize: '18px',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                marginBottom: '30px',
                            }}
                        />

                        {/* Suggestions or Results */}
                        {searchQuery ? (
                            <VisaSearchResults results={filteredResults} query={searchQuery} />
                        ) : (
                            <>
                                <h4 style={{ fontSize: '18px', marginBottom: '15px', color: '#444', fontWeight: '600' }}>Popular Visa Categories</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                                    <Link to="/Study-visa" style={linkStyle}>🎓 Study Abroad</Link>
                                    <Link to="/TouristVisa" style={linkStyle}>🌍 Tourist Visa</Link>
                                    <Link to="/InvestorVisa" style={linkStyle}>💼 Investor Visa</Link>
                                    <Link to="/JobseakerVisa" style={linkStyle}>🧳 Job Seeker Visa</Link>
                                </div>
                        
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Contact Sidebar */}
            <div className={`offcanvas-sidebar ${sitebarActive ? 'active' : ''}`}>
                <div className="sidebar-menu-close">
                    <button className="xb-close" onClick={() => setSitebarState(false)}></button>
                </div>
                <div className="sidebar-top mb-10" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', padding: '30px' }}>
                    <h2 style={{ color: '#023047' }}>Talk to Our Immigration Experts</h2>
                    <p style={{ fontSize: '14px', color: '#666' }}>Fill out the form and our experts will get in touch with you shortly.</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <div style={{ width: '20px', height: '2px', backgroundColor: '#00c389', marginRight: '5px', borderRadius: '2px' }}></div>
                        <div style={{ flexGrow: 1, height: '2px', backgroundColor: '#000', borderRadius: '2px' }}></div>
                        <div style={{ width: '20px', height: '2px', backgroundColor: '#00c389', marginLeft: '5px', borderRadius: '2px' }}></div>
                    </div>
                    <ContactForm />
                </div>
            </div>

            <div className={`body-overlay ${sitebarActive || searchActive ? 'active' : ''}`}></div>
        </header>
    );
};

export default Header3;
