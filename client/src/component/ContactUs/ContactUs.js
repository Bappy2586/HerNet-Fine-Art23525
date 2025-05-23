import React from 'react';
import "./ContactUs.css"
import Banner from "../../assets/ContactUs/contact 1.png"
import Logo1 from "../../assets/ContactUs/address 1.png"
import Logo2 from "../../assets/ContactUs/mail.png"
import Logo3 from "../../assets/ContactUs/Clock.png"

const ContactUs = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <img src={Banner} alt="Banner" className="rounded custom-image" style={{width:"100% !important"}}/>
                </div>
                <div className='col-md-12'>
                <h1>Contact Us</h1>
                <div className='row'>
                <div className='col-md-4'>
                    <div className="card">
                        <img src={Logo1} alt="Logo1" className="rounded custom-logo" />
                        <h2>Office address</h2>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className="card">
                        <img src={Logo2} alt="Logo1" className="rounded custom-logo" />
                        <h2>Contact mail</h2>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className="card">
                        <img src={Logo3} alt="Logo1" className="rounded custom-logo" />
                        <h2>Opening hours</h2>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;