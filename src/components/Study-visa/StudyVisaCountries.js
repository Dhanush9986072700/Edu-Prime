import React, { useState } from 'react';
import PopularPackageData from '../../api/studyvisadata';

const PopularPakage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterPackages = () => {
    if (!searchTerm.trim()) {
      return PopularPackageData.slice(0, 15); // show only first 15 by default
    }

    const lowerSearch = searchTerm.toLowerCase();

    // Priority sort: country match first
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
    <section className="pb-90 pt-90">
      <div className="container">
        <div className="text-center">
          <h3 className="section-sub-headline">Best Countries to Study Abroad</h3>
        </div>

        <div className="search-bar-wrapper text-center my-4">
  <div className="custom-search-bar">
    <span className="search-icon">
      🔍
    </span>
    <input
      type="text"
      className="search-input"
      placeholder="Search country..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
</div>


        <div className="row mt-none-30 pt-30">
          {visibleData.length > 0 ? (
            visibleData.map((pkg, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="xb-package mt-30">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <img src={pkg.pImg} alt={pkg.country} />
                    </div>
                    <div className="xb-item--holder">
                      <div className="xb-item--meta ul_li_between mb-15">
                        <div className="xb-item--country ul_li">
                          <img src={pkg.flag} alt={pkg.country} />
                          <h2 className="xb-item--title">{pkg.country}</h2>
                        </div>
                        <div className="xb-course-btn">
                          <span className="course-fields">{pkg.courseCount}</span>
                        </div>
                      </div>
                      <p className="xb-item--para">{pkg.title}</p>
                      <p className="xb-item--summary">{pkg.description}</p>
                      <ul className="xb-item--info">
                        {pkg.highlights.map((point, i) => (
                          <li key={i}><strong>{point}</strong></li>
                        ))}
                      </ul>
                      <div className="xb-item--spacer"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No results found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularPakage;
