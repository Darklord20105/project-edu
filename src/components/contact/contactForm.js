import React from "react"
import { Link } from "gatsby"

const ContactForm = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-6 col-sm-12 contact-form">
                    <h1 className="title"><span>تواصل معنا</span> الأن!! </h1>
                    <h2 className="subtitle">يمكنكم دوماً الاتصال بنا عبر الرقم الظاهر أمامكم أو من خلال نموذج الاتصال أو عبر صفحتنا على الفيس بوك.</h2>
                    <form action="">
                        <input type="text" name="name" placeholder="Your Name" />
                        <input type="email" name="e-mail" placeholder="Your E-mail Adress" />
                        <input type="tel" name="phone" placeholder="Your Phone Number" />
                        <textarea name="text" id="" rows="8" placeholder="Your Message"></textarea>
                        <button className="btn btn-outline-info font-weight-bold">ٍإرسال - Send</button>
                    </form>
                </div>
                <div className="col-md-6 col-sm-12 map">
                    <div className="row contact-info text-center">
                        {/* <h3>Contact Info</h3> */}
                        <div>
                            <div className="contact-info-item"><i class="far fa-map" style={{ color: "rgb(91, 154, 207)" }}></i><span>address: 463 Lyon Avenueord, Us 01757</span></div>
                            <div className="contact-info-item"><i class="fas fa-envelope-open-text" style={{ color: "rgb(91, 154, 207)" }}></i><span>info@kitchen.com</span></div>
                            <div className="contact-info-item"><i class="fas fa-phone-square" style={{ color: "rgb(91, 154, 207)" }}></i><span>Phone Number: + 180 - 123 - 4567</span></div>
                            <div className="contact-social">
                                <Link><i class="fab fa-facebook-square"></i></Link>
                                <Link><i class="fab fa-twitter-square"></i></Link>
                                <Link><i class="fab fa-google-plus-square"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3 mx-3">
                <div className="col-12 contact-map">
                    <div className="row contact-map-img">
                        <iframe
                            title="test map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112061.09262729759!2d77.208022!3d28.632485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x644e33bc3def0667!2sIndior+Tours+Pvt+Ltd.!5e0!3m2!1sen!2sus!4v1527779731123"
                            style={{ width: "100%", height: "100%", frameborder: "0", border: "0" }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm