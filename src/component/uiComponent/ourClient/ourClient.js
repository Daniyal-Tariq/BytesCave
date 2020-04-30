import React from 'react';
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import './ourClient.css';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

function OurClient() {
    return (
        <div className="client-section">
            <Container>
                <div className="client-content">
                    <h1>What's Our Clients Say</h1>
                    {/* <p></p> */}
                </div>
                <div className="slider-container">
                    <Slider {...settings} className="client-slider">


                        <div>
                            <div className="client-card">
                                <img className="testimonial-img" src="assets/images/testimonial.png" alt="" />
                                <p>"I can honestly say that BytesCave has an impressive arsenal of talent that is ready to take your development needs to the next level."</p>
                                <span></span>
                                <h1>Omer Irfan.</h1>
                                <img src="assets/images/user.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="client-card">
                                <img className="testimonial-img" src="assets/images/testimonial.png" alt="" />
                                <p>"I can honestly say that BytesCave has an impressive arsenal of talent that is ready to take your development needs to the next level."</p>
                                <span></span>
                                <h1>Omer Irfan.</h1>
                                <img src="assets/images/user.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="client-card">
                                <img className="testimonial-img" src="assets/images/testimonial.png" alt="" />
                                <p>"I can honestly say that BytesCave has an impressive arsenal of talent that is ready to take your development needs to the next level."</p>
                                <span></span>
                                <h1>Omer Irfan.</h1>
                                <img src="assets/images/user.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="client-card">
                                <img className="testimonial-img" src="assets/images/testimonial.png" alt="" />
                                <p>"I can honestly say that BytesCave has an impressive arsenal of talent that is ready to take your development needs to the next level."</p>
                                <span></span>
                                <h1>Omer Irfan.</h1>
                                <img src="assets/images/user.png" alt="" />
                            </div>
                        </div>
                        {/*                         
                        <div className="col-md-6 col-lg-6">
                            <div className="client-card">
                                <img className="testimonial-img" src="assets/images/testimonial.png" alt="" />
                                <p>"I can honestly say that BytesCave has an impressive arsenal of talent that is ready to take your development needs to the next level."</p>
                                <span></span>
                                <h1>Omer Irfan.</h1>
                                <img src="assets/images/user.png" alt="" />
                            </div>
                        </div> */}

                        {/* <div className="col-md-6 col-lg-6">
                            <div className="slider-card">
                                <img className="testimonial-img" src="assets/images/testimonial.png" alt="" />
                                <p>"Really good. Since I invested in ppsolver I made over 100,000 dollars profits. Nice work on your paynext. I would be lost without paynext."</p>
                                <h1>Connor M.</h1>
                                <img src="assets/images/user.png" alt="" />
                            </div>
                        </div> */}
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default OurClient;