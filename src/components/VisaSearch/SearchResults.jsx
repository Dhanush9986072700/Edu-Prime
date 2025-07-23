import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const { results = [], query = '' } = location.state || {};

  return (
    <div className="search-results" style={{ padding: '30px' }}>
      <h2>Search Results for: <em>{query}</em></h2>

      {results.length > 0 ? (
        results.map((item, index) => (
          <div key={index} style={{ padding: '15px 0', borderBottom: '1px solid #ddd' }}>
            <h3>{item.country || item.title} <small style={{ color: '#666' }}>({item.category})</small></h3>
            <p>{item.description || item.content}</p>
            {item.link && <Link to={item.link}>View More</Link>}
          </div>
        ))
      ) : (
        <p>No results found for your search.</p>
      )}
    </div>
  );
};

export default SearchResults;
