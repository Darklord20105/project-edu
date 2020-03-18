import React from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from "react-bootstrap"
import { FormattedMessage } from "react-intl"

import logo1 from "../../assets/img/logo/logo1.png"
import logo2 from "../../assets/img/logo/logo2.png"
import logo3 from "../../assets/img/logo/logo3.png"
import logo4 from "../../assets/img/logo/logo4.png"
import logo5 from "../../assets/img/logo/logo5.png"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

const Sponsores = () => {
    return (
        <section className=" section sponsores-section">
            <Container>
                <h2 className="secondary-header text-center"><FormattedMessage id="sponsers" /></h2>
                <Carousel
                    swipeable={false}
                    arrows={false}
                    draggable={false}
                    showDots={true}
                    centerMode={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="caro"
                    dotListClass="custom-dot-list-style"
                >
                    <div>
                        <img
                            className="d-block mx-auto logo"
                            src={logo1}
                            alt="slide"
                        />
                    </div>
                    <div>
                        <img
                            className="d-block mx-auto logo"
                            src={logo2}
                            alt="slide"
                        />
                    </div>
                    <div>
                        <img
                            className="d-block mx-auto logo"
                            src={logo3}
                            alt="slide"
                        />
                    </div>
                    <div>
                        <img
                            className="d-block mx-auto logo"
                            src={logo4}
                            alt="slide"
                        />
                    </div>
                    <div>
                        <img
                            className="d-block mx-auto logo"
                            src={logo5}
                            alt="slide"
                        />
                    </div>

                </Carousel>
            </Container>
        </section>

    )
}

export default Sponsores