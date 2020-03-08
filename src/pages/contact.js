import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact/contactForm"

const Contact = () => {
  return (
    <Layout>
      <section className="container">
        <div className="row">
          <h1 className="page-header">Contact Us</h1>
        </div>
        <ContactForm />
      </section>
    </Layout>
  )
}

export default Contact
