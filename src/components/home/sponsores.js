import React from "react"
import { Carousel, Container } from "react-bootstrap"
import logo1 from "../../assets/img/logo/logo1.png"
import logo2 from "../../assets/img/logo/logo2.png"
import logo3 from "../../assets/img/logo/logo3.png"
// import logo4 from "../assets/img/logo/logo4.png"
// import logo5 from "../assets/img/logo/logo5.png"
import "./sponsores.scss"

const Sponsores = () => {
    return (
        <section className=" section sponsores-section">
            <Container className="text-center">
                <h2 className="secondary-header">OUR SPONSORES</h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block logo"
                            src={logo1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block logo"
                            src={logo2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block logo"
                            src={logo3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    )
}

export default Sponsores