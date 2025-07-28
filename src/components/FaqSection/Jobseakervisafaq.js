
import React, { useState } from 'react';
import fImg1 from '../../images/faq/Frequently-Asked-Questions.webp';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Jobseakervisafaq = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="faq pt-50 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="xb-faq-content">
                            <div className="sec-title mb-125">
                                <h2 className="mb-30 wow skewIn">Common questions <br /> <span> answered</span></h2>
                                <p>At the heart of our commitment to providing <br /> exceptional immigration solutions
                                    stands our trusted</p>
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
                                    <AccordionHeader targetId="1" className='acc-btn'>Am I eligible for a Canada study visa?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1" className='acc_body'>
                                        <div className="content">
                                            <p>To be eligible, you need to secure an offer from a Designated Learning Institution (DLI) and show you have enough funds to cover your tuition and living expenses.</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Valid passport & academic transcripts</li>
                                                <li><i className="far fa-check"></i>Proof of funds: Tuition + CAD 20,635</li>
                                                <li><i className="far fa-check"></i>English proficiency (IELTS/PTE/TOEFL)</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="2" className='acc-btn'>How long does the study visa process take?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2" className='acc_body'>
                                        <div className="content">
                                            <p>Processing time depends on your country and application volume, but it generally takes 3 to 6 weeks after biometrics submission.</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Submit early to avoid intake delays</li>
                                                <li><i className="far fa-check"></i>Ensure complete documents to avoid rejections</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="3" className='acc-btn'>Can I work while studying in Canada?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3" className='acc_body'>
                                        <div className="content">
                                            <p>Yes, international students can now work up to 24 hours per week during academic terms and full-time during scheduled breaks.</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>No extra permit required</li>
                                                <li><i className="far fa-check"></i>Work rights apply only to DLI students</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="4" className='acc-btn'>What are the financial requirements for a Canada student visa?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="4" className='acc_body'>
                                        <div className="content">
                                            <p>As of 2025, students must show proof of CAD 20,635 for living expenses annually, in addition to tuition.</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Acceptable funds: GIC, bank balance, loans</li>
                                                <li><i className="far fa-check"></i>Proof must be recent and reliable</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="5" className='acc-btn'>Will I get a Post-Graduation Work Permit (PGWP)?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="5" className='acc_body'>
                                        <div className="content">
                                            <p>Yes, if you complete an eligible full-time program at a DLI, you can stay and work in Canada for up to 3 years.</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Program must be at least 8 months long</li>
                                                <li><i className="far fa-check"></i>Helps you gain Canadian work experience for PR</li>
                                            </ul>
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
export default Jobseakervisafaq;
