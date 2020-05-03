import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import './services.css'

export default class Services extends Component {
  render() {
    const settings = {
      // className: "center",
      // centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            rows: 1,
            slidesPerRow: 1,
            centerMode: false,
          }
        }
      ]
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
                    <h6>Development</h6>
                    <h1>Mobile App</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Development</h6>
                    <h1>Web development</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Development</h6>
                    <h1>Branding</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Development</h6>
                    <h1>Logo Desgin</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>

                <div>
                  <div className="services-card">
                    <h6>Designing</h6>
                    <h1>Media kit</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Designing</h6>
                    <h1>Video Editing</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Designing</h6>
                    <h1>Animations</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Designing</h6>
                    <h1>UI/UX</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>

                <div>
                  <div className="services-card">
                    <h6>Marketing</h6>
                    <h1>SEO</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Marketing</h6>
                    <h1>SMM</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Marketing</h6>
                    <h1>Ecom Marketing</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Marketing</h6>
                    <h1>Inferencer Marketing</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>

                <div>
                  <div className="services-card">
                    <h6>Security</h6>
                    <h1>Pentesting</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Security</h6>
                    <h1>Growth Hacking</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Security</h6>
                    <h1>Security Solutions</h1>
                    <p> Read More <span>+</span></p>
                  </div>
                </div>
                <div>
                  <div className="services-card">
                    <h6>Security</h6>
                    <h1>Recovery</h1>
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




