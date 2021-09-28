import React, { Component } from 'react';
import { Router, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header"
import Carousel from "./components/Carousel"
import TeamCard from "./components/team"
import ContactUs from "./components/contactUs"


import Footer from "./components/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
class App extends Component {
  render() {
    return (
      <div className="conatiner"><Header/><Carousel/>
      <hr class="separator separator--line" /><TeamCard/>
      <hr class="separator separator--line" /><ContactUs/>
      <hr class="separator separator--line" />
      <Footer/></div>
    );
  }
}

export default App;