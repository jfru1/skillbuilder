import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import skillPage from "./pages/userSkill"
import Contact from "./pages/Contact"
import About from "./pages/About"
import SignUpPage from "./pages/SignUp.js"
import LoginPage from "./pages/Login.js"
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js"
import Wrapper from "./components/Wrapper/Wrapper.js"
import PracticeArc from "./components/PracticeArc/PracticeArc.js"
import { BrowserRouter as Router, Route } from "react-router-dom";



const App = () =>

  <Router>
    <div>
      <Navbar />
      <Wrapper>

        <Route exact path="/" component={LoginPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/userSkill" component={skillPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signUp" component ={SignUpPage} />
        <Route exact path="/login" component ={LoginPage} />

      </Wrapper>
      <Footer />
    </div>
  </Router>;


export default App;
