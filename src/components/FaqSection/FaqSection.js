
import React, { useState } from 'react';
import fImg1 from '../../images/faq/Frequently-Asked-Questions.webp';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const FaqSection = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="faq pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="xb-faq-content">
                            <div className="sec-title mb-125">
                                <h2 className="mb-30 wow skewIn">Frequently Asked Questions</h2>
                                <p>Quick answers to clear your doubts. Know your visa options, timelines, and what it takes to begin your journey with confidence.</p>
                            </div>
                            <div className="faq-img">
                                <img src={fImg1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="xb-faq">
                            <Accordion open={open} toggle={toggle} className='accordion_box'>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="1" className='acc-btn'>How does Edu Prime Overseas help with international student visa applications?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1" className='acc_body'>
                                        <div className="content">
                                            <p>We guide students through the entire process — from choosing the right university and preparing documents to applying for study visas and securing approvals for top destinations like the USA, UK, Canada, and Europe.</p>
                                            
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="2" className='acc-btn'>Can I get a tourist visa easily with Edu Prime’s assistance?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2" className='acc_body'>
                                        <div className="content">
                                            <p>Yes! We offer fast and reliable tourist visa support with complete documentation help, travel planning, and embassy appointment guidance for countries like France, Japan, UAE, and more.</p>
                                            
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="3" className='acc-btn'>What are the benefits of applying for an investor visa through Edu Prime?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3" className='acc_body'>
                                        <div className="content">
                                            <p>Our experts simplify the investor visa process by helping you meet investment requirements, select the best residency-by-investment program, and manage legal documentation — making global expansion easier.</p>
                                            
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="4" className='acc-btn'>Which countries offer job seeker visas and how does Edu Prime assist?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="4" className='acc_body'>
                                        <div className="content">
                                            <p>We support job seekers in applying for visas to countries like Germany, Austria, and Portugal with services like resume building, market insights, and end-to-end visa support.</p>
                                            
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="5" className='acc-btn'>Why should I choose Edu Prime Overseas as my visa consultant?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="5" className='acc_body'>
                                        <div className="content">
                                            <p>With 16+ visa categories, 25K+ successful cases, and a dedicated team of specialists, Edu Prime offers personalized, end-to-end visa solutions tailored to your goals — all under one trusted roof.</p>
                                            
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default FaqSection;
