import React from "react"
import Layout from "../components/layout"
import ShowCase from "../components/home/showcase"
import Sponsores from "../components/home/sponsores"
import Benefits from "../components/home/benefit"
import Statics from "../components/home/stats"
import LatestPosts from "../components/home/latest"
import Services from "../components/home/services"

const IndexPage = () => {
  return (
    <Layout>
      <ShowCase />
      <Sponsores />
      <Services />
      <Statics />
      <Benefits />
      <LatestPosts />
    </Layout>
  )
}

export default IndexPage
