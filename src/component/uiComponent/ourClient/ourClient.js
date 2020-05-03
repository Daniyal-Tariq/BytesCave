import React from 'react';
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import './ourClient.css';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
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
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

function OurClient() {
    return (
        <div className="client-section">
            <Container>
                <div className="client-content">
                    <h1>What's Our Clients Say</h1>
                    <p>NO MATTER how many examples we provide, or what we might say to convince
                    you of the quality of our work, those who say it best are those who have
                    already received our services. On the right are samples of what a few of
                        our clients have had to say about working with BytesCave.</p>
                </div>
                <div className="slider-container">
                    <Slider {...settings} className="client-slider">


                        <div>
                            <div className="client-card">
                                <img className="testimonial-img" src={require("../../../assets/images/client-img-1.jpg")} alt="" />
                                <p>"I can honestly say that BytesCave has an impressive arsenal of talent that is ready to take your development needs to the next level."</p>
                                <div className="card-title">
                                    <span></span>
                                    <h1>Omer Irfan.</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="client-card">
                                <img className="testimonial-img" src={require("../../../assets/images/client-img-2.jpg")} alt="" />
                                <p>"I'm always impressed by how well they understand our clients' needs and how their team adjusts accordingly."</p>
                                <span></span>
                                <h1>Raza Mughal.</h1>
                                <img src="assets/images/user.png" alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default OurClient;