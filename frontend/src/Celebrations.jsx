import React, { useEffect, useRef } from "react";
import './Celebrations.css'; // Ensure you create this CSS file
import imgParty from './images/im1.jpg';
import imgBday from './images/im2.jpg';
import imgEngagement from './images/im3.jpg';
import imgWedding from './images/im4.jpg';
import imgReunion from './images/im5.jpg';
import imgReception from './images/im6.jpg';

const images = [
  imgParty,
  imgBday,
  imgReception,
  imgWedding,
  imgEngagement,
  imgReunion,
 
];

const PhotoGallery = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      scrollAmount += 1;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
    }, 20); // Adjust speed as needed

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="photo-gallery-container">
      <h2 className="gallery-heading">Celebrations</h2>
      <div className="slider" ref={sliderRef}>
        <div className="slider-track">
          {images.concat(images).map((img, index) => (
            <div key={index} className="slider-item">
              <img src={img} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
