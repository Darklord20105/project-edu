import React from "react"
import Head from '../components/head'
import Layout from "../components/layout"
import ContactForm from "../components/contact/contactForm"

const Contact = () => {
  const title = "تواصل معنا"
  return (
    <Layout>
      <>
        <Head title={title} />
        <section className="container">
          <div className="row">
            <h1 className="page-header">معلومات الاتصال</h1>
          </div>
          <ContactForm />
        </section>
      </>
    </Layout>
  )
}

export default Contact
