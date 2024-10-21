import React, { useEffect, useState } from 'react';
import './Login.css'; // Ensure this file is created for styles
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthForm = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and sign up
  const navigate = useNavigate(); // useNavigate must be called at the top of the component
  const [user, setUser] = useState()
  const [profile, setProfile] = useState()

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  console.log(profile)
  useEffect(
    () => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.credential}`, {
                    headers: {
                        Authorization: `Bearer ${user.credential}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    },
    [ user ]
);

  return (
    <div className="auth-container">
      <div className={`form ${isLogin ? 'login-form' : 'signup-form'}`}>
        {isLogin ? (
          <>
            <h2>LOGIN</h2>
            <input onChange={(e)=>{
              setUsername(e.target.value)
            }}  type="text" placeholder="Email" />
            <input onChange={(e)=>{
              setPassword(e.target.value)
            }} type="password" placeholder="Password" />
            <button  onClick={async()=>{
          const res = await axios.post("http://localhost:3000/user/signin",{
            username,
            password
          }
        )
        if(res.data.msg ==='Unable to send token'){
          alert("Check your credentials")
        }else{
        localStorage.setItem("token",res.data.token)
        navigate("/")
        }
        }}>Login</button> {/* Correct use of navigate */}

            <div className='google'>
              <GoogleOAuthProvider clientId="193063079235-11kt0ittt169empajqpovm07pldjnsie.apps.googleusercontent.com">
                <div>
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                      setUser(credentialResponse)
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                </div>
              </GoogleOAuthProvider>
            </div>
            <p>
              Don't have an account? <span onClick={toggleForm} className="link">Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <h2>CREATE ACCOUNT</h2>
            <input onChange={(e)=>{
              setUsername(e.target.value)
            }}   type="text" placeholder="Email" />
            <input onChange={(e)=>{
              setPassword(e.target.value)
            }}   type="email" placeholder="Password" />
            <button onClick={async()=>{
          const res = await axios.post("http://localhost:3000/user/signup",{
            username,
            password
          }
        )
        console.log(res.data)
        if(res.data.msg ==='Unable to send token'){
          alert("Check your credentials")
        }else{
        localStorage.setItem("token",res.data.token)
        setIsLogin(true)
        navigate("/login")
        }
        }}>Sign Up</button>
            <p>
              Already have an account? <span onClick={toggleForm} className="link">Login</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
