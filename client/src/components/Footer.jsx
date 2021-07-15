import React from 'react'
import '../CSS/Footer.css'

function Footer() {

    const date = new Date();
    const year = date.getFullYear(); 

    return (
        <>
        <footer className="footer">
    <div className="footer__main-content">         
        <div className="footer_top">
            <div className="footer_top_box">
        <h2>Get in touch</h2>
        <div className="hr"></div>
        <p> We will answer your question scope your project and discuss your potential fit in style </p>

        <div className="footer_top_contact">
                        <div className="cont-icon">
                            <span className="fas fa-phone"></span>
                            <span className="fas fa-envelope"></span>
                            <span className="fas fa-map-marker-alt"></span>
                        </div>
                        <div className="text">
                            
                            <span className="text">+91 1234567890</span>
                            <span className="text">example123@gmail.com</span>
                            <span className="text">India</span>
                        </div>
                        
                    </div>
                    </div>
     
                    <div className="footer_mid-box">
                    <form className="qf--form">
                        <h2>Have something to say ?</h2>
                        <input placeholder="Name" type="text" />
                        <input placeholder="Email" type="email" />
                        <textarea placeholder="Message"></textarea>
                        <button className="signup__form--button" type="submit">
                        Send Message
                        </button>
                    </form>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="bottom_content">
                        <div className="footer_bottom_name">
                            <h2>Youth India Placement Cell</h2>
                            <p>Struggling to choose right career path? Having difficulty in some topic or question? 
                            <br></br>
                            Don't worry!! Enjoy free access to all LearnZania resources and study material anytime, anywhere from your comfort and ace 
                            your preparation.Get free and expert guidance from our mentors too.</p>
                        </div>
                        <div className="footer_bottom_about">
                            <h2>About Us</h2>
                            <p>The youth India placement cell is an initiative of Youth India Foundation and is the core piece in helping us reach our objective. 
                            </p>
                        </div>
                        <div className="footer_bottom_connect">
                            <h2>Connect with Us</h2>
                            <div className="icons">
                                <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                <li><a href="#"><span
                                    className="fab fa-twitter"></span></a></li>
                                <li><a href="#"><span
                                    className="fab fa-instagram"></span></a></li>
                                <li><a href="#"><span
                                    className="fab fa-linkedin-in"></span></a></li>
                                {/* <li><a href="#"><span
                                    className="fab fa-github"></span></a>
                                </li> */}
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom_bottom">
                        <div className="footer_bottom_links">
                            <div className="links-dv">
                                <div className="navi">
                                <span className="text">Home</span>
                                </div>
                                <div className="navi">
                                <span className="text">Our Team</span>
                                </div>
                            </div>
                            <div className="links-dv">
                                <div className="navi">
                                <span className="text">Recruiters</span>
                                </div>
                                <div className="navi">
                                <span className="text">Seekers</span>
                                </div>
                            </div>
                            <div className="links-dv">
                            {/* <div  className="navi">
                                <span className="text">Client</span>
                                </div> */}
                                <div className="navi">
                                <span className="text">Contact</span>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            {/* <span className="credit"><a
                                href="#" style={{color:"white",textDecoration:'none',marginTop:"0.5rem"}}>LearnZania</a> | </span> */}
                            <span className="far fa-copyright"></span><span> 2021 Copyright: Youth India Placement</span>
                        </div>
                    </div>
                   
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
