import React from "react"
import { Link } from "gatsby"

//dummy data for testing
const data = [
    {
        title: "Upcoming  Facebook Ad Format Update. Hear it first from us ",
        body: "Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea."
    },
    {
        title: "Organic and Paid advertisements. Which is better ? ",
        body: "Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea."
    },
    {
        title: "Top 3 UI/UX Website Design Trends in 2019",
        body: "Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea."
    },

]

// regular bootstrap card
const Block = (content) => {
    return (
        <div className="card col-md-4 col-sm-12">
            <img className="card-img-top" src={`https://unsplash.it/800/600/?${Math.floor(
                Math.random(0, 100) * 100
            )}`} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title" >{content.title}</h5>
                <p className="card-text">{content.body}</p>
                <a href="#" className="btn btn-primary">Read this</a>
            </div>
        </div>
    )
}

// more advanced card
const Block2 = (content) => {
    return (
        <div className="latest-post row" style={{ margin: "0 0 2rem 0" }}>
            <div className="col-12">
                <div className="row">{/* title row */}
                    <div className="col-8">
                        <h4><strong>{content.title}</strong></h4>
                    </div>
                </div>
                <div className="row"> {/* image text row */}
                    <div className="col-xl-3 col-md-4 col-sm-6">
                        <a href="#" className="thumbnail">
                            <img src="http://placehold.it/260x180" alt="" />
                        </a>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                        <p>{content.body}</p>
                        <Link className="btn btn-outline-info" href="#">Read more</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

const LatestPosts = () => {
    return (
        <div className="section container">
            <h3 className="secondary-header">Latest Posts</h3>
            <div className="row">
                {data.map(item => {
                    return (
                        <Block2 title={item.title} body={item.body} />
                    )
                })}
            </div>
        </div>
    )
}

export default LatestPosts;






