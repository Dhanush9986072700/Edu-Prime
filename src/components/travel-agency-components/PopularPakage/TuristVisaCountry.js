import React, { useState } from 'react';
import Pakage from '../../../api/pakageData';

const TuristVisaCountry = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(15); // Show first 15 initially

  const filteredPakage = Pakage.filter(pkg =>
    pkg.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 15); // Load 15 more
  };

  const visiblePakage = filteredPakage.slice(0, visibleCount);

  return (
    <section className="pb-90">
      <div className="container">
        {/* Title + Search */}
        <div className="row align-items-center justify-content-center mb-4 gy-3">
          <div className="col-lg-6 col-md-12 text-center">
            <div className="text-center">
              <h2>Popular Tourist Visa Packages</h2>
            </div>
          </div>
          <div className="search-bar-wrapper text-center my-4">
            <div className="custom-search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Search country..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(15); // Reset visible count on search
                }}
              />
            </div>
          </div>
        </div>

        {/* Visa Cards */}
        <div className="row mt-none-30 pt-10">
          {visiblePakage.length > 0 ? (
            visiblePakage.map((pakage, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="xb-package mt-30">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <img
                        src={pakage.pImg}
                        alt={`${pakage.country} visa`}
                        loading="lazy"
                      />
                    </div>
                    <div className="xb-item--holder">
                      <div className="xb-item--meta ul_li_between mb-15">
                        <div className="xb-item--country ul_li">
                          <img src={pakage.flag} alt={`${pakage.country} flag`} loading="lazy" />
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

        {/* View More Button */}
        {visibleCount < filteredPakage.length && (
          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={handleViewMore}
              aria-label="Load more tourist visa packages"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TuristVisaCountry;
