import React from "react"
import Layout from "../components/layout"
import AboutMain from "../components/about/aboutMain"
import TeamList from "../components/about/teamList"
import Testimonials from "../components/about/testimonials"

const About = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row">
            <h1 className="page-header">About Us</h1>
          </div>
          <AboutMain />
          <TeamList />
          <Testimonials />
        </div>
      </section>
    </Layout>
  )
}

export default About
