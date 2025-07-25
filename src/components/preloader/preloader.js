import React from 'react';
import '../../sass/components/_preloader.scss';
import handLoader from '../../images/preload/Progress of loading hand.gif'; // adjust path if needed

const Loader = () => {
    return (
      <div className="preloader">
        <div className="preloader-inner">
          <img src={handLoader} alt="Loading..." className="gif-loader" />
          <p className="preloader-text">Edu Prime Overseas – Your Trusted Visa Consultant</p>
        </div>
      </div>
    );
  };

export default Loader;
