import React from 'react';
import './WeddingPackages.css'; // Using the same CSS file
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Importing useNavigate

const BirthdayPackages = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to navigate to PaymentForm
    const openPaymentForm = () => {
        navigate('/payment'); // Navigate to payment page
    };

    return (
        <>
            <div className='container-wrapper'>
                <div className='containerss'>
                    <h1>Choose Your Birthday Celebration Package</h1>
                    <div className='packages'>
                        <div className="package">
                            <h2>Fun Starter</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Cake Decoration</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Balloon Setup</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Party Games</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Face Painting</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>DJ & Music</p>
                            </div>
                            <div><h2>Rs.20,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Fun Starter</button>
                        </div>

                        <div className="package">
                            <h2>Party Deluxe</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Theme Cake Design</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Balloon & Streamers Setup</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Party Host</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Face Painting & Tattoos</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>DJ & Sound System</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                                <p style={{ color: '#C4C4C4' }}>Live Entertainer</p>
                            </div>
                            <div><h2>Rs.50,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Party Deluxe</button>
                        </div>

                        <div className="package">
                            <h2>Ultimate Bash</h2>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Custom Cake Design</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Balloon Arch & Full Decor</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>DJ & Sound System</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Photo Booth with Props</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Live Entertainer (Magician/Clown)</p>
                            </div>
                            <div className='features'>
                                <FaCheckCircle style={{ color: '#3DA9FC', fontSize: '20px' }} />
                                <p>Return Gifts for Kids</p>
                            </div>
                            <div><h2>Rs.1,00,000/-</h2></div>
                            <button className='prime-button' onClick={openPaymentForm}>Select Ultimate Bash</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default BirthdayPackages;
