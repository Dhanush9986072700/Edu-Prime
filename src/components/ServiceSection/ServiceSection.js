import React from 'react';
import { Link } from "react-router-dom";
import { FaGraduationCap, FaPlaneDeparture, FaMoneyBillWave, FaBriefcase, } from 'react-icons/fa';
import sBg from '../../images/bg/service_bg.png';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const ServiceSection = () => {
    const services = [
        {
            id: '1',
            iconColor: 'color1',
            sIcon: <FaGraduationCap style={{ color: 'white', width: '30px', height: '30px' }} />,
            title: <Link to="/study-visa" onClick={ClickHandler}>Study Visa</Link>,
            description: 'Complete support for university applications and visa processing, making your study abroad journey smooth and stress-free.',
        },
        {
            id: '2',
            iconColor: 'color2',
            sIcon: <FaPlaneDeparture style={{ color: 'white', width: '30px', height: '30px' }} />,
            title: <Link to="/Tourist-Visa" onClick={ClickHandler}>Tourist Visa</Link>,
            description: 'Hassle-free tourist visa services with quick approvals and flexible packages for top travel destinations worldwide.',
        },
        {
            id: '3',
            iconColor: 'color3',
            sIcon: <FaMoneyBillWave style={{ color: 'white', width: '30px', height: '30px' }} />,
            title: <Link to="/Investor-Visa" onClick={ClickHandler}>Investor Visa</Link>,
            description: 'Expert guidance on residency by investment programs to help entrepreneurs expand their business globally.',
        },
        {
            id: '4',
            iconColor: 'color4',
            sIcon: <FaBriefcase style={{ color: 'white', width: '30px', height: '30px' }} />,
            title: <Link to="/jobseeker-visa" onClick={ClickHandler}>Job Seeker Visa</Link>,
            description: 'End-to-end support for job seekers including resume help, market insights, and relocation assistance for global careers.',
        },
    ];

    return (
        <section className="visa type pb-135" aria-labelledby="visa-types-heading">
            <div className="container">
                <div className="service-wrap pos-rel">

                    {/* Decorative background image - use aria-hidden */}
                    <div className="service-img-wrap" aria-hidden="true">
                        <div className="service-bg" style={{ backgroundImage: `url(${sBg})` }}></div>
                    </div>

                    <div className="sec-title wow skewIn pt-50">
                        <h2 id="visa-types-heading" className="mb-60">
                            Explore Our Visa Services
                        </h2>
                    </div>

                    <div className="row justify-content-md-center mt-none-30">
                        {services.map((service, index) => (
                            <div className="col-lg-6 col-md-6 mt-30" key={index}>
                                <article className="xb-service" itemScope itemType="https://schema.org/Service">
                                    <div className="xb-item--inner">
                                        <div className={`xb-item--icon mb-50 ${service.iconColor}`} aria-hidden="true">
                                            {service.sIcon}
                                        </div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-20" itemProp="name">
                                                {service.title}
                                            </h3>
                                            <p className="xb-item--description" itemProp="description">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
