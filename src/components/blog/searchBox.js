import React from "react"
import { Card, Form, FormControl, Button } from "react-bootstrap"

class SearchBox extends React.Component {
    state = {
        filteredResult: [],
        searchQuery: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        window.location.replace("/search")
    }
    render() {
        return (
            <div className="my-4">
                <Card>
                    <Card.Header>ابحث عن مقالة</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="searchQuery">
                                <FormControl type="text" onChange={this.handleChange} placeholder="Search" />
                            </Form.Group>
                            <Button variant="outline-info">ابحث</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}

export default SearchBox