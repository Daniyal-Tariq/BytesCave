import React from 'react';
import './footer.css'
import { Container } from 'react-bootstrap';

function Footer() {
    return (
      
        <div className="footer-section">
            <Container>
                <div className="footer-content">
                <div className="footer-logo">
                    <img src={require("../../../assets/images/Logo.png")}/>
                </div>
                <div className="copyright">
                    <p>© 2020. BytesCave ♥️</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Work</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul>
                        <li><img src={require("../../../assets/images/fb.png")}/></li>
                        <li><img src={require("../../../assets/images/twitter.png")}/></li>
                        <li><img src={require("../../../assets/images/Linkedin.png")}/></li>
                    </ul>

                </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;