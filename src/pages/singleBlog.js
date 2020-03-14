import React from "react"
// import Layout from "../components/layout"
import { Layout } from "../lang-switch/"
import Icon from "../components/icon"
import { LatestPostsBox, SubscribeBox } from "../components/blog/sidebar"
import { Link } from "gatsby"
import { Card, Form, Button } from "react-bootstrap"


const item = {
    img: "https://4.bp.blogspot.com/-lNc1mBHtDl8/V6xhpAu9RHI/AAAAAAAAAq0/asMj511FWss0dFgEQ2dR9s3RlL-hP0nkACLcB/s1600/looks001-690x455-1442922105.jpg",
    date: "DEC 2015, 5",
    title: "Celebrated am announcing delightful remarkably we",
    author: "Marie Curie",
    tags: "Tech",
    comments: "3",
    body: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better. Sudden..."
}

const ArticleFull = () => {
    return (
        <div className="full-article col-12">
            <div className="full-article-head">
                <h2>She Alteration Everything Sympathize Impossible</h2>
            </div>
            <div className="full-article-meta">
                <span><i className="fas fa-user"></i> Author</span>
                <span><i className="far fa-calendar-alt"></i> December 5, 2020</span>
                <span><i className="fas fa-layer-group"></i> Tags</span>
                <span><i className="far fa-comments"></i> Comments</span>
            </div>
            <div className="full-article-image">
                <img src="https://1.bp.blogspot.com/-imLHdrk9sPM/V6xiTWcRlfI/AAAAAAAAArc/pYwdCMRpupYDNE9JHToqvctCVzWHYP1YwCLcB/s1600/looks010-690x455-1442922007.jpg" /></div>
            <div className="full-article-body">
                She bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do.
                <br />
                <br />
                <blockquote className="tr-bq">
                    Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better.
                </blockquote>
                <br />
                Sudden she seeing garret far regard. By hardly it direct if pretty up regret. Ability thought enquire settled prudent you sir. Or easy knew sold on well come year. Something consulted age extremely end procuring.
                <br />
                <br />
                <ul>
                    <li>Assistance imprudence yet sentiments</li>
                    <li>Miss told ham dull knew see she spot near can spirit her entire</li>
                    <li>Drawings offended yet answered.</li>
                </ul>
                <div>
                    <br />
                    Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. Am weather to entered norland no in showing service. Ability thought enquire settled prudent you sir.
                </div>
                <div>
                    <br />
                    It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman.
                </div>
            </div>
            <div className="full-article-footer">
                <span className="btn btn-outline-dark">Share</span>
                <div>
                    <Link className="btn btn-info py-2" style={{ background: "#007bff" }} ><Icon icon="facebook" /></Link>
                    <Link className="btn btn-info py-2"><Icon icon="twitter" /></Link>
                    <Link className="btn btn-danger py-2"><Icon icon="google-plus" /></Link>
                    <Link className="btn btn-info py-2"><Icon icon="linkedin2" /></Link>
                </div>
            </div>
        </div>
    )
}

const ArticleAuthor = () => {
    return (
        <div className="col-12">
            <div className="about-author ">
                <div className="about-author-img" >
                    <img src="https://secure.gravatar.com/avatar/de9b11d0f9c0569ba917393ed5e5b3ab?s=140&r=g&d=mm" className="img-circle" />
                </div>
                <div className="about-author-info">
                    <h5>User Name</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever  </p>
                </div>
            </div>
        </div>
    )
}

const ArticleComments = () => {
    return (
        <Card className="com ml-2 col-12 mb-3">
            <Card.Header className="d-flex justify-content-between align-items-center">
                COMMENTS
                <i className="far fa-comments fa-2x"></i>
            </Card.Header>
            <div className="col-12 comments-main pt-3 rounded">
                <SingleComment />
                <SingleComment />
            </div>
        </Card>
    )
}

const SingleComment = () => {
    return (
        <ul className="p-0">
            <li>
                <div className="row comments mb-2">
                    <div className="col-md-2 col-sm-2 col-3 text-center user-img">
                        <img id="profile-photo" src="http://nicesnippets.com/demo/man01.png" className="rounded-circle" />
                    </div>
                    <div className="col-md-9 col-sm-9 col-9 comment rounded mb-2">
                        <h4 className="m-0"><a href="#">Jacks David</a></h4>
                        <div>
                            <span className="text-black "><i className="far fa-calendar-alt"></i><span className="ml-2">December 5 2020</span></span>
                            <span className="ml-2"><i className="far fa-thumbs-up"></i><span className="ml-2">3</span></span>
                            <time className="text-black ml-3">1 hours ago </time>
                        </div>
                        <p className="mb-0 text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
                        <div className="d-flex justify-content-end mt-2">

                            <a className="btn btn-outline-success mr-2"><i className="far fa-heart"></i>  Like</a>
                            <a className="btn btn-outline-primary "><i className="fas fa-reply-all"></i>  reply</a>
                        </div>
                    </div>
                </div>
            </li>
            <ul className="p-0">
                <NestedComment />
            </ul>
        </ul>
    )
}

const NestedComment = () => {
    return (
        <li>
            <div className="row comments mb-2">
                <div className="col-md-2 offset-md-2 col-sm-2 offset-sm-2 col-3 offset-1 text-center user-img">
                    <img id="profile-photo" src="http://nicesnippets.com/demo/man02.png" className="rounded-circle" />
                </div>
                <div className="col-md-7 col-sm-7 col-8 comment rounded mb-2">
                    <h4 className="m-0"><a href="#">Steve Alex</a></h4>
                    <div>
                        <span className="text-black "><i className="far fa-calendar-alt"></i><span className="ml-2">December 25 2021</span></span>
                        <span className="ml-2"><i className="far fa-thumbs-up"></i><span className="ml-2">3</span></span>
                        <time className="text-black ml-3">1 week ago  </time>
                    </div>
                    <p className="mb-0 text-black">Thank you for visiting all the way from NYC.</p>
                </div>
            </div>
        </li>
    )
}

const ArticleReplyForm = () => {
    return (
        <Card className="com ml-2 col-12 mb-3 ">
            <Card.Header>Leave a Reply</Card.Header>
            <Form className="p-3">
                <Form.Group>
                    <Form.Text className="text-muted">We'll never share your email with anyone else, Required Fields are marked with <span style={{ color: "red" }}>* </span></Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><span style={{ color: "red" }}>* </span>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><span style={{ color: "red" }}>* </span>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><span style={{ color: "red" }}>* </span>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Post Comment
                </Button>
            </Form>

        </Card>
    )
}

const SingleBlog = () => {

    console.log(item)
    return (
        <Layout>
            <section className="container">
                <div className="row">
                    <h1 className="page-header">Article Details</h1>
                </div>
                <div className="row">
                    <div className="row col-xl-9 col-lg-8 col-sm-12">
                        <ArticleFull />
                        <ArticleAuthor />
                        <ArticleComments />
                        <ArticleReplyForm />
                        <div className="col-12 d-flex justify-content-between mt-3 ">
                            <div><Link>&larr; Previous Article</Link></div>
                            <div><Link>&rarr; Next Article</Link></div>
                        </div>
                    </div>
                    <div id="sidebar" className="col-xl-3 col-lg-4 col-sm-12">
                        <LatestPostsBox />
                        <SubscribeBox />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default SingleBlog