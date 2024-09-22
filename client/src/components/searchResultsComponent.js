import React from 'react';

/*const handleResultClick = (result) => {
  console.log("Result clicked: ", result); 

}*/

const SearchResults = ({ results, searchPerformed}) => {
  return (
    <div>
      {searchPerformed ? (
        results.length > 0 ? (
        <ul style={{ listStyleType: 'none' }}>
          {results.map(result => (
            <li key={result._id} /*onClick={() => handleResultClick(result)}*/>
              <h3>
                <a href = {result.url} target="_blank" rel="noreferrer">
                {result.name}
                </a> 
              </h3>
              <img src={result.thumbnail_url} alt={result.title} width="200" />
              <p>{result.description}</p>
              
            </li>
          ))}
        </ul>
      ) : (
        <h3>No results found</h3>
      )
      ) :null}
    </div>
  );
};

export default SearchResults;
