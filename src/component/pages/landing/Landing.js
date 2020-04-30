import React, { Component } from 'react';
import './Landing.css';
import Header from '../../uiComponent/header/Header';
import { Container } from "react-bootstrap";
import UiSection from '../../uiComponent/uiSection/uiSection';
import Services from '../../uiComponent/services-section/services';
import Footer from '../../uiComponent/footer/footer'
import OurClient from '../../uiComponent/ourClient/ourClient';
import FormSection from '../../uiComponent/form/Form';
import SimpleSlider from '../../uiComponent/Slider/Slider'

// const renderContent = (array, className) => {
//   if (array) {
//     return array.map((obj, index) => {
//       return (
//         <div key={index} className="repeated-section">
//           <img src={obj.icon} alt='icon' />
//           <h1>{obj.title}</h1>
//           <p>{obj.description}</p>
//         </div>
//       )
//     })
//   } else {
//     return null;
//   }
// }

function HeaderSection() {
  return (
    <Container>
      <div className="header-content">
        <h1>BytesCave is a Custom Software Development Company</h1>
        <p>BytesCave provides turn-key software development services that add value to your business. Contact us today and transform your ideas into solutions!</p>
        <button>Start Your Project Today</button>
      </div>
    </Container>
  )
}

function LeadingAgency() {
  return (
    <div className="leading-section">
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
    </div>
  )
}

function BioSection() {
  return (
    <div className="bio-section">
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
    </div>
  )
}





function Contact() {
  return (
    <div className="contact-section">
      <Container>
        <div className="contact-content">
          <h1>The great aim of education is not knowledge but action</h1>
          <button>Take Action Now</button>
        </div>
      </Container>
    </div>
  );
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
        {/* <Services /> */}
        <BioSection />
        {/* <OurClient /> */}
        <FormSection />
        <Services />
        {/* <SimpleSlider /> */}
        {/* <Footer /> */}
      </div>
    )
  }
}
