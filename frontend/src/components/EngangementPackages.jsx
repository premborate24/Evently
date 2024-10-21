import React from 'react';
import './WeddingPackages.css';
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const EngagementPackages = () => {
  const navigate = useNavigate(); // Hook to navigate

  // Function to navigate to PaymentForm
  const openPaymentForm = () => {
    navigate('/payment');
  };

  return (
    <>
      <div className='container-wrapper'>
        <div className='containerss'>
          <h1>Choose Your Engagement Plan</h1>
          <div className='packages'>
            <div className="package">
              <h2>Basic</h2>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Venue Decoration</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Catering for Guests</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Photography Session</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Floral Arrangements</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                <p style={{ color: '#C4C4C4' }}>Dedicated Planner</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                <p style={{ color: '#C4C4C4' }}>Sound System</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                <p style={{ color: '#C4C4C4' }}>Makeup & Styling</p>
              </div>
              <div><h2>Rs.50,000/-</h2></div>
              <button className='prime-button' onClick={openPaymentForm}>Select Basic</button> {/* Updated */}
            </div>
            <div className="package">
              <h2>Deluxe</h2>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Elegant Venue</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Customized Catering</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Professional Photography</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Beautiful Floral Decoration</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Dedicated Planner</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Sound System & DJ</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                <p style={{ color: '#C4C4C4' }}>Makeup & Styling</p>
              </div>
              <div><h2>Rs.1,00,000/-</h2></div>
              <button className='prime-button' onClick={openPaymentForm}>Select Deluxe</button> {/* Updated */}
            </div>
            <div className="package">
              <h2>Luxury</h2>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Destination Venue</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Gourmet Catering</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Cinematic Photography</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Extravagant Floral Arrangements</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Dedicated Planner</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Sound System & DJ</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Gift Hamper for Guests</p>
              </div>
              <div className='features'>
                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                <p>Accommodation for Guests</p>
              </div>
              <div><h2>Rs.2,50,000/-</h2></div>
              <button className='prime-button' onClick={openPaymentForm}>Select Luxury</button> {/* Updated */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngagementPackages;
