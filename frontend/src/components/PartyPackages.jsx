import React from 'react';
import './WeddingPackages.css'; // Using the same CSS file
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Importing useNavigate

const PartyPackages = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to navigate to PaymentForm
    const openPaymentForm = () => {
        navigate('/payment'); // Navigate to payment page
    };

    return (
        <div className='container-wrapper'>
            <div className='containerss'>
                <h1>Choose Your Party Package</h1>
                <div className='packages'>
                    <div className="package">
                        <h2>Celebration Essentials</h2>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>Themed Decor Setup</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>Signature Cocktail Station</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>DJ & Music Playlist</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                            <p style={{ color: '#C4C4C4' }}>Photo Wall</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                            <p style={{ color: '#C4C4C4' }}>Interactive Games</p>
                        </div>
                        <div><h2>Rs.30,000/-</h2></div>
                        <button className='prime-button' onClick={openPaymentForm}>
                            Select Essentials
                        </button>
                    </div>

                    <div className="package">
                        <h2>Party Premium</h2>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>Customized Party Theme</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>Open Bar with Mixologist</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>Professional DJ & Lights</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>Interactive Photo Booth</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#C4C4C4', fontSize: '20px' }} />
                            <p style={{ color: '#C4C4C4' }}>Dance Floor</p>
                        </div>
                        <div><h2>Rs.75,000/-</h2></div>
                        <button className='prime-button' onClick={openPaymentForm}>
                            Select Premium
                        </button>
                    </div>

                    <div className="package">
                        <h2>Ultimate Bash</h2>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>Luxury Themed Decor</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>Personalized Signature Cocktails</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>Live Band & DJ Combo</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>Luxury Photo Booth with Props</p>
                        </div>
                        <div className='features'>
                            <FaCheckCircle style={{ color: '#FF6B6B', fontSize: '20px' }} />
                            <p>Dedicated Host & Event Planner</p>
                        </div>
                        <div><h2>Rs.1,50,000/-</h2></div>
                        <button className='prime-button' onClick={openPaymentForm}>
                            Select Ultimate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartyPackages;
