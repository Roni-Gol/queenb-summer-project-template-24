import React from 'react';

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <div>
      {results.length > 0 ? (
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {results.map(result => (
            <li key={result._id}>
              <h3> {result.name} </h3>
              <img src={result.thumbnail_url} alt={result.title} width="200" />
              <p>{result.description}</p>

            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
