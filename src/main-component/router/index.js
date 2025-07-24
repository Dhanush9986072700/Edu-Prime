import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import AboutUsPage from '../Pages/AboutUsPage/AboutUsPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import ContactPage from '../ContactPage/ContactPage';
import StudyVisa from '../Pages/StudyVisa/Study-visa';
import Canada from '../CountryList/Canada';
import Australia from '../CountryList/Australia';
import Usa from '../CountryList/usa';
import TouristVisa from '../Pages/TouristVisa/TouristVisa';
import InvestorVisa from '../../main-component/Pages/Investor/InvestorVisa';
import JobseakerVisa from '../../main-component/Pages/JobseakerVisa/JobseakerVisa';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';




const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} /> 
          <Route path="study-visa" element={<StudyVisa />} />
          <Route path="/Study-visa/canada" element={<Canada />} />
          <Route path="/Study-visa/australia" element={<Australia />} />
          <Route path="/Study-visa/USA" element={<Usa />} />
          <Route path="/TouristVisa" element={<TouristVisa />} />
          <Route path="/InvestorVisa" element={<InvestorVisa />} />
          <Route path="/JobseakerVisa" element={<JobseakerVisa />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
