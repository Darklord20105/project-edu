import React from "react"
import "./stats.scss"
import Icon from "../icon"

// dummy data for testing purposes
const data = [
    {
        icon: "study",
        title: "static 1",
        count: "120"
    },
    {
        icon: "award",
        title: "static 2",
        count: "12"
    },
    {
        icon: "users",
        title: "static 3",
        count: "4500"
    },
    {
        icon: "cloud3",
        title: "static 4 static ",
        count: "320"
    },
]


// icons can be added to each static block when needed but for now will skip it for simplicity
const StaticBlock = (content) => {
    return (
        <div className="col-md-3 col-sm-6 col-xs-12 stats-item">
            <Icon className="stats-item__icon" icon={content.icon} size="4.5rem" color="rgba(58, 139, 194)" />
            <div className="stats-item__text">
                <p className="stats-item__text-count">{content.count}</p>
                <h6 className="stats-item__text-title">{content.title}</h6>
            </div>
        </div>
    )
}

const Statics = () => {
    return (
        <section className="section stats-section">

            {/* Looking for help section */}

            <div className="row stats-help m-auto">
                <div className="m-auto" style={{ display: "flex", alignItems: "center" }}>
                    <h3 className="stats-help__head">Looking For First-Class Education Degree?</h3>
                    <button className="btn btn-primary">CALL US</button>
                </div>
            </div>

            {/* statics section */}

            <div className="row stats-list container">
                {data.map(item => {
                    return (
                        <StaticBlock icon={item.icon} title={item.title} count={item.count} />
                    )
                })}
            </div>
        </section>
    )
}

export default Statics