import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import ArticleList from "../components/blog/articleList"
import SideBar from "../components/blog/sidebar"
import { graphql, Link } from 'gatsby'

const Blog = (props) => {
  const title = "المدونة"

  const { currentPage, numPages } = props.pageContext
  console.log(currentPage, numPages)
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog/" : `/blog/${(currentPage - 1).toString()}`
  const nextPage = `/blog/${(currentPage + 1).toString()}`

  console.log(props)
  return (
    <Layout>
      <>
        <Head title={title} />
        <section className="container">
          <div className="row">
            <h1 className="page-header">أخبار الجامعات</h1>
          </div>
          <div className="row">
            <ArticleList data={props.data} />
            <SideBar />
            <div>
              {props.pageContext.numPages ?
                <ul className="pagination pagination-lg">
                  <li className="page-item">
                    {!isFirst && (
                      <Link className="page-link" to={prevPage} rel="prev">
                        الصفحة السابقة →
                      </Link>
                    )}
                  </li>

                  {Array.from({ length: numPages }, (_, i) => (
                    <li className="page-item">
                      <Link className="page-link" key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
                        {i + 1}
                      </Link>
                    </li>
                  ))}

                  <li className="page-item">
                    {!isLast && (
                      <Link className="page-link" to={nextPage} rel="next">
                        الصفحة التالية ←
                      </Link>
                    )}
                  </li>
                </ul>
                : null}
            </div>

          </div>
        </section>
      </>
    </Layout>
  )
}

export default Blog

// limit and skip are variablesnsent by the node config file but sometimes a bug happens and nothing is loaded
// so we typed it manually
export const pageQuery = graphql`
    query ($limit:Int, $skip:Int){
        allContentfulBlogPost (
            sort: { fields: [publishedDate], order:DESC}
            limit: $limit
            skip: $skip
            ) {
            edges {
                node {
                    id
                    title
                    publishedDate(formatString: "DD MMM YYYY")
                    body {
                        json
                    }
                    slug
                    featuredImage {
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    }
`