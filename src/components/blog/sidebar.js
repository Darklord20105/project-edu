import React from "react"
import "./sidebar.scss"
import { Card, Form, FormControl, Button, ListGroup } from "react-bootstrap"
import { Link } from "gatsby"

const SideBar = () => {
    return (
        <div id="sidebar" className="col-xl-4 col-lg-5 col-sm-12">
            <div style={{ paddingBottom: "1.5rem" }}>
                <Card>
                    <Card.Header>Search</Card.Header>
                    <Card.Body>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ paddingBottom: "1.5rem" }}>
                    <Card.Header>Latest Posts</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item><Link>Cras justo odio</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Dapibus ac facilisis in</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Vestibulum at eros</Link></ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    )
}

export default SideBar