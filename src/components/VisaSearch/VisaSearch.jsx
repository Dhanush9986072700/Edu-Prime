import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/components/VisaSearchResults.scss';

const VisaSearchResults = ({ results, query }) => {
  if (!query) return null;

  const getLink = (item) => {
    const category = item.category?.toLowerCase();
    if (category?.includes('study')) return '/Study-visa';
    if (category?.includes('tourist')) return '/TouristVisa';
    if (category?.includes('invest')) return '/InvestorVisa';
    if (category?.includes('job')) return '/JobseakerVisa';
    if (category?.includes('service')) return '/services';
    return '/';
  };

  return (
    <div className="visa-search-results">
      <h2 className="search-heading">Search Results for: <strong>{query}</strong></h2>
      {results.length === 0 ? (
        <p className="no-results">No results found.</p>
      ) : (
        <ul className="search-list">
          {results.map((item, index) => (
            <li key={index} className="search-card">
              <Link to={getLink(item)} className="card-link">
                <div className="card-title">{item.title || item.country || item.name}</div>
                <div className={`card-category category-${item.category?.toLowerCase().replace(/\s+/g, '-')}`}>
                  {item.category}
                </div>
                <div className="card-description">{item.description || item.benefit}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VisaSearchResults;
