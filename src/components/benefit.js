import React, { useState } from "react"
import "./benefit.scss"
import BenefitCard from "./benefitCard"

const data = [{
    number: "01",
    title: "benefit 1",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ",
    style: "on"
},
{
    number: "02",
    title: "benefit 2",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    style: "off"
},
{
    number: "03",
    title: "benefit 3",
    body: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    style: "off"
},
]

const Benefits = () => {
    return (
        <section className="section benefit-section">
            <div className="container">
                <h2 className="secondary-header">WHAT WE OFFER :</h2>
                <div class="row">
                    {data.map(card => {
                        return (
                            <div class="col-xl-6 col-md-6 col-xs-12"><BenefitCard number={card.number} title={card.title} body={card.body} style={card.style} /></div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Benefits;