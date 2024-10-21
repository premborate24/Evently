import React from 'react';
import ServiceCard from '../components/ServiceCard'; // Updated casing and path
import image4 from '../images/engagement.jpg';
import image5 from '../images/wedding (1).jpg';
import image6 from '../images/bday.jpg';

const Services = () => {
  const services = [
    { src: image4, caption: 'Engagement' },
    { src: image5, caption: 'Wedding' },
    { src: image6, caption: 'Birthday' },
  ];

  return (
    <div className="services">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.src}
          title={service.caption}
          onClick={() => alert(service.caption)} // Example onClick handler
        />
      ))}
    </div>
  );
};

export default Services;
