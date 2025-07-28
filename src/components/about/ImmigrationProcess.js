import React from 'react';
import about from '../../images/about/Immigration Guidance.webp';

const ImmigrationProcess = () => {
    return (
        <section className="about pos-rel pb-130">
            <div className="container">
                <div className="sec-title mb-55">
                    <h2 className="mb-0 wow skewIn">Our Immigration Process</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-10">
                        <div className="about__content">
                            <ul className="about-list ul_li list-unstyled">
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number">1</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">Define Your Purpose</h3>
                                            <p className="xb-item--description">
                                                Start by identifying your goal — whether it’s studying, traveling, working, or investing abroad. Our advisors will help you choose the right country and visa category that aligns with your aspirations.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number color-2">2</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">Prepare Your Documents</h3>
                                            <p className="xb-item--description">
                                                Gather all necessary paperwork, including passports, academic transcripts, financial statements, and any other required forms. We review and organize your documents to ensure they meet each embassy’s guidelines.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number color-3">3</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">Talk to Our Experts</h3>
                                            <p className="xb-item--description">
                                                Leverage Edu Prime’s expertise by having our team assist in submitting your application. We offer interview preparation, document filing, and constant guidance to streamline the process.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number color-4">4</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">Get Visa & Travel Assistance</h3>
                                            <p className="xb-item--description">
                                                After approval, we don’t stop there — we help with travel arrangements and provide pre-departure briefings. You’ll receive support even after you arrive, making your transition abroad as smooth as possible.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ✅ Meaningful alt text for SEO and screen readers */}
            <div className="about__img">
                <img src={about} alt="Immigration guidance process illustration" />
            </div>
        </section>
    );
};

export default ImmigrationProcess;
