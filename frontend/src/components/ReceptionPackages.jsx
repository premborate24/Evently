import React from 'react';
import './WeddingPackages.css';

import PaymentForm from './PaymentForm'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";

const ReceptionPackages = () => {
    const navigate = useNavigate();
    
    // Function to navigate to PaymentForm
    const openPaymentForm = () => {
        navigate('/payment');
    };

    return (
        <>
            <div className='container-wrapper'>
                <div className='containerss'>
                    <h1>Reception Packages</h1>
                    <div className='packages'>
                        <div className="package">
                            <h2>Classic Reception</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Elegant Table Settings</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Live DJ</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Buffet Dinner</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Personalized Entry for Bride & Groom</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Welcome Drinks for Guests</p>
                            </div>
                            <div><h2>Rs.40,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Classic</button>
                        </div>

                        <div className="package">
                            <h2>Premium Reception</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Custom Floral Arrangements</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Live Band & DJ</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Professional Photography</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#6BCBFF', fontSize: '20px' }} />
                                <p>Buffet Dinner</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#6BCBFF', fontSize: '20px' }} />
                                <p>Couple's Grand Entrance</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#6BCBFF', fontSize: '20px' }} />
                                <p>Personalized Reception Decor</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Interactive Guest Book Station</p>
                            </div>
                            <div><h2>Rs.85,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Premium</button>
                        </div>

                        <div className="package">
                            <h2>Luxury Reception</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Gourmet Catering & Dinner</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Custom Floral & Decor Design</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Professional Photography & Videography</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#6BCBFF', fontSize: '20px' }} />
                                <p>Live Band, DJ & Dance Floor</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#6BCBFF', fontSize: '20px' }} />
                                <p>Champagne Toast & Cocktail Bar</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#6BCBFF', fontSize: '20px' }} />
                                <p>VIP Lounge Area for Bride & Groom</p>
                            </div>
                            <div><h2>Rs.1,65,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Luxury</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReceptionPackages;
