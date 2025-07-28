import React from 'react';
import Slider from "react-slick";
import TravelFunFact from '../../components/travel-agency-components/TravelFunFact/TravelFunFact';
import logo from '../../images/icon/google.svg';
import Bg from '../../images/bg/testimonial_bg.webp';

// Testimonials
const testimonial = [
    {
      id: '01',
      Des: "EduPrime's consultancy services were excellent. Special thanks to Jostan Sir for guiding me through every step. From visa help to answering questions about the UK, the support was amazing. I'm grateful for the smooth experience and highly recommend EduPrime to anyone seeking professional assistance abroad.",
      Title: 'Sujith John',
    },
    {
      id: '02',
      Des: "EduPrime helped me achieve my international goals with confidence. Their team offered expert advice on education and overseas jobs. The process was simple and stress-free. I would strongly recommend EduPrime to students and professionals planning to explore global opportunities and take the next big step.",
      Title: 'Vikesh Dsouza',
    },
    {
      id: '03',
      Des: "The team at EduPrime truly understands the visa process. Roshal Ma’am and Jostan Sir were very responsive, patient, and supportive throughout. I always felt informed and prepared. It’s by far the best consultancy in Mangalore for anyone seeking help with international education or work.",
      Title: 'Jenisha',
    },
    {
      id: '04',
      Des: "EduPrime Overseas made the journey of studying in the UK feel simple and stress-free. Roshal Ma’am and Jostan Sir were incredibly helpful throughout. From college admission to visa approval, they handled everything with care. I’m truly thankful for their dedication and support at every step.",
      Title: 'Delison Menezes',
    },
    {
      id: '05',
      Des: "If you're looking for a reliable consultancy, EduPrime is the right choice. Their team handles everything professionally and makes the process easy to follow. I was confident from day one. I highly recommend EduPrime to anyone planning for studies, jobs, or immigration abroad.",
      Title: 'Nishchay M',
    }
  ];
  

// Generate dynamic color from name
const getInitialColor = (name) => {
  const colors = [
    '#F44336', '#E91E63', '#9C27B0', '#673AB7',
    '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',
    '#009688', '#4CAF50', '#8BC34A', '#CDDC39',
    '#FFC107', '#FF9800', '#FF5722', '#795548',
    '#607D8B'
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const AvatarLetter = ({ name }) => {
    const bgColor = getInitialColor(name);
    const initial = name.charAt(0).toUpperCase();
  
    return (
      <div className="avatar-initial" style={{
        backgroundColor: bgColor,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        color: '#fff',
        fontWeight: '600',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
        margin: 'auto',
      }}>
        {initial}
      </div>
    );
  };
  
  
  

const TravelTestimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 2 } },
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="testimonial travel pt-125 pb-130 bg_img" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="container">
        <div className="sec-title sec-title--travel text-center mb-60">
          <span className="subtitle">Client Feedback</span>
          <h2>Our Clients' Experiences</h2>
        </div>
        <div className="xb-carousel-inner">
          <div className="xb-testimonial-slider2 xb-swiper-container">
            <div className="swiper-wrapper">
              <Slider {...settings}>
                {testimonial.map((testimonial, tsm) => (
                  <div className="xb-testimonial4" key={tsm}>
                    <div className="xb-item--inner">
                      <div className="xb-item--author ul_li mb-20">
                        <div className="xb-item--avatar">
                          <AvatarLetter name={testimonial.Title} />
                        </div>
                        <h3 className="xb-item--name">{testimonial.Title}</h3>
                      </div>
                      <div className="xb-item--content mb-50">
                        “ {testimonial.Des} ”
                      </div>
                      <div className="xb-item--bottom ul_li_between">
                        <div className="xb-item--ratting">
                          <img src={logo} alt="google rating" />
                        </div>
                        <ul className="xb-star-rating">
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <TravelFunFact />
      </div>
    </section>
  );
};

export default TravelTestimonial;
