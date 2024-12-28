import React from "react";
import "./App.css"
//import "./contact.css"
//import "./register.css"
//import "./login.css"
import { Header } from "./Components/Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
//import './navbar.css'; // You can customize the styles in this file
import Contact from "./pages/Contact";
import Feautres from "./pages/Feautres";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Aichatbot from "./pages/Aichatbot";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {

  return (
        <BrowserRouter>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path ="/" element={<Contact/>}/>
          <Route path ="/features" element={<Feautres/>}/>
          <Route path ="/pricing" element={<Pricing/>}/>
          <Route path ="/resources" element={<Resources/>}/>
          <Route path ="/aichatbot" element={<Aichatbot/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/register" element={<Register/>}/>
          <Route path ="/login" element={<Login/>}/>

        </Routes>
        </BrowserRouter>
    
  )
}

export default App;
