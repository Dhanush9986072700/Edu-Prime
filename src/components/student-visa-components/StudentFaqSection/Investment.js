
import React, { useState } from 'react';
import aIcon1 from '../../../images/icon/h_star.png'
import aIcon2 from '../../../images/faq/Frequently-Asked-Questions.png';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Investment = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="faq pos-rel gray-bg-1 pt-120 pb-130">
            <div className="container">
                <div className="row align-items-center mb-30">
                    <div className="col-lg-6 col-md-7">
                        <div className="sec-title style-2 mb-30">
                            <span className="sec-title--sub"><img src={aIcon1} alt="" />Popular<img src={aIcon1} alt="" /></span>
                            <h3 className="sec-title--heading">Ask Question</h3>
                        </div>
                    </div>
                    
                </div>
                <div className="xb-faq xb-faq2">
                    <Accordion open={open} toggle={toggle} className='accordion_box'>
                        <AccordionItem className='block'>
                            <AccordionHeader targetId="1" className='acc-btn'>What is a student visa and why do I need one?
                                <span className="arrow"></span>
                            </AccordionHeader>
                            <AccordionBody accordionId="1" className='acc_body'>
                                <div className="content">
                                    <p>We offer comprehensive immigration and visa consulting services, <br />
                                        including visa application assistance, document preparation,</p>
                                    <ul>
                                        <li><i className="far fa-check"></i>Comprehensive Visa Assistance</li>
                                        <li><i className="far fa-check"></i>Visa Category Expertise</li>
                                        <li><i className="far fa-check"></i>Transparency and Communication</li>
                                    </ul>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className='block'>
                            <AccordionHeader targetId="2" className='acc-btn'>What is the consultation process like?
                                <span className="arrow"></span>
                            </AccordionHeader>
                            <AccordionBody accordionId="2" className='acc_body'>
                                <div className="content">
                                    <p>We offer comprehensive immigration and visa consulting services, <br />
                                        including visa application assistance, document preparation,</p>
                                    <ul>
                                        <li><i className="far fa-check"></i>Comprehensive Visa Assistance</li>
                                        <li><i className="far fa-check"></i>Visa Category Expertise</li>
                                        <li><i className="far fa-check"></i>Transparency and Communication</li>
                                    </ul>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className='block'>
                            <AccordionHeader targetId="3" className='acc-btn'>How much do your services cost?
                                <span className="arrow"></span>
                            </AccordionHeader>
                            <AccordionBody accordionId="3" className='acc_body'>
                                <div className="content">
                                    <p>We offer comprehensive immigration and visa consulting services, <br />
                                        including visa application assistance, document preparation,</p>
                                    <ul>
                                        <li><i className="far fa-check"></i>Comprehensive Visa Assistance</li>
                                        <li><i className="far fa-check"></i>Visa Category Expertise</li>
                                        <li><i className="far fa-check"></i>Transparency and Communication</li>
                                    </ul>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className='block'>
                            <AccordionHeader targetId="4" className='acc-btn'>How do I get started with your services?
                                <span className="arrow"></span>
                            </AccordionHeader>
                            <AccordionBody accordionId="4" className='acc_body'>
                                <div className="content">
                                    <p>We offer comprehensive immigration and visa consulting services, <br />
                                        including visa application assistance, document preparation,</p>
                                    <ul>
                                        <li><i className="far fa-check"></i>Comprehensive Visa Assistance</li>
                                        <li><i className="far fa-check"></i>Visa Category Expertise</li>
                                        <li><i className="far fa-check"></i>Transparency and Communication</li>
                                    </ul>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className='block'>
                            <AccordionHeader targetId="5" className='acc-btn'>What is your success rate with visa applications?
                                <span className="arrow"></span>
                            </AccordionHeader>
                            <AccordionBody accordionId="5" className='acc_body'>
                                <div className="content">
                                    <p>We offer comprehensive immigration and visa consulting services, <br />
                                        including visa application assistance, document preparation,</p>
                                    <ul>
                                        <li><i className="far fa-check"></i>Comprehensive Visa Assistance</li>
                                        <li><i className="far fa-check"></i>Visa Category Expertise</li>
                                        <li><i className="far fa-check"></i>Transparency and Communication</li>
                                    </ul>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
};
export default Investment;
