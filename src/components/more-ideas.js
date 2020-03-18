
// regular bootstrap card
const Block = (content) => {
    return (
        <div className="card col-md-4 col-sm-12">
            <img className="card-img-top" src={`https://unsplash.it/800/600/?${Math.floor(
                Math.random(0, 100) * 100
            )}`} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title" >{content.title}</h5>
                <p className="card-text">{content.body}</p>
                <a href="#" className="btn btn-primary">Read this</a>
            </div>
        </div>
    )
}

// more advanced card
const Block2 = (content) => {
    return (
        <div className="latest-post row" style={{ margin: "0 0 2rem 0" }}>
            <div className="col-12">
                <div className="row">{/* title row */}
                    <div className="col-8">
                        <h4><strong>{content.title}</strong></h4>
                    </div>
                </div>
                <div className="row"> {/* image text row */}
                    <div className="col-xl-3 col-md-4 col-sm-6">
                        <a href="#" className="thumbnail">
                            <img src="http://placehold.it/260x180" alt="" />
                        </a>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                        <p>{content.body}</p>
                        <Link className="btn btn-outline-info" href="#">Read more</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

// TESTIMONIALS SIMPLE CAROUSEL

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

const TestimonialCard1 = (content) => {
    return (
        <div className="row">
            <div class="col-md-8 col-sm-12 m-auto">

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

const Testimonials1 = () => {
    return (
        <section className="section">
            <h2 className="secondary-header text-center">
                WHAT OUR CUSTOMER SAY ABOUT US
            </h2>
            <div className="row m-auto">
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


// second option testimonials
import Carousel from "react-multi-carousel"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 200 },
        items: 1,
    },

};
const Testimonials2 = () => {
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
                // autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                // containerClass="caro"
                dotListClass="custom-dot-list-style"
            >
                {/* item 1 */}
                <div className="testimonial-item text-center">
                    <div className="img-box"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1558758980/portrait-1287413_640.jpg" alt="" /></div>
                    <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                    <p className="overview"><h3><b>Paula Wilson</b></h3>Media Analyst </p>

                </div>
                <div className="testimonial-item text-center">
                    <div className="img-box"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1558758980/portrait-1287413_640.jpg" alt="" /></div>
                    <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                    <p className="overview"><h3><b>Paula Wilson</b></h3>Media Analyst </p>

                </div>
                <div className="testimonial-item text-center">
                    <div className="img-box"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1558758980/portrait-1287413_640.jpg" alt="" /></div>
                    <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                    <p className="overview"><h3><b>Paula Wilson</b></h3>Media Analyst </p>

                </div>
            </Carousel>

        </section >
    )
}

