import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import userSkill from "./pages/userSkill"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js"
import Wrapper from "./components/Wrapper/Wrapper.js"
import { BrowserRouter as Router, Route } from "react-router-dom";



const App = () =>

  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/userSkill" component={userSkill} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;


export default App;
