import React from 'react';
import './WeddingPackages.css';
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const WeddingPackages = () => {
    const navigate = useNavigate();
    
    // Function to navigate to PaymentForm
    const openPaymentForm = () => {
        navigate('/payment');
    };

    return (
        <>
            <div className='container-wrapper'>
                <div className='containerss'>
                    <h1>Choose Your Wedding Plan</h1>
                    <div className='packages'>
                        <div className="package">
                            <h2>Prime</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Venue</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Catering</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Photography</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Basic Floral Decoration</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Dedicated Wedding Planner</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Sound System & DJ</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Makeup & Styling</p>
                            </div>
                            <div><h2>Rs.3,00,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Prime</button>
                        </div>
                        <div className="package">
                            <h2>Premium</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Venue</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Catering</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Standard Photography, Video</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Classic Floral Decoration</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Dedicated Wedding Planner</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Sound System & DJ</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Dedicated Wedding Planner</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Sound System & DJ</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Makeup & Styling</p>
                            </div>
                            <div><h2>Rs.5,00,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Premium</button>
                        </div>
                        <div className="package">
                            <h2>Luxury</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Destination Venue</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Gourmet Buffet</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Cinematic Videography with Drones</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Luxury Floral Decoration</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Dedicated Wedding Planner</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Sound System & DJ</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Gift Hamper For Guests</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Accommodation for Guests</p>
                            </div>
                            <div><h2>Rs.10,00,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Luxury</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeddingPackages;
