import React from 'react';
import './WeddingPackages.css';
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ReunionPackages = () => {
    const navigate = useNavigate();
    
    // Function to navigate to PaymentForm
    const openPaymentForm = () => {
        navigate('/payment');
    };

    return (
        <>
            <div className='container-wrapper'>
                <div className='containerss'>
                    <h1>Reunion Packages</h1>
                    <div className='packages'>
                        
                        <div className="package">
                            <h2>Basic Nostalgia</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Memory Wall of Photos</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Welcome Banner</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Group Trivia Game</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Buffet Lunch</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>DJ and Dance Floor</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Old Photos Slideshow</p>
                            </div>
                            <div><h2>Rs.25,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Basic</button>
                        </div>

                        <div className="package">
                            <h2>Enhanced Memories</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Interactive Memory Wall</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Personalized Video Messages</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Photo Booth</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#6BCBFF', fontSize: '20px' }} />
                                <p>DJ and Dance Floor</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#6BCBFF', fontSize: '20px' }} />
                                <p>Old Photos Slideshow</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Three-Course Meal</p>
                            </div>
                            <div><h2>Rs.60,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Enhanced</button>
                        </div>

                        <div className="package">
                            <h2>Ultimate Reunion</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Customized Memory Book</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Live Band Performance</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                                <p>Screening of Old Videos</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#6BCBFF', fontSize: '20px' }} />
                                <p>Three-Course Meal</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#6BCBFF', fontSize: '20px' }} />
                                <p>Keepsake Souvenir</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#6BCBFF', fontSize: '20px' }} />
                                <p>Open Mic for Sharing Memories</p>
                            </div>
                            <div><h2>Rs.1,20,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Ultimate</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ReunionPackages;
