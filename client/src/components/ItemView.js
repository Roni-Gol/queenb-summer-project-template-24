import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ItemView.css'; // נניח שיש לך קובץ CSS לעיצוב

const ItemView = () => {
  const { id } = useParams();

  return (
    <div className="item-view">
      <h1>  id </h1>
      <p>מזהה הפריט: {id}</p>
      {/* כאן תוסיפי את תצוגת פרטי הפריט */}
    </div>
  );
};

export default ItemView;