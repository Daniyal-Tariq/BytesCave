import React from 'react';
import './footer.css'
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        // <div>
        //     <div className="footer-section">
        //         <div className="footer-content">
        //             <img src={require('../../../assets/images/footer-logo.png')} />
        //             {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> */}
        //         </div>
        //         <div className="footer-links">
        //             <ul>
        //                 <li>Home</li>
        //                 <li>About</li>
        //                 <li>Services</li>
        //                 <li>Work</li>
        //                 <li>Contact</li>
        //             </ul>
        //         </div>
        //         <div className="social-links">
        //             <div className="social-content">
        //                 <h1>ADDRESS</h1>
        //                 <p>123 Lorem Ipsum is simply dummy text</p>
        //             </div>
        //             <div className="social-content">
        //                 <h1>(123) 456 789</h1>
        //                 <h1>abcdxyz@gmail.com</h1>
        //             </div>
        //             <div className="social-content">
        //                 <div className="social-icons">
        //                     <img src={require('../../../assets/images/twitter.png')} draggable={false} />
        //                     <p>Twitter</p>
        //                 </div>
        //                 <div className="social-icons">
        //                     <img src={require('../../../assets/images/google-plus.png')} draggable={false} />
        //                     <p>Google Plus</p>
        //                 </div>
        //                 <div className="social-icons">
        //                 <img src={require('../../../assets/images/Facebook.png')} draggable={false} />
        //                     <p>Facebook</p>
        //                 </div>
        //                 <div className="social-icons">
        //                 <img src={require('../../../assets/images/Linkedin.png')} draggable={false} />
        //                     <p>LinkedIn</p>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        //     <div className="copyright-section">
        //         <p>Copyright © 2020 . BytesCave  . All Rights Reserved</p>
        //     </div>
        // </div>
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
                        <li><img src={require("../../../assets/images/linkedin.png")}/></li>
                    </ul>

                </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;