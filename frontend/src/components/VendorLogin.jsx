import React, { useEffect, useState } from 'react';
import './VendorLogin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VendorLogin = () => {  
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const INIAL_FORM_STATE = {
    name: '',
    gstin: '',
    business_category: '',
    address: '',
    contact: '',
    email: '',
    service_area: '',    
  }

  const [formState, setFormState] = useState(INIAL_FORM_STATE);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLogin(true)
    }
    else{
      setIsLogin(false)
    }
  },[])

  

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };


  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  return (
    <div className="vendor-auth-container">
      <div className={`vendor-form ${isLogin ? 'vendor-login-form' : 'vendor-signup-form'}`}>
        {isLogin ? (
          <>
            <h2>VENDOR LOGIN</h2>
            <input onChange={(e)=>{
              setUsername(e.target.value)
            }} name='username' type="email" placeholder="Email" required />
            <input onChange={(e)=>{
              setPassword(e.target.value)
            }} name='password' type="password" placeholder="Password" required />
            <button onClick={async() =>{
              const res = await axios.post("http://localhost:3000/vendor/signin",{
                username,
                password
              })
              if(res.data.msg ==='Unable to send token'){
                alert("Check your credentials")
              }else{
                localStorage.setItem("token",res.data.token)
                navigate("/")
              }
            }}>Login</button>
            <p>
              Don't have an account? <span onClick={toggleForm} className="vendor-link">Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <h2>VENDOR SIGN UP</h2>
            <div className="two-column">
              <input type="text" onChange={handleInput} name='name' placeholder="Enterprise Name" required />
              <input type="text" onChange={handleInput} name='gstin' placeholder="GSTIN Number" required />
            </div>
            <div className="two-column">
              <select onChange={handleInput} name='business_category' className="vendor-dropdown" required>
                <option value="" disabled selected>Select Business Category</option>
                <option value="Bakery">Bakery</option>
                <option value="Catering">Catering</option>
                <option value="Decor">Decor</option>
                <option value="Sound and Lighting">Sound and Lighting</option>
                <option value="Event Planning">Event Planning</option>
                <option value="Photography">Photography</option>
                <option value="Videography">Videography</option>
                <option value="Florist">Florist</option>
                <option value="Transportation">Transportation</option>
                <option value="Venue Rental">Venue Rental</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Security">Security</option>
              </select>
              <input type="text"  name='address' placeholder="Address" required />
            </div>
            <div className="two-column">
              <input type="text" name='contact' onChange={handleInput} placeholder="Contact Number" required />
              <input type="email" name='email' onChange={handleInput} placeholder="Email" required />
            </div>
            <textarea placeholder="Business Description" required></textarea>
            <input name='service_area' onChange={handleInput} type="text" placeholder="Service Area" required />
            <button onClick={async() => {
              console.log("Signing Up");
              console.log(formState);
              const createVendor = await axios.post('http://localhost:3000/vendor/signup', formState);
              if (createVendor.data.msg === 'Vendor created successfully') {
                alert('Vendor created successfully');
                navigate('/VendorLogin');
                
              }
            }}>Sign Up</button>
            <p>
              Already have an account? <span onClick={toggleForm} className="vendor-link">Login</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default VendorLogin;
