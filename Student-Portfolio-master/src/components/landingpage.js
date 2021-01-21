import React from "react";
import Image from "./012";

const LandingPage = () => {
  return (
    <div>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger"><div /></div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#timeline">Timeline</a></li>
                  <li><a href="#work">Work</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Home */}
        <section id="home">
          <div className="showcase">
            <div className="container">
              <div className="showcase-content">
                <div className="home-title">
                  <h1>I'm</h1>
                  <h1>Luyanda Mabozo.</h1>
                  <hr />
                  <p>JUNIOR DEVELOPER &amp;</p><p2>INTERN AT LC STUDIOS</p2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About */}
        <section id="about">
          <div className="container">
            <h2 className="about-title text-center pt-4">About Me</h2>
            <div className="bottom-line" />
            <div className="about-content py-3">
              <div className="about-image"><Image /></div>
              <div className="about-text">
                <p className="lead">Technology and its advancement has always fascinated me. I have always loved
                  reading, learning and exploring more about it. I am a very creative individual, who has proven himself to be
                  quite resourceful as a developer. Through all these experiences, I have:</p>
                <ul className="py-2">
                  <li><i className="fa fa-chevron-right" /> Cultivated a good understanding of Web Development.</li>
                  <li><i className="fa fa-chevron-right" /> Gained knowledge of React, Django, Javascript, RPA & Python</li>
                  <li><i className="fa fa-chevron-right" /> Acquired the know-how of Web design principles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Skills */}
        <section id="skills">
          <div className="container">
            <h2 className="skills-title text-center pt-4">Skills</h2>
            <div className="bottom-line" />
            <div className="skills-content py-3">
              <div>
                <h3>Javascript</h3>
                <div>
                  <div className="skill-rate" style={{width: '80%', background: 'orange'}} />80%
                </div>
              </div>
              <div>
                <h3>HTML/CSS</h3>
                <div>
                  <div className="skill-rate" style={{width: '75%', background: 'orange'}} />75%
                </div>
              </div>
              <div>
                <h3>Python</h3>
                <div>
                  <div className="skill-rate" style={{width: '50%', background: 'orange'}} />50%
                </div>
              </div>
              <div>
                <h3>Django</h3>
                <div>
                  <div className="skill-rate" style={{width: '60%', background: 'orange'}} />60%
                </div>
              </div>
              <div>
                <h3>MongoDB</h3>
                <div>
                  <div className="skill-rate" style={{width: '55%', background: 'orange'}} />55%
                </div>
              </div>
              <div>
                <h3>RPA</h3>
                <div>
                  <div className="skill-rate" style={{width: '60%', background: 'orange'}} />60%
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Timeline */}
        <section id="timeline">
          <div className="container">
            <h2 className="timeline-title text-center pt-4">Timeline</h2>
            <div className="bottom-line" />
           <div id="resume">
        <Image alt="Luyanda"/>
        <h1>Luyanda Mabozo</h1>
        <p id="objective">I am a reserved but ambitious young professional seeking a career that fits my professional skills, personality, and murderous tendencies. My good birth and education have allowed me to advance the prospects of several coding skills.
        </p><dl>
          <dt>Education
          </dt><dd>
          <h2>Vorentoe High School<span> 2011 </span></h2>

            <h2>Brackenfell High School<span> 2012 – 2015</span></h2>

            <h2>Cape Peninsula University of Technology <span> 2017 – 2019</span></h2>
            <p><strong>Course:</strong> Marketing<br /></p>  
          </dd></dl>
        <dl>
          <dt>Skills
          </dt><dd>
            <h2>Office Skills</h2>
            <p>Office and records management, database administration, event organization, customer support, travel coordination
            </p><h2>Computer skills</h2>
            <p>Microsoft productivity software (Word, Excel, etc), Windows
            </p></dd></dl>
        <dl>
          <dt>Experience
          </dt><dd>
            <h2>City Of Cape Town<span>2014 – 2015</span></h2>
            <ul>
              <li>Data capturing,
              </li><li>Filing,
              </li><li>Customer service
              </li></ul>
            <h2>Leapfrog Properties<span>2016</span></h2>
            <ul>
              <li> marketing immovable property to prospective buyers and/or tenants;
              </li><li> managing immovable property for clients;
              </li><li> facilitating a purchase/lease by guiding prospective buyers/tenants through the process;
              </li><li> facilitating a sale by guiding sellers through the selling process;
              </li><li> preparing estate agency related contracts and documentation.
              </li></ul>
            <h2>Customer Care Solutions<span>2017 – 2018</span></h2>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur
              </li><li>Lorem ipsum dolor sit amet consectetur
              </li></ul>
          </dd>
        </dl>
        <dl>
          <dt>Hobbies
          </dt><dd>Lorem ipsum dolor sit amet consectetur
          </dd></dl>
        </div>
          </div>
        </section>
        <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="text-uppercase section-heading">Testimonials</h2>
              <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur</h3>
            </div>
          </div>
          <div className="row space-rows" id="animated-cards">
            <div className="col">
              <div className="card cards-shadown cards-hover">
                <div className="card-header"><span className="space"><i class="far fa-comments service-icon" id="service-icon-1"/></span>
                  <div className="cardheader-text">
                    <h4 id="heading-card-1" className="heading-card">Jason Wandrag</h4>
                    <p id="cardheader-subtext-1" className="cardheader-subtext">Senior Web Development</p>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text sub-text-color"> Description:</p>
                  <p className="card-text cardbody-sub-text">Lorem ipsum.<br /><br /><br /></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cards-shadown cards-hover">
                <div className="card-header"><span className="space"><i class="far fa-comments service-icon" id="service-icon-2"/></span>
                  <div className="cardheader-text">
                    <h4 id="heading-card-2" className="heading-card">Tyron Keet</h4>
                    <p id="cardheader-subtext-2" className="cardheader-subtext">Colleague</p>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text sub-text-color"> Description:</p>
                  <p className="card-text cardbody-sub-text">Lorem Ipsum<br /><br /><br /></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cards-shadown cards-hover">
                <div className="card-header cards-header-hover"><span className="space"><i class="far fa-comments service-icon" id="service-icon-3"/></span>
                  <div className="cardheader-text">
                    <h4 id="heading-card-3" className="heading-card">Akholiwe Mtukuse</h4>
                    <p id="cardheader-subtext-3" className="cardheader-subtext">Lorem Ipsum</p>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text sub-text-color"> Description:</p>
                  <p className="card-text cardbody-sub-text">Lorem Ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section id="work">
          <div className="container">
            <h2 className="work-title text-center pt-4">Projects</h2>
            <div className="bottom-line" />
            <div className="work-content py-3">
              <div>
                <a href="#" target="_blank">
                  <img src="https://i.postimg.cc/dtwYT5pg/Covid-Tracker-Java.png" alt="Covid Tracker" />
                </a>
                <div>
                  <a href="#" target="_blank">
                    <h2>Covid Tracker</h2>
                  </a>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam, magnam nostrum
                    ab in saepe tempora quibusdam perspiciatis earum consequuntur?</p>
                </div>
              </div>
              <div>
                <a href="#" target="_blank">
                  <img src="https://i.postimg.cc/DwRp1Zmm/Film-Flix.png" alt="Film Flix" />
                </a>
                <div>
                  <a href="#" target="_blank">
                    <h2>Film Flix</h2>
                  </a>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam, magnam nostrum ab in
                    saepe tempora quibusdam perspiciatis earum consequuntur?</p>
                </div>
              </div>
              <div>
                <a href="#" target="_blank">
                  <img src="https://i.postimg.cc/nLv27G6w/Klimatic-Flutter.png" alt="Klimatic Flutter" />
                </a>
                <div>
                  <a href="#" target="_blank">
                    <h2>Klimatic Flutter</h2>
                  </a>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam, magnam nostrum ab in
                    saepe tempora quibusdam perspiciatis earum consequuntur?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <h2 className="contact-title text-center pt-4">Contact</h2>
            <div className="bottom-line" />
            <p className="text-center lead pt-1">For any queries, please do contact me with the information below:</p>
            <div className="contact-content py-3">
              <div className="text-center">
                <a href="https://www.facebook.com/divij.gupta.73" target="_blank">
                  <i className="fab fa-facebook fa-4x" />
                </a>
              </div>
              <div className="text-center">
                <a href="https://www.linkedin.com/in/divij-gupta-9b1368154/" target="_blank">
                  <i className="fab fa-linkedin fa-4x" />
                </a>
              </div>
              <div className="text-center">
                <a href="https://github.com/divijgupta970" target="_blank">
                  <i className="fab fa-github-square fa-4x" />
                </a>
              </div>
            </div>
            <div className="contact-address">
              <div className="text-center py-2">
                <i className="fas fa-envelope fa-3x my-1" />
                <p>divijgupta66@gmail.com</p>
              </div>
              <div className="text-center py-2">
                <i className="fas fa-phone fa-3x my-1" />
                <p>999-999-9999</p>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer">
          <div className="footer-content text-center">
          </div></footer></div>
  );
};

export default LandingPage;
