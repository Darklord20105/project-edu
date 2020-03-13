import React from "react"


// dummy data for team member list
const data = [
    {
        img: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png",
        name: "Danielle Garrette",
        jobPost: "Academic support Officer",
        expertise: "Team Leader, CEO",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi ipsa veniam quisquam quasi doloremque blanditiis, temporibus neque quas itaque."
    },
    {
        img: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png",
        name: "Carlos Ramos",
        jobPost: "Academic support Officer",
        expertise: "Graphic Designer, Front-End-Developer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi ipsa veniam quisquam quasi doloremque blanditiis, temporibus neque quas itaque."
    },
    {
        img: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png",
        name: "Milan de Vitto",
        expertise: "Back-end dev, database Manger",
        jobPost: "Academic support Officer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi ipsa veniam quisquam quasi doloremque blanditiis, temporibus neque quas itaque."
    }
]

// a cool rotating Card for team membres

const MemberCard = (content) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4" style={{ minHeight: "max-content" }}>
            <div className="image-flip"
            //  onTouchStart="this.classList.toggle('hover');"
            >
                <div className="mainflip">
                    <div className="frontside">
                        <div className="card">
                            <div className="card-body text-center">
                                <p><img className=" img-fluid" src={content.img} alt="card image" /></p>
                                <h4 className="card-title">{content.name}</h4>
                                <p className="card-text">{content.jobPost}</p>
                                <p className="card-text">{content.expertise}</p>
                                <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="backside">
                        <div className="card">
                            <div className="card-body text-center mt-4">
                                <h4 className="card-title">{content.name}</h4>
                                <p className="card-text">{content.info}</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                            <i className="fab fa-skype"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                            <i className="fab fa-google"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TeamList = () => {
    return (
        <section>
            <h2 className="secondary-header text-center">OUR TEAM</h2>
            <div className="row">
                {data.map(item => {
                    return (
                        <MemberCard img={item.img} name={item.name} jobPost={item.jobPost} expertise={item.expertise} info={item.info} />
                    )
                })}
            </div>
        </section>
    )
}

export default TeamList;