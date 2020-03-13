import React from "react"
import { Card, Form, FormControl, Button, ListGroup } from "react-bootstrap"
import { Link } from "gatsby"

export const SearchBox = () => {
    return (
        <div className="my-4">
            <Card>
                <Card.Header>Search</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <FormControl type="text" placeholder="Search" />
                        </Form.Group>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export const LatestPostsBox = () => {
    return (
        <div className="my-4">
            <Card >
                <Card.Header>Latest Posts</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item><Link>Cras justo odio</Link></ListGroup.Item>
                    <ListGroup.Item><Link>Dapibus ac facilisis in</Link></ListGroup.Item>
                    <ListGroup.Item><Link>Vestibulum at eros</Link></ListGroup.Item>
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
    return (
        <div id="sidebar" className="col-xl-4 col-lg-5 col-sm-12">
            <SearchBox />
            <LatestPostsBox />
            <SubscribeBox />
        </div>
    )
}

export default SideBar