import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import AboutMain from "../components/about/aboutMain"
import TeamList from "../components/about/teamList"
import Testimonials from "../components/about/testimonials"

const About = () => {
  const title = "حول شركتنا"
  return (
    <Layout>
      <>
        <Head title={title} />
        <section className="container">
          <div className="row">
            <h1 className="page-header">About Us</h1>
          </div>
          <AboutMain />
          <TeamList />
          <Testimonials />
        </section>
      </>
    </Layout>
  )
}

export default About
