import React from "react"
import Img from "../../assets/img/about-main.jpg"

const AboutMain = () => {
    return (
        <section>
            <div className="container about-main">
                <div className="row">
                    <h1 className="primary-heading">About Us</h1>
                    <div className="about-image">
                        <img src={Img} style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMain