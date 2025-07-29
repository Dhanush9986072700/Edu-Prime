import React from 'react';
import '../../sass/components/_preloader.scss';

const Loader = () => {
  return (
    <div class="preloader">
  <div class="preloader-inner">
    <div class="bounce-loader">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="preloader-text">Preparing your experience... Please hold tight ✨</div>
  </div>
</div>

  );
};

export default Loader;
