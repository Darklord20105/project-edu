import React from "react"
import Carousel from "react-multi-carousel"
import Img from "../../assets/img/logo/logo1.png"

// dummy data for testing
const data = [
    {
        name: "Zahed Kamal",
        job: "Front End Developer",
        text: "Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met. Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.",
        img: "https://i.imgur.com/gazoShk.jpg",
        companyName: "Touch Base Inc",
    },
    {
        name: "Marielle Haag",
        job: "UI/UX Designer",
        text: "scelerisque varius morbi enim nunc faucibus a. Velit egestas dui id ornare arcu odio ut sem nulla. Gravida rutrum quisque non tellus orci ac auctor augue. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Quis risus sed vulputate odio ut enim. Lacus sed turpis tincidunt id aliquet risus feugiat. Est velit egestas dui id ornare arcu odio.",
        img: "https://i.imgur.com/oW8Wpwi.jpg",
        companyName: "Touch Base Inc",
    },
    {
        name: "Ximena Vegara",
        job: "Backend Developer",
        text: "Quis risus sed vulputate odio ut enim. Lacus sed turpis tincidunt id aliquet risus feugiat. Est velit egestas dui id ornare arcu odio. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Quis eleifend quam adipiscing vitae. Quis eleifend quam adipiscing vitae. Consequat semper viverra nam libero justo laoreet sit amet. Cursus turpis massa tincidunt dui.",
        img: "https://i.imgur.com/ndQx2Rg.jpg",
        companyName: "Touch Base Inc",
    },
]


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 200 },
        items: 1,
    },

};

const TestimonialsSingle = (content) => {
    console.log(content)
    return (
        <div className="d-block m-auto" >
            <div className="card  card-0">
                <div className="content mb-0">
                    <p>{content.text}</p>
                    <div className="d-flex mb-4" style={{ alignItems: "center" }}>
                        <div className="content-img">
                            <img src={Img} />
                        </div>
                        <div style={{ margin: "0 1rem" }}>
                            <h4>{content.name} <span style={{ display: "block", color: "#333", fontWeight: "400", fontSize: "1rem" }}>{content.job}</span></h4>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

const Testimonials = () => {
    console.log(data)
    return (
        <section className="section">
            <h2 className="secondary-header text-center">
                WHAT OUR CUSTOMER SAY ABOUT US
            </h2>
            <Carousel
                swipeable={false}
                arrows={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={true}
                // autoPlaySpeed={6000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                // containerClass="caro"
                dotListClass="custom-dot-list-style"
            >
                {data.map(item => {
                    return <TestimonialsSingle name={item.name} job={item.job} text={item.text} />
                })}

            </Carousel>

        </section >
    )
}

export default Testimonials