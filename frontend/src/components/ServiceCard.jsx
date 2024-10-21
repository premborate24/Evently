import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, onClick }) => {
  return (
    <div className="service-card" onClick={onClick}>
      <div className="image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-title">{title}</div>
    </div>
  );
};

export default ServiceCard;
