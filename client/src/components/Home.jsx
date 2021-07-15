import React, {useState}from 'react'
import '../CSS/Home.css';
import Scrolltop from './Scrolltop';
import Slide from "react-reveal/Slide";
// import Bounce from "react-reveal/Bounce";
import bg from '../images/df-min.jpg'
import bg1 from '../images/-min1.jpg'
import bg2 from '../images/-min.jpg'
import bg3 from '../images/bg4.jpg'

function Home() {
  
  const [ReadAbout, setReadAbout] = useState(false);
  const [ReadVission, setReadVission] = useState(false);
  const [ReadMission, setReadMission] = useState(false);
  const [ReadValue, setReadValue] = useState(false);

  return (
    <div className="App">
      <Scrolltop showBelow={250} />
      <section className="u-block-8245-1">
          <div className="u-block-8245-39">
              {/* <div className="u-block-8245-40"> */}
                <h2 className="u-block-8245-42">YOUTH<br/>INDIA<br/>PLACEMENT<br/>CELL</h2>
                <h2 className=" u-block-8245-50">" by the youth, for the youth "</h2>
              {/* </div> */}
          </div>
              <div className="sign__up">
              <div className="about">
                  <h4>CUSTOMER SIGN UP</h4>
              </div>
              <div className="about">
                  <h4>STUDENT SIGN UP</h4>
              </div>
          </div>
      </section>
      <section>
        <div className="container_1">
          <div className="card">
            <div className="about_us">
                <h3>ABOUT US</h3>
            </div>
          </div>
          <div className="card2">
          <div className={ReadAbout? "content_full":"content"}>
              <p>The Youth India placement cell is an initiative of Youth India Foundation and is the core piece in helping us reach our objective. The challenges faced by our current generation to thrive for excellence often makes them overlook their potentialities and abilities. The downward trend on the economic growth, and the growing strain on the coming generation to grab hold of opportunities become tough.</p>
              <p>This is where we come into assistance and to overcome this grave issue that is presented to us, the Youth India Placement Cell allows the worthy and striving aspirants to help attain job and internship opportunities. We aim to be the solution to the pre-existing problem of redundancy and inefficiency. We put forward a social entrepreneurship platform to assist the students and the colleges. The Youth India Placement Cell acts as a mediator between students and prospective companies via respective colleges. We take into consideration the aptitude, skills and knack of our aspirants before reaching out to the companies.</p>
          
          </div>
          <a className="more" onClick={()=>ReadAbout? setReadAbout(false): setReadAbout(true)}>{ReadAbout? "Read Less":"Read More"}</a> 
          </div>
        </div>
      </section>
      <section>
        <div className="container_2">
          <div className="card">
            <div className={ReadVission? "content_full":"content"}>
              <h3>VISSION</h3>
                  <p>Unleash the potential of the talent and be a bridge to a more prosperous world. Our perception is to be trusted as a valuable advisor by our aspirants and associates.</p>
                  <p>We aim to revolutionize the working space by building long lasting relationships with our collaborators.</p>
                  <p>Our vision is to drive careers, aid businesses to grow and take our nation to great heights.</p>
            </div>
            <a className="more" onClick={()=>ReadVission? setReadVission(false): setReadVission(true)}>{ReadVission? "Read Less":"Read More"}</a>
          </div>
          <div className="card">
          <div className={ReadMission? "content_full":"content"}>
                <h3>MISSON</h3>
                <p>Youth India Placement Cell envisages a nation with equitable employment opportunities for all sections of the society while collaborating with the companies and the youth .</p>
                <p>Our aim is to deliver right people to the right jobs , an integrated recruitment solution . We wish to help India reach the heights of job efficiency and employment via our mediation.</p>
                <p>We work towards furnishing students with relevant and conceptualized professional skills and guide them towards the bright future and career all around India.</p>
          </div>
          <a className="more" onClick={()=>ReadMission? setReadMission(false): setReadMission(true)}>{ReadMission? "Read Less":"Read More"}</a>
          </div>
          <div className="card">
          <div className={ReadValue? "content_full":"content"}>
            <h3>VALUE</h3>
                <p>We at Youth India Placement Cell, believe in fostering the overall development of our clientele, and not just monetary growth.</p>
                <p>We stand to maintain inclusivity and uniformity as our work remains equally accessible across all tiers, class and divisions of colleges and recruiters.</p>
                <p>We believe in sustainable development i.e., meetings the present developmental needs without compromising any of the other aspects.</p>
                <p>We believe in creating an employment friendly and democratic environment at work, incorporating all shades of opinions, skills and competencies to be put in use.</p>
          </div>
          <a className="more" onClick={()=>ReadValue? setReadValue(false): setReadValue(true)}>{ReadValue? "Read Less":"Read More"}</a>
          </div>
        </div>
      </section>
      <section>
        <div className="big-deal">
        <div className="services">
            {/* <h3>OUR SERVICES</h3> */}
            <div class="u-block-c716-12">
              <h2 class="u-block-c716-17">OUR SERVICES</h2>
                {/* <div class="u-block-c716-11">
                </div> */}
                <Slide left>
                <div className="service__one">
                <p class="u-block-c716-18">
                  We, at Youth India Placement Cell look forward to tending to all
                  corporate and employment requirements of firms with dedicated
                  services.
                  <br/><br/>
                  Youth India Placement Cell guarantees to
                  undertake all its tasks with utmost efficiency to meet the standards
                  we ensure.&nbsp;
                  We undertake the responsibility of marketing and strategizing on
                  behalf of our recruiting companies to ensure greater clientele.
                </p>
                <img class="u-block-c716-7 service_img1" data-brightness="" data-image-width="1200" data-image-height="851" src={bg1}></img>
                </div>
                </Slide>
            </div>
        </div>
        <div className="services">
            <div class="u-block-c716-12">
            <Slide right>
                <div className="service__one">
                <img class="u-block-c716-7 service_img2" data-brightness="" data-image-width="1200" data-image-height="851" src={bg2}></img>
                <p class="u-block-c716-18">
                  Our process would ensure
                  constant connectivity between our worthy applicants and recruiters.
                  The process shall be conducted keeping in mind the aptitude of our
                  candidates as well as the requirements of the firms.
                  <br/><br/>
                  We ease the recruitment process
                  for the companies by filtering out the most competent candidates
                  from a diversified network of colleges and universities.
                </p>
                </div>
            </Slide>
            </div>
        </div>
        <div className="services">
            <div class="u-block-c716-12">
            <Slide left>
                <div className="service__one">
                <p class="u-block-c716-18">
                     We shall facilitate the
                      systematic process of appointment of all the recruits with formal
                      updates and paperwork to both the parties. Our transparent work
                      ensures reliability and accountability on our part as we report to
                      our prospective clients.
                  <br/><br/>
                  Our cost effective strategies allows us to operate on full scale
                      thus, making our clientele satisfied. Transparency being the key, our
                      charges and quotations are easily accessible. We bank on nominal
                      charges rather than pricey promises.
                </p>
                <img class="u-block-c716-7 service_img3" data-brightness="" data-image-width="1200" data-image-height="851" src={bg3}></img>
                </div>
            </Slide>
            </div>
        </div>

      </div>
      </section>
      
    <div class="icon-bar">
      <a href="https://www.instagram.com/thapatechnical/" class="facebook" target="_thapa">
        click here to visit <i class="fab fa-facebook-square"></i>
      </a>

      <a href="https://www.instagram.com/thapatechnical/" class="telegram" target="_thapa">
        click here to visit <i class="fab fa-telegram-plane"></i>
      </a>

      <a
        href="https://www.instagram.com/thapatechnical/"
        class="instagram"
        target="_thapa"
      >
        click here to visit <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.instagram.com/thapatechnical/" class="linkedin" target="_thapa">
        click here to visit <i class="fab fa-linkedin"></i>
      </a>
    </div>
     
    </div>


  );
}

export default Home;
