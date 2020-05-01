import React from "react";
// import { Link } from "react-router-dom";
import './services.css'
import { Container, Row } from "react-bootstrap";
// import Slider from "react-slick";
// import "./services.scss";




function Services() {
  return (
    <div className="services">
      <Container>
        <div className="services-section">
          <div className="services-content">
            <h1>Our Services</h1>
            <p>To learn more about how we can help your business, check out our areas of expertise and don't hesitate to shoot us a question!</p>
          </div>
          <div className="services-slider">
            <div className="services-grid">
              <Row>
                <div className="services-card col-lg-5 col-md-5 col-sm-12 col-xs-12">
                  <h6>2 Services</h6>
                  <h1>Mobile App</h1>
                  <p> Read More <span>+</span></p>
                </div>
                <div className="services-card col-lg-5 col-md-5 col-sm-12 col-xs-12">
                  <h6>2 Services</h6>
                  <h1>Mobile App</h1>
                  <p> Read More <span>+</span></p>
                </div>
              </Row>
              <Row>
                <div className="services-card col-lg-5 col-md-5 col-sm-12 col-xs-12">
                  <h6>2 Services</h6>
                  <h1>Mobile App</h1>
                  <p> Read More <span>+</span></p>
                </div>
                <div className="services-card col-lg-5 col-md-5 col-sm-12 col-xs-12">
                  <h6>2 Services</h6>
                  <h1>Mobile App</h1>
                  <p> Read More <span>+</span></p>
                </div>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}





// const settings = {
//   dots: true,
//   arrows: false,
//   infinite: true,
//   speed: 500,
//   rows: 2,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };

// function Services() {
//   return (
//     <div className="service">
//       <Container>
//         <div className="service-content">
//           <h1>Our Services</h1>
//           <p>
//             To learn more about how we can help your business, check out our areas of expertise and don't hesitate to shoot us a question!
//           </p>
//           {/* <Link to="/not-found">View All</Link> */}
//         </div>
//         <div className="service-slider">
//           <Slider {...settings} className="service-slider">
//             <div>
//               <div className="service-slide">
//                 <div className="services">
//                   <h6>1 Services</h6>
//                   <h1>Mobile App</h1>
//                   <p> Read More <span>+</span></p>
//                   <li>
//                     <h6>best services</h6>
//                     <h1>Mobile app</h1>
//                     <p>
//                       read more <b>+</b>
//                     </p>
//                   </li>
//                 </div>
//                 <div className="services">
//                   <h6>2 Services</h6>
//                   <h1>Mobile App</h1>
//                   <p> Read More <span>+</span></p>
//                 </div>

//                 <div className="services">
//                   <h6>3 Services</h6>
//                   <h1>Mobile App</h1>
//                   <p> Read More <span>+</span></p>
//                 </div>

//                 <div className="services">
//                   <h6>4 Services</h6>
//                   <h1>Mobile App</h1>
//                   <p> Read More <span>+</span></p>
//                 </div>


//               </div>
//             </div>


//           </Slider>
//         </div>
//       </Container>
//     </div>
//   );
// }

export default Services;
