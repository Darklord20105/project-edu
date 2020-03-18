import React from "react"
import Head from '../lang-switch/Head/index'
// import Layout from "../components/layout"
import { Layout } from "../lang-switch/"
import ContactForm from "../components/contact/contactForm"

const Contact = () => {
  return (
    <Layout>
      <>
        <Head title="contact" />
        <section className="container">
          <div className="row">
            <h1 className="page-header">Contact Us</h1>
          </div>
          <ContactForm />
        </section>
      </>
    </Layout>
  )
}

export default Contact
