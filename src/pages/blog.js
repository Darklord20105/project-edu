import React from "react"
import Layout from "../components/layout"
import ArticleList from "../components/blog/articleList"
import SideBar from "../components/blog/sidebar"

const Blog = () => {
  return (
    <Layout>
      <section className="container">
        <div className="row">
          <h1 className="page-header">Support Blog</h1>
        </div>
        <div className="row">
          <ArticleList />
          <SideBar />
        </div>
      </section>
    </Layout>
  )
}

export default Blog
