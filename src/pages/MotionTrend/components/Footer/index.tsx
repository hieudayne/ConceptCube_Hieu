import React from 'react';

function Footer() {
    return (
        <div className="footer ">
            <div className="contact containerPage">
                <div className="contact-detail">
                    <p className="contact-title">Contact</p>
                    <p className="contact-mail">
                        motiontrend@test.com
                    </p>
                </div>
                <div className="social">
                    <p className="copyright">
                        @Moitioned All rights reserved
                    </p>
                    <div className="instagram">
                        <img src="/assets/icons/instagram.png" alt="" />
                    </div>
                    <div className="facebook">
                        <img src="/assets/icons/facebook.png" alt="" />
                    </div>
                    <div className="youtube">
                        <img src="/assets/icons/youtube.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="introduction-footer containerPage">
                <div className="custom">
                    <p className="introduction">
                        Introduction
                    </p>
                    <p className="term">
                        Terms of Service
                    </p>
                    <p className="language">
                        Language
                    </p>
                    <div className="customer">
                        Customer Service
                    </div>
                </div>
                <div className="logo">
                    <img src="assets/images/black-logo.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;