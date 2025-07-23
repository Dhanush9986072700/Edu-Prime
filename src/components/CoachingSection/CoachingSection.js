import React from 'react';
import Coaching from '../../api/coaching'
import arrow from '../../images/icon/long_arrow_right.svg'
import { Link } from "react-router-dom";


const CoachingSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="coaching pt-130 ">
            <div className="container">
                <div className="row mt-none-30">
                    {Coaching.slice(0, 6).map((coaching, srv) => (
                        <div className="col-lg-4 col-md-6 mt-30" key={srv}>
                            <div className="xb-coaching">
                                <div className="xb-item--inner">
                                    <div className="xb-item--img">
                                        <Link onClick={ClickHandler} to={`/coaching-single/${coaching.slug}`}><img src={coaching.pImg} alt="" /></Link>
                                    </div>
                                    <div className="xb-item--holder pos-rel">
                                        <h3 className="xb-item--title"><Link onClick={ClickHandler} to={`/coaching-single/${coaching.slug}`}>{coaching.title}</Link></h3>
                                        <p className="xb-item--content">{coaching.description}</p>
                                        <Link onClick={ClickHandler} className="xb-item--link" to={`/coaching-single/${coaching.slug}`}><img src={arrow} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoachingSection;