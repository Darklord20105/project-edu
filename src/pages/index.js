import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ShowCase from "../components/showcase"
import Sponsores from "../components/sponsores"
import Benefits from "../components/benefit"

const IndexPage = () => {
  return (
    <Layout>
      <ShowCase />
      <Sponsores />
      <Benefits />
    </Layout>
  )
}

export default IndexPage
