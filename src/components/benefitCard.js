import React from "react"
import { Link } from "gatsby"








const BenefitCard = (props) => {
    return (
        <div className="benefit-card">
            <div className="benefit-card-step" style={props.style == "on" ? { backgroundColor: "rgb(58, 139, 194)", color: "#f4f4f4" } : null} > <span>{props.number}</span></div>
            <div className="benefit-card-text">
                <h5 className="benefit-card-text__title">{props.title}</h5>
                <p className="benefit-card-text__body">{props.body}</p>
            </div>
        </div>
    )
}

export default BenefitCard