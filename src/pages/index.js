import React from "react"
import Layout from "../components/layout"
// import { Layout } from "../lang-switch/"
import Head from '../components/head'
import ShowCase from "../components/home/showcase"
// import Sponsores from "../components/home/sponsores"
import Sponsores from "../components/home/sponsores2"
import Benefits from "../components/home/benefit"
import Statics from "../components/home/stats"
import LatestPosts from "../components/home/latest"
import Services from "../components/home/services"

const IndexPage = () => {
  const title = "أهلا بكم"
  return (
    <Layout>
      <>
        <Head title={title} />
        <ShowCase />
        <Sponsores />
        <Services />
        <Statics />
        <Benefits />
        <LatestPosts />
      </>
    </Layout>
  )
}

export default IndexPage
