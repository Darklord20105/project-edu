import React from "react"
// import Layout from "../components/layout"
import Head from '../lang-switch/Head/index'
import { Layout } from "../lang-switch/"
import ArticleList from "../components/blog/articleList"
import SideBar from "../components/blog/sidebar"

const Blog = () => {
  return (
    <Layout>
      <>
        <Head title="blog" />
        <section className="container">
          <div className="row">
            <h1 className="page-header">Support Blog</h1>
          </div>
          <div className="row">
            <ArticleList />
            <SideBar />
          </div>
        </section>
      </>
    </Layout>
  )
}

export default Blog
