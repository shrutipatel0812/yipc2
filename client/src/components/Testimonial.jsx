
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import "../CSS/styles.css";
import quote from '../images/Parth.jpeg';
import user from '../images/Parth.jpeg';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);


export default function App() {
  
  
  
  return (
    <>
    <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
      
  <SwiperSlide>
  <div className="Tes__content">
       {/* <img src={quote} className="quote" alt="logo" /> */}
        <p>" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "</p>
        <div className="detail">
          <h2>Someone Famous</h2>
          <div className="div_img">
            <img src={user} alt="logo" />
          </div>  
        </div>
    </div>
  </SwiperSlide>
    <SwiperSlide>
    <div className="Tes__content">
       {/* <img src={quote} className="quote" alt="logo" /> */}
        <p>" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "</p>
        <div className="detail">
          <h2>Someone Famous</h2>
          <div className="div_img">
            <img src={user} alt="logo" />
          </div> 
        </div>
    </div>
    </SwiperSlide><SwiperSlide>
    <div className="Tes__content">
       {/* <img src={quote} className="quote" alt="logo" /> */}
        <p>" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "</p>
        <div className="detail">
          <h2>Someone Famous</h2>
          <div className="div_img">
            <img src={user} alt="logo" />
          </div> 
        </div>
    </div>
    </SwiperSlide>
  </Swiper>
    </>
  )
}