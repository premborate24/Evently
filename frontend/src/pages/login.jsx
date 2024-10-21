import React from "react";
import { Image } from "./src/images/login.jpg";
function Login() {


    return (
        <div>
      <div>
        <h1>Sign up</h1>
        <img src={Image} alt="login" />
      </div>
      <div>
        <img src="/evently_logo.png" alt="Evently Logo" />
        <div>sign up</div>
      </div>

      <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
        </div>
        <div>
            <label for="password">Password:</label>
            <input   type="password" id="password" name="password" required/>
        </div>
        <button  type="submit">Login</button>
      </div>
    )
  }
  
  export default Login;  