import React from 'react';
import './Payment.css';

const Payment = ({ amount, packageName, onPayment }) => {

  const handlePaymentClick = () => {
    const options = {
      key: "your-razorpay-key", // Replace with your Razorpay key
      amount: amount * 100, // Convert to smallest currency unit (e.g., paise)
      currency: "INR",
      name: "Evently Party Package",
      description: `Payment for ${packageName} package`,
      image: "https://example.com/your-logo.png", // Your logo
      handler: function (response) {
        console.log(response); // Payment success response
        if (onPayment) {
          onPayment(response); // Execute a callback function on success
        }
      },
      prefill: {
        name: "Prem Borate", // Prefill data
        email: "prem@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#FF6B6B", // Customize theme
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment-container">
      <h2>Proceed to Payment</h2>
      <p>Package: <strong>{packageName}</strong></p>
      <p>Amount: <strong>Rs.{amount}/-</strong></p>
      <button className="payment-button" onClick={handlePaymentClick}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
