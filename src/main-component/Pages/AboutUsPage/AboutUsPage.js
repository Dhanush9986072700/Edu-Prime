import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Header3 from '../../../components/header3/Header3';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import Footer from '../../../components/footer/Footer';
import StudentFunFact from '../../../components/student-visa-components/StudentFunFact/StudentFunFact';
import ContactSection from '../../../components/ContactSection';
import aboutImg from '../../../images/about/About-banner-image.webp';
import MissionVision from '../../../components/about/MissionVision';
import AboutServices from '../../../components/about/AboutServices';
import Testimonial from '../../../components/Testimonial/Testimonial';



const AboutUsPage = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>About Us | Edu Prime - Trusted Visa & Immigration Experts</title>
        <meta name="description" content="Learn about Edu Prime – your trusted partner for affordable, expert immigration and visa consulting services. Discover our mission, vision, and success stories." />
        <meta name="keywords" content="About Edu Prime, Immigration Experts, Visa Consulting, Our Mission, Our Vision, Study Visa, Work Visa, Investor Visa" />
        <link rel="canonical" href="https://www.eduprime.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="About Edu Prime - Visa & Immigration Consulting Experts" />
        <meta property="og:description" content="Explore Edu Prime's mission and story. We simplify immigration and provide affordable visa solutions globally." />
        <meta property="og:url" content="https://www.eduprime.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.eduprime.com/images/social-share-image.png" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Edu Prime - Visa & Immigration Consulting Experts" />
        <meta name="twitter:description" content="Explore Edu Prime's mission and story. We simplify immigration and provide affordable visa solutions globally." />
        <meta name="twitter:image" content="https://www.eduprime.com/images/social-share-image.png" />
      </Helmet>

      <Header3 />
      <section className="about pt-170">
        <div className="container">
          <div className="row mb-40 align-items-center">
            <div className="col-lg-12">
              <div className="sec-title mb-20">
                <h2 className="wow skewIn mb-20">
                  Eduprime Overseas <br /> <span>About us</span>
                </h2>
                <p className="col-lg-12 ">At Eduprime Overseas, we are more than just an educational consultancy—we are your trusted partner in shaping a successful future abroad. Since our founding in 2015, we have guided thousands of students, professionals, and investors in pursuing their global dreams through world-class education and immigration opportunities.
                  <br /> <br />
                  Whether you're a student seeking admission to top universities, an entrepreneur planning to invest or start a business abroad, or a jobseeker aiming for global work opportunities, Eduprime is here to support you at every step. Our experienced team offers expert advice, personalized counselling, and complete assistance—from university selection and visa applications to job seeker pathways and business migration.
                  <br /><br />
                  We proudly serve major destinations including the <span style={{ fontWeight: 700 }}>
                    UK, Canada, USA, Australia, New Zealand, Europe (Germany, Hungary, Poland, Latvia, Estonia, Czech Republic, and more), Ireland, France, Singapore, and Gulf countries </span> (including UAE and Dubai).</p>
              </div>
            </div>
          </div>
          <div className="xb-about__img">
            <img src={aboutImg} alt="About Edu Prime immigration experts" loading="lazy" />
          </div>
        </div>
      </section>

      <StudentFunFact />

      <MissionVision />
      <AboutServices />
      <section className="why-choose-modern pt-60 pb-60">
        <div className="container">
          <h2 className="section-heading text-center mb-50 wow fadeInUp">Why Choose Us?</h2>
          <div className="why-grid">

            <div className="why-card wow fadeInUp" data-wow-delay="0.1s">
              <div className="icon-box orange">
                <i className="fas fa-globe" />
              </div>
              <h4>Supportive Environment</h4>
              <p>
                Our friendly and experienced team creates a stress-free process from start to finish,
                making you feel confident and supported at every step of your visa journey.
              </p>
            </div>

            <div className="why-card wow fadeInUp" data-wow-delay="0.2s">
              <div className="icon-box blue">
                <i className="fas fa-users" />
              </div>
              <h4>Student-Friendly Policies</h4>
              <p>
                We prioritize students' needs with customized study visa guidance, flexible options,
                and constant updates to match current immigration policies in your preferred country.
              </p>
            </div>

            <div className="why-card wow fadeInUp" data-wow-delay="0.3s">
              <div className="icon-box green">
                <i className="fas fa-graduation-cap" />
              </div>
              <h4>Quality Higher Education</h4>
              <p>
                We partner with reputed global universities and institutions, ensuring our students get access
                to world-class education and brighter career prospects abroad.
              </p>
            </div>

            <div className="why-card wow fadeInUp" data-wow-delay="0.4s">
              <div className="icon-box yellow">
                <i className="fas fa-chart-line" />
              </div>
              <h4>Opportunities for Growth</h4>
              <p>
                From job seeker visas to investor support, we help you explore long-term growth opportunities
                across career, business, and lifestyle — all in one place.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Testimonial />

      <ContactSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default AboutUsPage;
