// src/api/service.js
import React from 'react';
import { Link } from "react-router-dom";
import { FaGraduationCap, FaPlaneDeparture, FaMoneyBillWave, FaBriefcase, FaGlobe } from 'react-icons/fa';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Services = [
    {
        Id: '1',
        iconColor: 'color1',
        sIcon: <FaGraduationCap style={{ color: 'white', width: '30px', height: '30px' }} />,
        title: <Link to="/study-visa" onClick={ClickHandler}>Study Visa</Link>,
        description: 'Complete support for university applications and visa processing, making your study abroad journey smooth and stress-free.',
    },
    {
        Id: '2',
        iconColor: 'color2',
        sIcon: <FaPlaneDeparture style={{ color: 'white', width: '30px', height: '30px' }} />,
        title: <Link to="/TouristVisa" onClick={ClickHandler}>Tourist Visa</Link>,
        description: 'Hassle-free tourist visa services with quick approvals and flexible packages for top travel destinations worldwide.',
    },

    {
        Id: '3',
        iconColor: 'color3',
        sIcon: <FaMoneyBillWave style={{ color: 'white', width: '30px', height: '30px' }} />,
        title: <Link to="/InvestorVisa" onClick={ClickHandler}>Investor Visa</Link>,
        description: 'Expert guidance on residency by investment programs to help entrepreneurs expand their business globally.',
    },
    {
        Id: '4',
        iconColor: 'color4',
        sIcon: <FaBriefcase style={{ color: 'white', width: '30px', height: '30px' }} />,
        title: <Link to="/JobseakerVisa" onClick={ClickHandler}>Job Seeker Visa</Link>,
        description: 'End-to-end support for job seekers including resume help, market insights, and relocation assistance for global careers.',
    },
    {
        Id: '6',
        iconColor: 'color5',
        sIcon: <FaGlobe size={40} />,
    },
    {
        Id: '6',
        iconColor: 'color5',
        sIcon: <FaGlobe size={40} />,
    },
];

export default Services;
