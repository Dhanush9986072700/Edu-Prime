import React from 'react';
import CountryList from '../../../api/country'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aIcon1 from '../../../images/icon/h_star.png'


const CountrySection = (props) => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="country pt-120 pb-120">
  <div className="container">
    <div className="sec-title style-2 text-center mb-55">
      <span className="sec-title--sub">
        <img src={aIcon1} alt="" />countries<img src={aIcon1} alt="" />
      </span>
      <h3 className="sec-title--heading">
        Best Countries to Study <br /> Abroad
      </h3>
    </div>
    
    <div className="xb-country-slide">
      <Slider {...settings}>
        {CountryList.slice(18, 24).map((country, cnt) => (
          <div className="xb-country2" key={cnt}>
            <div className="xb-item--inner text-center">
              <div className="xb-item--flag mb-20">
                <img src={country.sIcon} alt="" />
              </div>
              <h3 className="xb-item--title">{country.title}</h3>
              <Link onClick={ClickHandler} to={country.link || `/country-single/${country.slug}`} className="xb-item--link"></Link>

            </div>
          </div>
        ))}
      </Slider>
    </div>

    {/* 👉 Two Buttons Below Country Section */}
    <div className="text-center mt-60">
      <Link to="/Study-visa/all-countrys"  className="grd-btn me-3" >
        View All Countries
      </Link>
      {/* <Link to="/all-courses" className="grd-btn me-3">
        All Courses
      </Link> */}
    </div>
  </div>
</section>

    )
}

export default CountrySection;