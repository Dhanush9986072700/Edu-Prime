import React from "react";
import rating from '../../../images/icon/h_star.png'
import { Link } from 'react-router-dom'
import pimg1 from '../../../images/brand/br_01.png'
import pimg2 from '../../../images/brand/br_02.png'
import pimg3 from '../../../images/brand/br_03.png'
import pimg4 from '../../../images/brand/br_04.png'
import pimg5 from '../../../images/brand/br_05.png'
import pimg6 from '../../../images/brand/br_06.png'
import pimg7 from '../../../images/brand/br_07.png'
import pimg8 from '../../../images/brand/br_08.png'

import shape1 from '../../../images/shape/b_shape1.png'
import shape2 from '../../../images/shape/b_shape2.png'

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg8,
    },
]


const TopInstitutions = (props) => {

    return (

        <section className="brand gray-bg-2 pos-rel pt-120 pb-120">
            <div className="container">
                <div className="sec-title style-2 text-center mb-60">
                    <span className="sec-title--sub"><img src={rating} alt="" />top institutions<img src={rating} alt="" /></span>
                </div>
                <div className="xb-brand xb-brand1 ul_li">
                    {partners.map((partner, pitem) => (
                        <div className="xb-item--item" key={pitem}>
                            <Link to="/" className="xb-item--inner"><img src={partner.pImg} alt="" /></Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="brand-shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":-70}'>
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":80}'>
                        <img src={shape2} alt="" />
                    </div>
                </div>
            </div>

<div className="text-center mt-40">
    <Link to="/universities" className="grd-btn">
        View All Universities
    </Link>
</div>
        </section>
    );
}

export default TopInstitutions;