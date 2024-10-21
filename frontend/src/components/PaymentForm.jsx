import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
  const [activeMethod, setActiveMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = () => {
    // Check for empty fields in Card Payment
    if (!formData.cardNumber || !formData.cardHolderName || !formData.expiryMonth || !formData.expiryYear || !formData.cvv) {
      alert('Please fill in all fields for Card Payment.');
      return;
    }
    alert('Payment successful! Your event is booked.');
  };

  const handleBankTransferPayment = () => {
    // Check for empty fields in Bank Transfer
    if (!formData.bankName || !formData.accountNumber || !formData.ifscCode) {
      alert('Please fill in all fields for Bank Transfer.');
      return;
    }
    alert('Bank Transfer successful! Your event is booked.');
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Process</h2>
      <div className="payment-methods">
        <button
          onClick={() => setActiveMethod('card')}
          className={activeMethod === 'card' ? 'active' : ''}
        >
          Card Payment
        </button>
        <button
          onClick={() => setActiveMethod('bank')}
          className={activeMethod === 'bank' ? 'active' : ''}
        >
          Bank Transfer
        </button>
      </div>

      {activeMethod === 'card' && (
        <div className="payment-details">
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Card Holder Name</label>
              <input
                type="text"
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label>Expiry Month</label>
              <input
                type="text"
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleChange}
                placeholder="MM"
                required
              />
            </div>
            <div className="form-group">
              <label>Expiry Year</label>
              <input
                type="text"
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleChange}
                placeholder="YY"
                required
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                required
              />
            </div>
          </div>
          <button className="pay-button" onClick={handlePayment}>
            Pay Now
          </button>
        </div>
      )}

      {activeMethod === 'bank' && (
        <div className="bank-transfer-details">
          <div className="form-group">
            <label>Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              placeholder="Your Bank Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="Your Account Number"
              required
            />
          </div>
          <div className="form-group">
            <label>IFSC Code</label>
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              placeholder="Your Bank IFSC Code"
              required
            />
          </div>
          <button className="pay-button" onClick={handleBankTransferPayment}>
            Confirm Bank Transfer
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
