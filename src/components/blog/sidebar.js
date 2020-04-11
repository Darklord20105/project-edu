import React from "react"
import { Card, Form, Button, ListGroup } from "react-bootstrap"
import { Link, useStaticQuery, graphql } from "gatsby"
import SearchBox from "./searchBox"

export const LatestPostsBox = (content) => {
    return (
        <div className="my-4">
            <Card >
                <Card.Header>أحدث المقالات</Card.Header>
                <ListGroup variant="flush">
                    {content.content.edges.map(item => {
                        return (
                            <ListGroup.Item key={item.node.id}>
                                <Link to={`/blog/${item.node.slug}`}>
                                    {item.node.title}
                                </Link>
                            </ListGroup.Item>
                        )
                    })}

                </ListGroup>
            </Card>
        </div>
    )
}

export const SubscribeBox = () => {
    return (
        <div className="my-4">
            <Card >
                <Card.Header>SUBSCRIBE BY E-MAIL</Card.Header>
                <Card.Body>
                    <Card.Text>Subscribe To Our NewsLetter and recieve notifications of new posts by E-mail</Card.Text>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="outline-info">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

const SideBar = () => {
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
                }
            }
        }
    }
    `)
    return (
        <div id="sidebar" className="col-xl-4 col-lg-5 col-sm-12">
            <SearchBox />
            <LatestPostsBox content={query.allContentfulBlogPost} />
            {/* <SubscribeBox /> */}
        </div>
    )
}

export default SideBar