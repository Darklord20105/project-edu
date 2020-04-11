import React from "react"
import Head from '../components/head'
import Layout from "../components/layout"
import { ArticlePiece } from "../components/blog/articleList"
import { Form, FormControl, Button } from "react-bootstrap"
import { graphql } from "gatsby"

class Search extends React.Component {
    componentDidMount() {
        this.setState({
            filteredResult: this.props.data.allContentfulBlogPost.edges
        })
    }

    state = {
        filteredResult: [],
        searchQuery: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const title = "نتائج البحث"
        console.log(this.props)
        console.log(this.state.filteredResult)

        const filtered = this.state.filteredResult.filter(item => {
            return Object.values(item.node).some(value => {
                if (typeof value !== "number") {
                    return value
                        .toString()
                        .toLocaleLowerCase()
                        .includes(this.state.searchQuery.toLocaleLowerCase());
                } else {
                    return value
                        .toString()
                        .toLocaleLowerCase()
                        .includes(this.state.searchQuery.toLocaleLowerCase());
                }
            });
        });

        console.log(filtered)
        return (
            <Layout>
                <Head title={title} />
                <section className="container">
                    <div className="row">
                        <h1 className="page-header">نتائج البحث</h1>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 col-sm-12">
                            <Form>
                                <Form.Group controlId="searchQuery">
                                    <FormControl type="text" onChange={this.handleChange} placeholder="Search" />
                                </Form.Group>
                                <Button variant="outline-info">ابحث</Button>
                            </Form>
                            <div>
                                {filtered.map(item => {
                                    return (
                                        <ArticlePiece
                                            title={item.node.title}
                                            key={item.node.id}
                                            body={item.node.body}
                                            date={item.node.publishedDate}
                                            slug={item.node.slug}
                                            img={item.node.featuredImage.fluid.src}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-sm-12">

                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Search

export const pageQuery = graphql`
    query{
        allContentfulBlogPost {
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