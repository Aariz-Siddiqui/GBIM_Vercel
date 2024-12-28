import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
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
    const response = await fetch("https://gbim-vercel-backend.vercel.app/register", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })

     if(response.status==409){
      alert ("email already exists")
      navigate("/login")
    }
    
    if(response.ok){
      alert("User registered successfully");
      setUser({
        name: "",
        email: "",
        phone: "",
        password: ""
      })
      navigate("/login")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name here"
          value={user.name}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email here"
          value={user.email}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter your phone here"
          value={user.phone}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password here"
          value={user.password}
          onChange={handleInput}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;
