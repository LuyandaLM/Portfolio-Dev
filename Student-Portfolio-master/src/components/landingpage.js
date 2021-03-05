import React from "react";
import Image from "./012";
import Image3 from "./013";
import Image4 from "./014";
import Image5 from "./015";
import Image6 from "./016";
import Image7 from "./017";
import Image8 from "./018";

const LandingPage = () => {
  return (
    <div>
      {/* NAVIGATION BAR */}
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div />
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#timeline">Timeline</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* HOME */}
      <section id="home">
        <div className="showcase">
          <div className="container">
            <div className="showcase-content">
              <div className="home-title">
                <h1>I'm</h1>
                <h1>Luyanda Mabozo.</h1>
                <hr />
                <p>JUNIOR DEVELOPER &amp;</p>
                <p2>INTERN AT LC STUDIOS</p2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <h2 className="about-title text-center pt-4">About Me</h2>
          <div className="bottom-line" />
          <div className="about-content py-3">
            <div className="about-image">
              <Image />
            </div>
            <div className="about-text">
              <p className="lead">
                Technology and its advancement has always fascinated me. I have
                always loved reading, learning and exploring more about it. I am
                a very creative individual, who has proven himself to be quite
                resourceful as a developer.
              </p>
              <ul className="py-2">
                <li>
                  <h5>Through all these experiences, I have:</h5>
                  <i className="fa fa-chevron-right" /> Cultivated a good
                  understanding of Web Development.
                </li>
                <li>
                  <i className="fa fa-chevron-right" /> Gained knowledge of
                  React, Django, Javascript, RPA & Python
                </li>
                <li>
                  <i className="fa fa-chevron-right" /> Acquired the know-how of
                  Web design principles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline">
        <div class="resume-wrapper">
          <section class="profile section-padding">
            <div class="container">
              <div class="name-wrapper">
                <h1>
                  Luyanda <br />
                  Mabozo
                </h1>
              </div>
              <div class="clearfix"></div>
              <div class="contact-info clearfix">
                <ul class="list-titles">
                  <li>Full Name</li>
                  <li>Date of Birth</li>
                  <li>Age</li>
                  <li>Gender</li>
                  <li>Nationality</li>
                  <li>Ethnic Group</li>
                </ul>
                <ul class="list-content ">
                  <li>Luyanda Mabozo</li>
                  <li>27 May 1997</li>
                  <li>23</li>
                  <li>Male</li>
                  <li>South African</li>
                  <li>Xhosa</li>
                </ul>
              </div>
              <div class="contact-presentation">
                <h2>RESUME</h2>
                <p>
                  <span class="bold">Technology</span> and its advancement has
                  always fascinated me. I have always loved reading, learning
                  and exploring more about it. I am a very creative individual,
                  who has proven himself to be quite resourceful as a developer.
                  I am a very creative individual, who has proven himself to be
                  quite resourceful as a developer.
                </p>
              </div>

              {/* STACK */}
              <div class="section-wrapper clearfix">
                <h3 class="section-title">STACK</h3>
                <ul>
                  <li>
                    <i class="fab fa-html5"></i>HTML
                  </li>
                  <li>
                    <i class="fab fa-html5"></i>CSS
                  </li>
                  <li>
                    <i class="fab fa-html5"></i>JAVASCRIPT
                  </li>
                  <li>
                    <i class="fab fa-html5"></i>PYTHON
                  </li>
                  <li>
                    <i class="fab fa-html5"></i>DJANGO
                  </li>
                  <li>
                    <i class="fab fa-html5"></i>RPA
                  </li>
                </ul>
                <h3 class="section-title">HOBBIES</h3>
                <p>
                  Sound engineering, video editing, soccer, basketball, outdoor
                  activities (camping, hiking, eating out)
                </p>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section class="experience section-padding">
            <div class="container">
              <h3 class="experience-title">Education</h3>
              <div class="experience-wrapper">
                <div class="company-wrapper clearfix">
                  <div class="experience-title">Vorentoe High School</div>
                  <div class="time">Jan 2011 - 2012</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">STUDENT</div> GRADE 8 STUDENT
                </div>

                <div class="company-wrapper clearfix">
                  <div class="experience-title">Brackenfell High School</div>
                  <div class="time">Jan 2012 - November 2015</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">STUDENT</div> GRADE 9 - 12
                  STUDENT
                </div>

                <div class="company-wrapper clearfix">
                  <div class="experience-title"> CPUT</div>
                  <div class="time">Feb 2017 - Nov 2019</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">STUDENT</div> DIPLOMA IN
                  MARKETING
                  <div class="company-description">
                    <p>2nd YEAR POST GRADUATE </p>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div class="container">
              <h3 class="experience-title">Experience</h3>
              <div class="experience-wrapper">
                <div class="company-wrapper clearfix">
                  <div class="experience-title">City Of Cape Town</div>
                  <div class="time">Jun 2014 - Jan 2015</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">EPWP Student </div>
                  <div class="company-description">
                    <p>
                      Data capturing, Setting up meetings, Substitute
                      receptionist & HR Manager assistant, Filing, Customer
                      service
                    </p>
                  </div>
                </div>

                <div class="company-wrapper clearfix">
                  <div class="experience-title">Leapfrog Properties</div>
                  <div class="time">April 2016 - October 2016</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">Real Estate Agent Intern</div>
                  <div class="company-description">
                    <p>
                      marketing immovable property to prospective buyers and/or
                      tenants, managing immovable property for clients,
                      facilitating a purchase/lease by guiding prospective
                      buyers/tenants through the process, facilitating a sale by
                      guiding sellers through the selling process, preparing
                      estate agency related contracts and documentation.
                    </p>
                  </div>
                </div>

                <div class="company-wrapper clearfix">
                  <div class="experience-title">Customer Care Solutions</div>
                  <div class="time">Nov 2017 - March 2018</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">Call Centre Agent</div>
                  <div class="company-description">
                    <p>
                      Customer service through courtesy calls, Identify and
                      escalate issues to supervisors, Document all call
                      information according to standard operating procedures
                    </p>
                  </div>
                </div>

                <div class="company-wrapper clearfix">
                  <div class="experience-title">Trinity Brands</div>
                  <div class="time">Nov 2017 - Present</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">Promoter</div>
                  <div class="company-description">
                    <p>Sales activations, promotion of products</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="clearfix"></div>
        </div>
      </section>

      <section id="certificates">
        <h3>RPA Certificates</h3>
        <div className="cards-list">
          <div className="card 1">
            <div className="card_image">
              <Image3 />
            </div>
          </div>
          <div className="card 2">
            <div className="card_image">
              <Image4 />
            </div>
          </div>
          <div className="card 3">
            <div className="card_image">
              <Image5 />
            </div>
          </div>
          <div className="card 1">
            <div className="card_image">
              <Image6 />
            </div>
          </div>
          <div className="card 2">
            <div className="card_image">
              <Image6 />
            </div>
          </div>
          <div className="card 3">
            <div className="card_image">
              <Image8 />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="skills">
        <div className="wrapper">
          <h2 className="about-title text-center pt-4">Testimonials</h2>
          <div className="cols">
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <div className="container">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url(https://unsplash.it/500/500/)",
                  }}
                >
                  <div className="inner">
                    <p>Jason Wandrag</p>
                    <span>Lecturer</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Luyanda has become an incredibly diligent and hardworking
                      developer, who as acquired skills in both front end and
                      back end. He is constantly working to better himself, and
                      has shown a sense of creativity and professionalism in his
                      front end development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <div className="container">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url(https://unsplash.it/501/501/)",
                  }}
                >
                  <div className="inner">
                    <p>Tyron Keet</p>
                    <span>Colleague</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Luyanda is a committed individual who is willing to learn
                      more and gain more skills. Luyanda have goals and is
                      willing to do anything to reach them,yet his also very
                      helpful and is a team player. He is a great developer and
                      will be a asset to the working area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <div className="container">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url(https://unsplash.it/502/502/)",
                  }}
                >
                  <div className="inner">
                    <p>Akholiwe Mtukuse</p>
                    <span>Schoolmate</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Luyanda is a people's person and works well with others
                      and individually. His ethic is on par and he is always
                      willing to lend a helping hand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <div className="container">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url(https://unsplash.it/503/503/)",
                  }}
                >
                  <div className="inner">
                    <p>Lonwabo Madzuka</p>
                    <span>Team Leader</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Luyanda is a well presented young man, he is goal driven
                      and a highly determined developer. Over the past projects
                      he has been one of the key players in ensuring the success
                      of the project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <div className="container">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url(https://unsplash.it/504/504/",
                  }}
                >
                  <div className="inner">
                    <p>Philani Dlamini</p>
                    <span>Colleague</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Dedicated and hard working team player, Luyanda uses each
                      opportunity to learn and grow, not only as a developer but
                      a whole human being. Luyanda is a team player who is vital
                      to the team, keeping himself and others motivated and
                      ready to work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <div className="container">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url(https://unsplash.it/505/505/)",
                  }}
                >
                  <div className="inner">
                    <p>Sajaad Francis</p>
                    <span>Colleague</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Luyanda is a talented individual, he is hardworking, and
                      never gives up. I have worked with Luyanda for a long
                      time, and he has always been able to solve any problem I
                      came across. I am positive that he will be a valuable
                      asset for any company out there.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <div className="container">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url(https://unsplash.it/506/506/)",
                  }}
                >
                  <div className="inner">
                    <p>Sergio Pillay</p>
                    <span>Colleague</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Luyanda is a hardworking individual, he strives for
                      excellence in all aspects of work. Luyanda works well
                      under pressure and is able to deliver time on task.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <div className="container">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url(https://unsplash.it/508/508/)",
                  }}
                >
                  <div className="inner">
                    <p>Leigh-Jean</p>
                    <span>Colleague</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Working with Luyanda has been a pleasant experience! His
                      dedication and passion for what he do is exemplified by
                      his unrivalled attentiveness to the specific needs of our
                      business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <div className="container">
          <h2 className="work-title text-center pt-4">WORK</h2>
          <div className="bottom-line" />
          <div className="work-content py-3">
            <div>
              <a
                href="https://githubfinder2705.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="github"
                />
              </a>
              <div>
                <a
                  href="https://githubfinder2705.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Github Finder</h2>
                </a>
                <p>This is a full stack React app to search Github profiles</p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Github-repo</th>
                    {/* <th>Live-link</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* SLIDER1 LEFT */}
                      <a
                        className="slider slider-left fb"
                        href="https://github.com/Luyanda-Tommy27/GITHUB-FINDER-PROJECT/"
                        target="blank"
                      >
                        <div className="slide-1">
                          <span className="fi-social-facebook" />
                        </div>
                        <div className="slide-2">Click Here</div>
                      </a>
                    </td>
                    {/* <td>
                      <a
                        className="slider slider-right twitter"
                        href="https://githubfinder2705.netlify.app/"
                      >
                        <div className="slide-1">
                          <span className="fi-social-twitter" />
                        </div>
                        <div className="slide-2">Click Here</div>
                      </a>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <a href="#" target="_blank">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_CZaZAyrPT8VQnqN_hLzpmiBI3Y41F6Now&usqp=CAU"
                  alt="contact"
                />
              </a>
              <div>
                <a href="#" target="_blank">
                  <h2>Contact Keeper</h2>
                </a>
                <p>
                  This is a personal database system to store information about
                  your friends, family and colleges in one central place
                </p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Github-repo</th>
                    {/* <th>Live-link</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* SLIDER2 LEFT */}
                      <a
                        className="slider slider-left fb"
                        href="https://github.com/LuyandaLM/ContactKeeper/"
                        target="blank"
                      >
                        <div className="slide-1">
                          <span className="fi-social-facebook" />
                        </div>
                        <div className="slide-2">Click Here</div>
                      </a>
                    </td>
                    {/* <td>
                      <a className="slider slider-right twitter" href="#">
                        <div className="slide-1">
                          <span className="fi-social-twitter" />
                        </div>
                        <div className="slide-2">Click Here</div>
                      </a>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <a href="#" target="_blank">
                <img
                  src="https://www.businesshorsepower.com/wp-content/uploads/2015/08/Business-Systems1.jpg"
                  alt="Klimatic Flutter"
                />
              </a>
              <div>
                <a href="#" target="_blank">
                  <h2>IT Logger</h2>
                </a>
                <p>
                  A computer app for making a systematic recording of events,
                  observations, or measurements
                </p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Github-repo</th>
                    {/* <th>Live-link</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* SLIDER3 LEFT */}
                      <a
                        className="slider slider-left fb"
                        href="https://github.com/LuyandaLM/IT-Logger/"
                        target="blank"
                      >
                        <div className="slide-1">
                          <span className="fi-social-facebook" />
                        </div>
                        <div className="slide-2">Click Here</div>
                      </a>
                    </td>
                    {/* <td>
                      <a className="slider slider-right twitter" href="#">
                        <div className="slide-1">
                          <span className="fi-social-twitter" />
                        </div>
                        <div className="slide-2">Click Here</div>
                      </a>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h1 className="section-header">CONTACT</h1>
        <div className="contact-wrapper">
          {/*-------------- CONTACT PAGE LEFT ---------------*/}
          <form
            className="form-horizontal"
            role="form"
            method="post"
            action="mailto:luyandamabozo@gmail.com"
          >
            <div className="form-group">
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-lg-6">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  required
                />
              </div>
            </div>
            <textarea
              className="form-control"
              rows={10}
              placeholder="MESSAGE"
              required
              defaultValue={""}
            />
            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="button">
                <i className="fa fa-paper-plane" />
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>

          {/*-------------- CONTACT PAGE RIGHT ---------------*/}
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-map-marker fa-2x">
                  <span className="contact-text place">
                    Cape Town, South Africa
                  </span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text phone">
                    <a href="tel:+27-84-722-9233" title="Give me a call">
                      (084) 722-9233
                    </a>
                  </span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      Luyandamabozo@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
            <hr />
            <ul className="social-media-list">
              e
              <li>
                <a
                  href="https://github.com/LuyandaLM"
                  target="_blank"
                  className="contact-icon"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-codepen" aria-hidden="true" />
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
