import React from 'react';
import Services from '../../api/service';
import sImg from '../../images/service/servicess-edu-prime.png';
import sBg from '../../images/bg/service_bg.png';

const ServiceSection = () => {
    return (
        <section className="visa type pb-135">
            <div className="container">
                <div className="service-wrap pos-rel">
                    <div className="service-img-wrap">
                        <div className="service-bg" style={{ backgroundImage: `url(${sBg})` }}></div>
                        <div className="service-img" style={{ backgroundImage: `url(${sImg})` }}></div>
                    </div>
                    <div className="sec-title wow skewIn pt-120">
                        <h2 className="mb-60">Visa types and eligibility</h2>
                    </div>
                    <div className="row justify-content-md-center mt-none-30">
                        {Services.slice(0, 6).map((service, index) => (
                            <div className="col-lg-4 col-md-6 mt-30" key={index}>
                                {service.title ? (
                                    <div className="xb-service">
                                        <div className="xb-item--inner">
                                            <div className={`xb-item--icon mb-50 ${service.iconColor || ''}`}>
                                                {service.sIcon}
                                            </div>

                                            <div className="xb-item--holder">
                                                <h3 className="xb-item--title mb-20">
                                                    {service.title}
                                                </h3>
                                                <div className="xb-item--description">
                                                    {service.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
