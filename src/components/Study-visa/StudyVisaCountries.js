import React, { useState } from 'react';
import PopularPackageData from '../../api/studyvisadata';

const PopularPakage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterPackages = () => {
    if (!searchTerm.trim()) {
      return PopularPackageData.slice(0, 15); // Default top 15
    }

    const lowerSearch = searchTerm.toLowerCase();

    const countryMatches = PopularPackageData.filter(pkg =>
      pkg.country.toLowerCase().includes(lowerSearch)
    );

    const otherMatches = PopularPackageData.filter(pkg => {
      const searchIn = `${pkg.title} ${pkg.country} ${pkg.courseCount} ${pkg.description} ${pkg.highlights.join(' ')}`.toLowerCase();
      return searchIn.includes(lowerSearch) && !pkg.country.toLowerCase().includes(lowerSearch);
    });

    return [...countryMatches, ...otherMatches];
  };

  const visibleData = filterPackages();

  return (
    <section className="pb-90 pt-90" aria-labelledby="study-abroad-heading">
      <div className="container">
        <div className="text-center">
          <h2 id="study-abroad-heading" className="section-sub-headline">
            Best Countries to Study Abroad
          </h2>
        </div>

        {/* Search Bar */}
        <div className="search-bar-wrapper text-center my-4">
          <div className="custom-search-bar" role="search">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search country"
            />
          </div>
        </div>

        {/* Country Cards */}
        <div className="row mt-none-30 pt-30">
          {visibleData.length > 0 ? (
            visibleData.map((pkg, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <article
                  className="xb-package mt-30"
                  itemScope
                  itemType="https://schema.org/Country"
                >
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <img
                        src={pkg.pImg}
                        alt={`Study in ${pkg.country}`}
                        loading="lazy"
                      />
                    </div>

                    <div className="xb-item--holder">
                      <div className="xb-item--meta ul_li_between mb-15">
                        <div className="xb-item--country ul_li">
                          <img
                            src={pkg.flag}
                            alt={`${pkg.country} flag`}
                            loading="lazy"
                          />
                          <h3 className="xb-item--title" itemProp="name">
                            {pkg.country}
                          </h3>
                        </div>

                        <div className="xb-course-btn">
                          <span className="course-fields">{pkg.courseCount}</span>
                        </div>
                      </div>

                      <p className="xb-item--para" itemProp="headline">{pkg.title}</p>
                      <p className="xb-item--summary" itemProp="description">{pkg.description}</p>

                      <ul className="xb-item--info">
                        {pkg.highlights.map((point, i) => (
                          <li key={i}><strong>{point}</strong></li>
                        ))}
                      </ul>

                      <div className="xb-item--spacer"></div>
                    </div>
                  </div>
                </article>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No results found for your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularPakage;
