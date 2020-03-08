import React from "react"
import "../singleBlog.scss"
import Layout from "../components/layout"
import SideBar from "../components/blog/sidebar"
import Icon from "../components/icon"
import { Link } from "gatsby"


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
                <span><Icon icon="user-tie" /> Author</span>
                <span><Icon icon="calendar" /> December 5, 2020</span>
                <span><Icon icon="stack" /> Tags</span>
                <span><Icon icon="bubbles4" /> Comments</span>
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
                    <Link className="btn btn-info" style={{ background: "#007bff" }} ><Icon icon="facebook" /></Link>
                    <Link className="btn btn-info"><Icon icon="twitter" /></Link>
                    <Link className="btn btn-danger"><Icon icon="google-plus" /></Link>
                    <Link className="btn btn-info"><Icon icon="linkedin2" /></Link>
                </div>
            </div>
        </div>
    )
}

const ArticleAuthor = () => {
    return (
        <div>
            Author details
        </div>
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
                        <div>About Author</div>
                        <div>comments div and replay form</div>
                    </div>
                    {/* <SideBar /> */}
                </div>
            </section>
        </Layout>
    )
}

export default SingleBlog