import React from "react"
import { useStaticQuery, Link } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const CardLatest = (content) => {
    const a = documentToReactComponents(content.body).slice(1, 2)
    console.log(a)
    return (
        <div class="col-lg-4 col-md-6">
            <div class="single-blog">
                <div class="blog-img" style={{ height: "12rem" }}>
                    <img src={content.img} alt="" style={{ height: "100%" }} />
                    <div class="post-category">
                        <a>{content.category}</a>
                    </div>
                </div>
                <div class="blog-content text-center">
                    <div class="blog-title">
                        <h4>{content.title}</h4>
                        <div class="meta">
                            <ul>
                                <li>{content.publishedDate}</li>
                            </ul>
                        </div>
                    </div>
                    <p></p>
                    <Link to={`/blog/${content.slug}`} class="btn btn-outline-info">read more</Link>
                </div>
            </div>
        </div>
    )
}
const LatestPosts = () => {
    const query = useStaticQuery(graphql`
        query {
        allContentfulBlogPost (
            sort: { fields: [publishedDate], order:DESC}
            limit: 3
            ) {
            edges {
                node {
                    id
                    title   
                    slug
                    publishedDate
                    body {
                        json
                    }
                    featuredImage {
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    }
    `)
    console.log(query)
    return (
        <div className="section container">
            <h3 className="secondary-header text-center">أخر اخبار الجامعات</h3>
            <div className="row">
                {query.allContentfulBlogPost.edges.map(item => {
                    return (
                        <CardLatest
                            img={item.node.featuredImage.fluid.src}
                            // category={item.category}
                            title={item.node.title}
                            date={item.node.publishedDate}
                            body={item.node.body.json}
                            slug={item.node.slug}
                            key={item.node.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default LatestPosts;






