import React from 'react'
import rating from '../../../images/icon/h_star.png'
import shape from '../../../images/shape/cs_01.png'
import shape2 from '../../../images/shape/cs_02.png'
import shape3 from '../../../images/shape/cs_03.png'
import shape4 from '../../../images/shape/cs_04.png'
import Bg from '../../../images/bg/cf_bg.jpg'
import ContactForm from './ContactForm'

const StudentContactSection = (props) => {
    return (
        <section className="contact gray-bg-2">
            <div className="container">
                <div className="xb-contact2 pos-rel">
                    <div className="xb-contact2__bg" style={{ backgroundImage: `url(${Bg})` }}></div>
                    <div className="col-lg-7">
                        <div className="xb-item--holder">
                            <div className="sec-title sec-title--white style-2 mb-35">
                                <span className="sec-title--sub"><img src={rating} alt=""/>Contact<img src={rating} alt=""/></span>
                                <h3 className="sec-title--heading">If You Have Any Question, Fell Free to <br/> Contact With Us.</h3>
                            </div>
                        </div>
                        <ContactForm/>
                    </div>
                    <div className="contact-shape">
                        <div className="shape shape--1">
                            <div className="shape-inner" data-parallax='{"x":-50,"y":60}'>
                                <img src={shape} alt=""/>
                            </div>
                        </div>
                        <div className="shape shape--2">
                            <div className="shape-inner" data-parallax='{"x":50,"y":-60}'>
                                <img src={shape2} alt=""/>
                            </div>
                        </div>
                        <div className="shape shape--3">
                            <div className="shape-inner" data-parallax='{"x":50}'>
                                <img src={shape3} alt=""/>
                            </div>
                        </div>
                        <div className="shape shape--4">
                            <div className="shape-inner" data-parallax='{"x":50,"y":60}'>
                                <img src={shape4} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentContactSection;