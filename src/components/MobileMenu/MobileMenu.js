import React, { Fragment, useState } from 'react'; import List from "@mui/material/List"; import ListItem from "@mui/material/ListItem"; import Collapse from "@mui/material/Collapse"; import { Link } from "react-router-dom"; const menus = [ { id: 1, title: 'Home', link: '/' }, { id: 2, title: 'About Us', link: '/about' }, { id: 3, title: 'Study Visa', link: '/Study-visa' }, { id: 4, title: 'Tourist Visa', link: '/tourist-visa' }, { id: 5, title: 'Investor Visa', link: '/investor-visa' }, { id: 6, title: 'Jobseeker Visa', link: '/jobseeker-visa' }, { id: 7, title: 'Contact Us', link: '/contact' } ]; const MobileMenu = ({ setSearchActive, setMobailState }) => { const [openId, setOpenId] = useState(null); const handleClick = () => { window.scrollTo(10, 0); if (setMobailState) setMobailState(false); }; return ( <nav aria-label="Mobile navigation menu">
  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}> {menus.map((item) => ( <ListItem key={item.id} style={{
              borderBottom: '1px solid #eee',
              padding: '12px 15px',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}> {item.submenu ? ( <Fragment>
        <div onClick={()=> setOpenId(openId === item.id ? null : item.id)} style={{ display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    cursor: 'pointer',
                    color: '#000'
                  }} role="button" aria-expanded={openId === item.id} aria-controls={`submenu-${item.id}`} > <span>{item.title}</span>
          <i className={`fa ${openId===item.id ? 'fa-angle-up' : 'fa-angle-down' }`} style={{ marginLeft: '10px', fontSize: '14px' }}></i>
        </div>
        <Collapse in={openId===item.id} timeout="auto" unmountOnExit>
          <List id={`submenu-${item.id}`} style={{ paddingLeft: '10px', marginTop: '8px' }}> {item.submenu.map((sub) => ( <ListItem key={sub.id} style={{ padding: '8px 10px', backgroundColor: '#f9f9f9' }}>
              <Link onClick={handleClick} to={sub.link} style={{
                            fontSize: '14px',
                            color: '#444',
                            textDecoration: 'none',
                            display: 'block',
                            width: '100%',
                          }}> {sub.title} </Link>
            </ListItem> ))} </List>
        </Collapse>
      </Fragment> ) : (
      <Link to={item.link} onClick={handleClick} style={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                  color: '#000',
                  textDecoration: 'none',
                  display: 'block',
                  width: '100%'
                }} aria-label={`Navigate to ${item.title}`}> {item.title} </Link> )}
    </ListItem> ))} </ul> {/* Mobile Buttons and Social Links */} <div style={{ padding: '15px', marginTop: '20px' }}>
    <a href="https://topmate.io/jostan" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 0px',
            backgroundColor: '#104b83',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginBottom: '10px',
          }}> Personal Consultation </a> {/* Social Icons */} <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '25px' }}>
      <a href="https://www.facebook.com/share/1EyPjQNkM2/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <i className="fab fa-facebook-f" style={{ color: '#4267B2', fontSize: '20px' }}></i>
      </a>
      <a href="https://www.instagram.com/jostan.uk?igsh=dTdua29qYTJwcjZh" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <i className="fab fa-instagram" style={{ color: '#C13584', fontSize: '20px' }}></i>
      </a>
      <a href="https://uk.linkedin.com/in/jostan-dsouza-965304117" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i className="fab fa-linkedin-in" style={{ color: '#0077B5', fontSize: '20px' }}></i>
      </a>
      <a href="https://wa.me/919611234182" target="_blank" rel="noopener noreferrer" aria-label="whatsapp chat">
        <i className="fab fa-whatsapp" style={{ color: '#1DA1F2', fontSize: '20px' }}></i>
      </a>
    </div>
  </div>
</nav> ); }; export default MobileMenu;