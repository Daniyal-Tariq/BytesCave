import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import './services.css'

export default class Services extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 2
    };
    return (
      <div className="services">
        <Container>
          <div className="services-section">
            <div className="services-content">
              <h1>Our Services</h1>
              <p>To learn more about how we can help your business, check out our areas of expertise and don't hesitate to shoot us a question!</p>
            </div>
            <div className="services-slider">
              <Slider {...settings}>
                 
                <div>
                  <div className="services-card">
                    <h6>1 Services</h6>
                    <h1>Mobile App</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>2 Services</h6>
                    <h1>Mobile App</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>3 Services</h6>
                    <h1>Mobile App</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>4 Services</h6>
                    <h1>Mobile App</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}











// import React from "react";
// import './services.css'
// import { Container, Row } from "react-bootstrap";




// function Services() {
//   return (
//     <div className="services">
//       <Container>
//         <div className="services-section">
//           <div className="services-content">
//             <h1>Our Services</h1>
//             <p>To learn more about how we can help your business, check out our areas of expertise and don't hesitate to shoot us a question!</p>
//           </div>
//           <div className="services-slider">
//             <div className="services-grid">
//               <Row>
//                 <div className="services-card col-lg-5 col-md-5 col-sm-12 col-xs-12">
//                   <h6>2 Services</h6>
//                   <h1>Mobile App</h1>
//                   <p> Read More <span>+</span></p>
//                 </div>
//                 <div className="services-card col-lg-5 col-md-5 col-sm-12 col-xs-12">
//                   <h6>2 Services</h6>
//                   <h1>Mobile App</h1>
//                   <p> Read More <span>+</span></p>
//                 </div>
//               </Row>
//               <Row>
//                 <div className="services-card col-lg-5 col-md-5 col-sm-12 col-xs-12">
//                   <h6>2 Services</h6>
//                   <h1>Mobile App</h1>
//                   <p> Read More <span>+</span></p>
//                 </div>
//                 <div className="services-card col-lg-5 col-md-5 col-sm-12 col-xs-12">
//                   <h6>2 Services</h6>
//                   <h1>Mobile App</h1>
//                   <p> Read More <span>+</span></p>
//                 </div>
//               </Row>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// }


// export default Services;
