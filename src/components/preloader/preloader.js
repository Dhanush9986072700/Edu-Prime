import React from 'react';
import '../../sass/components/_preloader.scss';

const Loader = () => {
  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="text-spinner"></div>
        <p className="preloader-text">Edu Prime Overseas – Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
