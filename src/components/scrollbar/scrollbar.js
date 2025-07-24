import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './style.css';

const Scrollbar = () => {
  return (
    <div className="col-lg-12" role="navigation" aria-label="Scroll to top">
      <div className="header-menu">
        <ul className="smothscroll">
          <li>
            <AnchorLink
              href="#scrool"
              aria-label="Scroll to Top"
              className="scroll-to-top-link"
            >
              <i className="ti-arrow-up" aria-hidden="true"></i>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;
