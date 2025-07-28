import React from 'react'
import { Link } from 'react-router-dom'


const PageTitle = (props) => {
    return (
        <section className="breadcrumb pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="breadcrumb__content">
                   
                    <ul className="breadcrumb__list clearfix">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item">{props.pagesub}</li>
                    </ul>
                </div>
            </div>
            {/* <div className="breadcrumb__circle">
                <span className="big" data-parallax='{"y" : 100, "scale" : 0.1}'></span>
                <span className="small" data-parallax='{"y" : 100, "scale" : 0.1}'></span>
            </div>
            <div className="breadcrumb__shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":80}'>
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":-90}'>
                        <img src={shape2} alt="" />
                    </div>
                </div>
            </div> */}
        </section >
    )
}

export default PageTitle;