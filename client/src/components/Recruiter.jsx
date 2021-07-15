import React from "react";
// import Scrolltop from '../components/scoll';
import Scrolltop from "./Scrolltop";
import RecruiterRegistration from "./RecruiterRegister";
import Testimonial from "../components/Testimonial";
import VerticalLinearStepper from "../components/VerticalStepper";
// import QuoteSlider from '../components/testimonial';

import "../CSS/Recruiter.css";

const Recruiter = () => {
  return (
    <div class="Main">
      <Scrolltop showBelow={250} />
      <div class="main-div">
        <div class="top-div">
          <h2>OUR RECRUITERS</h2>
        </div>
        <div class="second-div">
          <div class="inner-div">
            <span>HOW TO APPLY</span>
          </div>

          <div class="inner-div">
            <span>TESTIMONIALS</span>
          </div>
          <div class="inner-div">
            <span>REGISTER</span>
          </div>
        </div>
      </div>
      <VerticalLinearStepper />
      <h4>TESTIMONIAL</h4>
      <Testimonial />
      <RecruiterRegistration></RecruiterRegistration>
    </div>
  );
};

export default Recruiter;
