import React, { Component } from 'react';
import './Landing.css';
// import Header from '../../uiComponent/header/Header';
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Services from '../../uiComponent/services-section/services';
// import Footer from '../../uiComponent/footer/footer'
import OurClient from '../../uiComponent/ourClient/ourClient';
import FormSection from '../../uiComponent/form/Form';
import { Link, Element } from 'react-scroll';

const Header = (props) => {
  const { fixedHeader } = props;
  console.log(fixedHeader)
  return (
    <Navbar expand="lg" className={`custom-header ${fixedHeader ? 'fixedHeader' : ''}`}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={require('../../../assets/images/Logo.png')} className="header-logo" draggable={false} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="m-r">
            <Nav.Link><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link></Nav.Link>
            <Nav.Link><Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >About</Link></Nav.Link>
            <Nav.Link><Link activeClass="active" to="service" spy={true} smooth={true} duration={500}>Service</Link></Nav.Link>
            <Nav.Link><Link activeClass="active" to="work" spy={true} smooth={true} duration={500} >Work</Link></Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <button className="nav-button">
              <Link activeClass="active" to="form" spy={true} smooth={true} duration={500} > Lets Connect</Link>
            </button>
            {/* <Nav.Link href="#contact">lets Connect</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}



// home section
function HeaderSection() {
  return (
    <Container>
      <Element name="home" className="element" >
        <div className="header-content">
          <h1>BytesCave is a Software Development Company</h1>
          <p>BytesCave provides turn-key software development services that add value to your business. <br /> Contact us today and transform your ideas into solutions!</p>
          <button><Link activeClass="active" to="form" spy={true} smooth={true} duration={500} >Start Your Project Today</Link></button>
        </div>
      </Element>
    </Container>

  )
}


// about section
function LeadingAgency() {
  return (

    <div className="leading-section">
      <Element name="about" className="element" >
        <div className="leading-image">
          <img src={require('../../../assets/images/leading-section.png')} />
        </div>
        <div className="leading-content">
          <h1>We are a leading international consulting agency</h1>
          <p>BytesCave offers our customers a wealth of technical and business expertise.
          We create diverse, complex, web and mobile solutions for any business need. Our
          knowledge and experience translate to added value and peace of mind for our customers.
          With BytesCave you get quality software and perfect service every time.</p>
          <ul>
            <li>
              <img src={require('../../../assets/images/tick.png')} />
              <p>We listen to your ideas and create custom software solutions from the ground up,
              designed especially for your business. BytesCave customers agree that our engineers
              and executive team are some of the best in the world. You can trust that we'll do it
                right the first time.</p>
            </li>
            <li>
              <img src={require('../../../assets/images/tick.png')} />
              <p>Before BytesCave actually engineers a product, we always talk to our customers to understand
              their needs. Our team can analyze your project's functionality, business logic, software
              architecture, and future user scenarios. We'll handle the small stuff so you can focus on the
              big picture.</p>
            </li>
          </ul>
        </div>
      </Element>
    </div>

  )
}

// work section

function BioSection() {
  return (

    <div className="bio-section">
      <Element name="work" className="element" >
        <div className="bio-image">
          <img src={require("../../../assets/images/Bio.png")} />
        </div>
        <div className="bio-content">
          <h1>Who We Serve</h1>
          <p>BytesCave serves businesses in all major sectors, providing exceptional software solutions for
          large corporations, mid-sized enterprises, and startups. We use industry-specific knowledge and
          custom-tailor our products to each customer's unique needs.</p>
          {/* <button>View all</button> */}
        </div>
      </Element>
    </div >

  )
}


function Footer() {
  return (
    <div className="footer-section">
      <Container>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={require("../../../assets/images/Logo.png")} />
          </div>
          <div className="copyright">
            <p>© 2020. BytesCave ♥️</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
              <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
              <li><Link activeClass="active" to="service" spy={true} smooth={true} duration={500}>Service</Link></li>
              <li><Link activeClass="active" to="work" spy={true} smooth={true} duration={500}>Work</Link></li>
              <li><Link activeClass="active" to="form" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </div>
          <div className="social-links">
            <ul>
              <li><a href="https://www.facebook.com/bytescave"><img src={require("../../../assets/images/fb.png")} /></a></li>
              <li><a href="https://twitter.com/bytescave"><img src={require("../../../assets/images/twitter.png")} /></a></li>
              <li><a href="https://www.instagram.com/bytescave/"><img src={require("../../../assets/images/Linkedin.png")} /></a></li>
            </ul>

          </div>
        </div>
      </Container>
    </div>
  )
}





export default class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='header-section'>
          <HeaderSection />
        </div>
        <LeadingAgency />
        <div className="element-services">
          <Element name="service" className="element">
            <Services />
          </Element>
        </div>

        <OurClient />
        <BioSection />

        <div className="element-form">
          <Element name="form" className="element">
            <FormSection />
          </Element>
        </div>


        {/* <CreativeWork /> */}
        <Footer />
      </div >
    )
  }
}
