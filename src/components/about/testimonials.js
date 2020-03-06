import React from "react"
import "./testimonials.scss"

// dummy data for testing
const data = [
    {
        text: "Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.",
        img: "",
        name: "Zahed Kamal",
        job: "Front End Developer",
        companyName: "Touch Base Inc",
        link: "#"
    },
    {
        text: "Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.",
        img: "",
        name: "Zahed Kamal",
        job: "Front End Developer",
        companyName: "Touch Base Inc",
        link: "#"
    },
]

// Notes On Testimonials card
/* 
we can change the className for testimonial-primary with any of the following options depending on what we like (all styles are pre-done, all you have to do is changethis) :
    testimonial-default (outlined background,text white) ,
    testimonial-primary (outlined background,text blue) ,
    testimonial-info (outlined background,text light blue) ,
    testimonial-success (outlined background,text green)

also we can use filled boxes by adding the word -filled to the end of the className like this:
    testimonial-default-filled (filled background grey, text white) ,
    testimonial-primary-filled (filled background blue, text white) ,
    testimonial-info-filled (filled background light blue, text white) ,
    testimonial-success-filled (filled background green text white,) 

*/

const TestimonialCard = (content) => {
    return (
        <div className="row">
            <div class="col-md-6 col-sm-12 m-auto">

                <div id="tb-testimonial" class="testimonial testimonial-default">
                    <div class="testimonial-section">
                        {content.text}
                    </div>
                    <div class="testimonial-desc">
                        <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" alt="" />
                        <div class="testimonial-writer">
                            <div class="testimonial-writer-name">{content.name}</div>
                            <div class="testimonial-writer-designation">{content.job}</div>
                            <a href={content.link} class="testimonial-writer-company">{content.companyName}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const Testimonials = () => {
    return (
        <section className="section">
            <h2 className="secondary-header text-center">
                WHAT OUR CUSTOMER SAY ABOUT US
            </h2>
            <div className="row">
                {data.map(item => {
                    return (
                        <TestimonialCard
                            text={item.text}
                            name={item.name}
                            job={item.job}
                            companyName={item.companyName}
                            link={item.link}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Testimonials