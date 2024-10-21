import React from 'react';
import ServiceCard from './ServiceCard';
import image4 from '../images/engagement.jpg';
import image5 from '../images/wedding (1).jpg';
import image6 from '../images/bday.jpg';
import image7 from '../images/partyy.jpg';
import image8 from '../images/reunion.jpg';
import image9 from '../images/reception.jpg';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    navigate(`/services/${service.toLowerCase()}`);
  };

  return (
    <div>
      <section id="services" className="section">
        <h1 className='h2'>Services</h1>
        <div className='services'>
          <ServiceCard 
            image={image4}
            title="Engagement"
            alt="Engagement"
            onClick={() => handleServiceClick('Engagement')}
          />
          <ServiceCard 
            image={image5}
            title="Wedding"
            alt="Wedding"
            onClick={() => handleServiceClick('Wedding')}
          />
          <ServiceCard 
            image={image6}
            title="Birthday"
            alt="Birthday"
            onClick={() => handleServiceClick('Birthday')}
          />
          <ServiceCard 
            image={image7}
            title="Party"
            alt="Party"
            onClick={() => handleServiceClick('Party')}
          />
          <ServiceCard 
            image={image8}
            title="Reunion"
            alt="Reunion"
            onClick={() => handleServiceClick('Reunion')}
          />
          <ServiceCard 
            image={image9}
            title="Reception"
            alt="Reception"
            onClick={() => handleServiceClick('Reception')}
          />
        </div>
      </section>
    </div>
  );
}

export default Services;
