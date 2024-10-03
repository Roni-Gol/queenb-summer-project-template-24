import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LibraryView.css';

 const LibraryView = () => {
//   const items = [
//     { _id: 1, name: 'content title', imageUrl: '/api/placeholder/1/320', description: 'Description of Duck 1' },
//     { _id: 2, name: 'content title', imageUrl: '/api/placeholder/2/320', description: 'Description of Duck 2' },
//     { _id: 3, name: 'content title', imageUrl: '/api/placeholder/3/320', description: 'Description of Duck 3' },
//     { _id: 4, name: 'content title', imageUrl: '/api/placeholder/4/320', description: 'Description of Duck 4' },
//     { _id: 5, name: 'content title', imageUrl: '/api/placeholder/5/320', description: 'Description of Duck 5' },
//     { _id: 6, name: 'content title', imageUrl: '/api/placeholder/6/320', description: 'Description of Duck 6' },
//     { _id: 7, name: 'content title', imageUrl: '/api/placeholder/7/320', description: 'Description of Duck 7' },
//     { _id: 8, name: 'content title', imageUrl: '/api/placeholder/8/320', description: 'Description of Duck 8' },
//   ];

  return (
    <div className="library-container">
      <header>
        <Link to="/" className="logo">לוגו</Link>
      </header>
      <div className="library-grid">
        {items.map(item => (
          <Link to={`/item/${item._id}`} key={item._id} className="library-item">
            <div className="item-image">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="item-title">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LibraryView;