import React from "react"
import Img1 from "../../assets/img/about-main.jpg"
import "./aboutMain.scss"

const par = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus vitae. Sit amet consectetur adipiscing elit. Risus viverra adipiscing at in. A erat nam at lectus urna duis convallis convallis. Accumsan sit amet nulla facilisi morbi tempus. Viverra tellus in hac habitasse platea dictumst vestibulum. Tellus in hac habitasse platea dictumst vestibulum. Ut sem viverra aliquet eget sit. Ipsum consequat nisl vel pretium lectus quam id leo in. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Velit egestas dui id ornare arcu odio ut sem nulla. Gravida rutrum quisque non tellus orci ac auctor augue. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Quis risus sed vulputate odio ut enim. Lacus sed turpis tincidunt id aliquet risus feugiat. Est velit egestas dui id ornare arcu odio. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus.

Quis eleifend quam adipiscing vitae. Quis eleifend quam adipiscing vitae. Consequat semper viverra nam libero justo laoreet sit amet. Cursus turpis massa tincidunt dui. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Tempus iaculis urna id volutpat lacus. Diam ut venenatis tellus in metus. Tincidunt augue interdum velit euismod. Ut placerat orci nulla pellentesque. Eget duis at tellus at urna. A scelerisque purus semper eget duis. Malesuada fames ac turpis egestas integer eget aliquet nibh. Aliquam vestibulum morbi blandit cursus risus at. Mattis nunc sed blandit libero volutpat sed cras. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Mauris vitae ultricies leo integer malesuada nunc. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Dolor morbi non arcu risus quis. Rhoncus urna neque viverra justo nec ultrices dui sapien eget.`


const AboutMain = () => {
    return (
        <section className="about">
            <div className="about-head">
                <div className="about-head-1">
                    <img src={Img1} className="about-head__picture-1" alt="about header image" />
                    <p className="about-head__text">
                        <h3>header 1</h3>
                        {par}
                    </p>
                </div>
                <div className="about-head-2">
                    <img src={Img1} className="about-head__picture-2" alt="about header image" />
                    <p className="about-head__text">
                        <h3>header 1</h3>
                        {par}
                    </p>
                </div>
            </div>

        </section>
    )
}

export default AboutMain