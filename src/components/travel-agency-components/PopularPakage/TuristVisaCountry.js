// src/components/Visa/TuristVisaCountry.js

import React, { useState } from 'react';
import Pakage from '../../../api/pakageData';

const TuristVisaCountry = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPakage = Pakage.filter(pkg =>
    pkg.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="pb-90">
      <div className="container">
        {/* Title + Search */}
        <div className="row align-items-center justify-content-between mb-4 gy-3">
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <div className="sec-title sec-title--travel">
              <span className="subtitle">Popular Package</span>
              <h2>Popular Tourist Visa Packages</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center justify-content-lg-end">
            <div className="search-bar-wrapper">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search Country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Visa Cards */}
        <div className="row mt-none-30 pt-10">
          {filteredPakage.length > 0 ? (
            filteredPakage.map((pakage, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="xb-package mt-30">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <img src={pakage.pImg} alt={`${pakage.country} visa`} />
                    </div>
                    <div className="xb-item--holder">
                      <div className="xb-item--meta ul_li_between mb-15">
                        <div className="xb-item--country ul_li">
                          <img src={pakage.flag} alt={`${pakage.country} flag`} />
                          <h2 className="xb-item--title">{pakage.country}</h2>
                        </div>
                        {pakage.tag && (
                          <div className="xb-course-btn">
                            <button className="btn btn-sm btn-outline-primary">
                              {pakage.tag}
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="xb-item--desc small text-muted mt-2">{pakage.title}</p>
                      <ul className="xb-item--info ul_li_between">
                        {pakage.highlights.map((point, idx) => (
                          <li key={idx}><strong>{point}</strong></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No packages found for "<strong>{searchQuery}</strong>"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TuristVisaCountry;
