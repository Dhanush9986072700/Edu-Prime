import React from 'react'
import fIcon1 from '../../../images/country/trv_flag_01.png'
import fIcon2 from '../../../images/country/trv_flag_02.png'
import fIcon3 from '../../../images/country/trv_flag_03.png'
import fIcon4 from '../../../images/country/trv_flag_04.png'

import icon1 from '../../../images/icon/cs_01.png'
import icon2 from '../../../images/icon/cs_02.png'
import icon3 from '../../../images/icon/cs_03.png'
import icon4 from '../../../images/icon/cs_04.png'

import Bg from '../../../images/shape/country_shape.png'


const Features = [
    {
        title: 'Germany',
        icon: fIcon1,
    },
    {
        title: 'Belgium',
        icon: fIcon2,
    },
    {
        title: 'Switzerland',
        icon: fIcon3,
    },
    {
        title: 'Vietnam',
        icon: fIcon4,
    },

]


const CountrySection = (props) => {

    return (

        <section className="country pt-md-100 pos-rel pt-170 pb-120">
            <div className="xb-country3__wrap ul_li_between">
                {Features.map((features, fitem) => (
                    <div className="xb-country3" key={fitem}>
                        <div className="xb-item--inner">
                            <div className="xb-item--flag">
                                <img src={features.icon} alt="" />
                            </div>
                            <h3 className="xb-item--title">{features.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="country-shape" style={{ backgroundImage: `url(${Bg})` }}></div>
            <h2 className="xb-strock-text-cat xb-strock-text">Popular Destination</h2>
            <div className="country-icon-shape">
                <div className="shape shape--1">
                    <img src={icon1} alt="" />
                </div>
                <div className="shape shape--2">
                    <img src={icon2} alt="" />
                </div>
                <div className="shape shape--3">
                    <img src={icon3} alt="" />
                </div>
                <div className="shape shape--4">
                    <img src={icon4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default CountrySection;