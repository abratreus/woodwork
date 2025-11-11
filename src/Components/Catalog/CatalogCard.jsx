import React from 'react';
import './CatalogCard.css';

const CatalogCard = ({ title, description, image }) => {
  return (
    <div className="catalog-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CatalogCard;
