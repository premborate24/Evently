import React from 'react';
import './CelebrationCard.css';

const CelebrationCard = ({ image, title }) => {
    return (
        <div className="celebration-card">
            <div className="image-container">
                <img src={image} alt="Celebration" className="celebration-image" />
                <div className="image-border"></div>
            </div>
            <div className="card-title">{title}</div> {/* Moved outside of image-container */}
        </div>
    );
};

export default CelebrationCard;
