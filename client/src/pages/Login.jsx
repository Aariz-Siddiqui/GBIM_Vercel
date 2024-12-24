import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user); 
    const response = await fetch("http://localhost:8000/login", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    console.log(response);
    if (response.ok){
        alert("Login successful");
        navigate("/contact")
    }else{
        alert("invalid credentials")
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={user.password}
          onChange={handleInput}
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login
