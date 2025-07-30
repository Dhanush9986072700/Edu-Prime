import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Loader from '../../components/preloader/preloader';

// Lazy-loaded full pages
const Homepage = lazy(() => import('../HomePage/HomePage'));
const AboutUsPage = lazy(() => import('../../main-component/Pages/AboutUsPage/AboutUsPage'));
const ContactPage = lazy(() => import('../ContactPage/ContactPage'));
const StudyVisa = lazy(() => import('../../main-component/Pages/StudyVisa/Study-visa'));
const TouristVisa = lazy(() => import('../Pages/TouristVisa/tourist-visa'));
const InvestorVisa = lazy(() => import('../../main-component/Pages/Investor/InvestorVisa'));
const JobseakerVisa = lazy(() => import('../../main-component/Pages/JobseakerVisa/JobseakerVisa'));
const NotFound = lazy(() => import('../../components/NotFound/NotFound'));

// ✅ Blog list & detail pages
const BlogListPage = lazy(() => import('../BlogRightPage/BlogRightPage'));
const BlogDetailsPage = lazy(() => import('../../main-component/BlogDetails/BlogDetails'));

const AllRoute = () => {
  const [preload, setPreload] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPreload(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (preload) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      <div className="App" lang="en">
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogDetailsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/study-visa" element={<StudyVisa />} />
              <Route path="/tourist-visa" element={<TouristVisa />} />
              <Route path="/investor-visa" element={<InvestorVisa />} />
              <Route path="/jobseeker-visa" element={<JobseakerVisa />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
};

export default AllRoute;
