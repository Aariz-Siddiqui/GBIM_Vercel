import {React, useState} from 'react'
const Contact = () => {
const [user,setUser] = useState({
  name:"",
  phone:"",
  email:"",
  message:""
});

const handleInput =(e)=>{
  let name = e.target.name;
  let value = e.target.value;

  setUser({
    ...user,
    [name]:value
  })
}

const handleSubmit =async (e)=>{
    e.preventDefault();
    const response = await fetch("https://gbim-vercel-backend.vercel.app/contact", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    console.log(response);
    if(response.ok){
        alert("message sent successfully");
    }
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' id='name' placeholder="Enter your name please"
      autoComplete="off"
      value={user.name} onChange={handleInput}/>
      <br/>
      <label htmlFor='phone'>Phone</label>
      <input type='text' name='phone' id='phone' placeholder="Enter your phone number please"
      autoComplete="off"
      value={user.phone} onChange={handleInput}/>
      <br/>
      <label htmlFor='email'>Email</label>
      <input type="email" name='email' id='email' placeholder='enter your email please'
      autoComplete="off"
      value={user.email} onChange={handleInput}/>
      <br/>
      <label htmlFor='message'>Message</label>
      <input type='text' name='message' id="message" placeholder='enter your message please'
      autoComplete="off"
      value={user.message} onChange={handleInput}/>
      <button>Submit</button>
    <br/>
    </form>
    </>
  )
}

export default Contact
