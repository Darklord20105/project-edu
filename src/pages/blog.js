import React from "react"
import Layout from "../components/layout"
import ArticleList from "../components/blog/postList"
import SideBar from "../components/blog/sidebar"

const Blog = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h1 className="page-header">Support Blog</h1>
        </div>
        <div className="row">
          <ArticleList />
          <SideBar />
        </div>

      </div>
    </Layout>
  )
}

export default Blog
