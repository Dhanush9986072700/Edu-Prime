import React from 'react'
import CountUp, { useCountUp } from 'react-countup';

const FunFact = [
    {
        title: '30',
        subTitle: 'We Have Worked With Clients',
        symbol: 'K',
    },
    {
        title: '100',
        subTitle: 'Successful Visa Process Rate',
        symbol: '%',
    },
    {
        title: '1',
        subTitle: 'Application Approval Processing Time',
        symbol: 'DAY',
    }

]


const StudentFunFact = (props) => {

    useCountUp({
        end: '56656',
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });


    return (

        <section className="fanfact pos-rel">
            <div className="container">
                <div className="row g-0">
                    {FunFact.map((funfact, fitem) => (
                        <div className="col-lg-4 col-md-4" key={fitem}>
                            <div className="xb-fanfact xb-fanfact1">
                                <div className="xb-item--inner">
                                    <h2 className="xb-item--number"><span className="xbo" data-count="30"><CountUp end={funfact.title} enableScrollSpy /></span><span className="suffix">{funfact.symbol}</span></h2>
                                    <span className="xb-item--dots"><span></span><span></span><span></span></span>
                                    <h5 className="xb-item--title">{funfact.subTitle}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="fanfact-shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":-70}'>
                        <img src="assets/img/shape/c_shape1.png" alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":80}'>
                        <img src="assets/img/shape/c_shape2.png" alt="" />
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default StudentFunFact;