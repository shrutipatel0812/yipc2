import React, { useState, useEffect} from "react";
import '../CSS/Header.css'
import Logo from '../images/Logo.png'


export const Header = () => {
    const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  let navbarClasses=['navbar'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }
    return (
        <nav  id="header" class="  navbar navbar-expand-lg ">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
         data-target="#navbarTogglerDemo03" 
         aria-controls="navbarTogglerDemo03" 
         aria-expanded="false" 
         aria-label="Toggle navigation"
         >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a  class="navbar-brand" href="#">
          <img src={Logo} />
        </a>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item pr-4 active">
              <a id="link" class="nav-link" href="/">HOME <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item pr-4">
              <a id="link" class="nav-link" href="/ourteam">OUR TEAM</a>
            </li>
            <li class="nav-item pr-4">
              <a id="link" class="nav-link" href="/recruiter">RECRUITERS</a>
            </li>
            <li class="nav-item pr-4">
              <a id="link" class="nav-link" href="/opportunityseeker">OPPORTUNITY SEEKER</a>
            </li>
            <li class="nav-item pr-4">
              <a id="link" class="nav-link" href="#">CONTACT US</a>
            </li>
            
          </ul>
        </div>
      </nav>

            );
   
    }


