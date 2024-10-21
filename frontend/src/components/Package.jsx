// Package.js
import React from 'react';
import './Package.css'; // Import the corresponding CSS file

const Package = ({ title, items, price }) => {
    return (
        <div className="package">
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <img src={item.checked ? 'https://example.com/tick-mark-url.png' : 'https://example.com/gray-tick-url.png'} alt="✓" />
                        {item.text}
                    </li>
                ))}
            </ul>
            <p>{price}</p>
            <button>Select Plan</button>
        </div>
    );
};

export default Package;
