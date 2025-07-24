import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

// Lazy loaded pages
const Homepage = lazy(() => import('../HomePage/HomePage'));
const AboutUsPage = lazy(() => import('../../main-component/Pages/AboutUsPage/AboutUsPage'));
const BlogDetails = lazy(() => import('../BlogDetails/BlogDetails'));
const ContactPage = lazy(() => import('../ContactPage/ContactPage'));
const StudyVisa = lazy(() => import('../../main-component/Pages/StudyVisa/Study-visa'));
const TouristVisa = lazy(() => import('../Pages/TouristVisa/tourist-visa'));
const InvestorVisa = lazy(() => import('../../main-component/Pages/Investor/InvestorVisa'));
const JobseakerVisa = lazy(() => import('../../main-component/Pages/JobseakerVisa/JobseakerVisa'));

const NotFound = lazy(() => import('../../components/NotFound/NotFound'));


const AllRoute = () => {
  return (
    <HelmetProvider>
      <div className="App" lang="en">
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div style={{ padding: "100px", textAlign: "center" }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/blog-single/:slug" element={<BlogDetails />} />
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
