import React from 'react';
import Link from 'next/link';

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
               
                       <div className='row'>
                       <div className="col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>Sweden Office</h3>
                            <p>Sallerupsvägen 28D 212 18 Malmö, Sweden</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>Denmark Office</h3>
                            <p>Smedeland 7 1.Sal 2600 Glostrup, Denmark</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>Contact</h3>
                            <p><a href="tel:+46 766 276 276">+46 766 276 276</a></p>
                            <p><a href="tel:+46 102 146 276">+46 102 146 276</a></p>
                            <p><a href="tel:+45 53 766 276">+45 53 766 276</a></p>
                            <p>E-mail: <a href="mailto:hello@tracer.com">hello@tarn.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>Quick Contact</h3>
                            <p>E-mail: <a href="mailto:info@futureconcerns.se">info@futureconcerns.se</a></p>
                            <p>Technical Issues: <a href="mailto:support@futureconcerns.se">support@futureconcerns.se</a></p>
                        </div>
                    </div>
                       </div>
                    </div>
                    <div  className='col-md-12'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.9396559788734!2d13.02887897582818!3d55.6030638730291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3d932f055f7%3A0xd17870a79e55510a!2sSallerupsv%C3%A4gen%2028d%2C%20212%2018%20Malm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2s!4v1712075150650!5m2!1sen!2s" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
        
            
        </div>
    )
}

export default ContactInfo;