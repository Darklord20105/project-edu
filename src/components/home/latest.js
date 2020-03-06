import React from "react"
import { Link } from "gatsby"
import "./latest.scss"

//dummy data for testing
const data = [
    {
        img: "http://infinityflamesoft.com/html/abal-preview/assets/img/blog/blog1.jpg",
        category: "science",
        title: "Upcoming  Facebook Ad Format Update. Hear it first from us ",
        date: "04 June 2018",
        body: "Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea."
    },
    {
        img: "http://infinityflamesoft.com/html/abal-preview/assets/img/blog/blog2.jpg",
        category: "science",
        title: "Organic and Paid advertisements. Which is better ? ",
        date: "04 June 2018",
        body: "Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea."
    },
    {
        img: "http://infinityflamesoft.com/html/abal-preview/assets/img/blog/blog3.jpg",
        category: "tech",
        title: "Top 3 UI/UX Website Design Trends in 2019",
        date: "04 June 2018",
        body: "Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea."
    },

]
const CardLatest = (content) => {
    return (
        <div class="col-lg-4 col-md-6">
            {/* <!-- Single Blog --> */}
            <div class="single-blog">
                <div class="blog-img">
                    <img src={content.img} alt="" />
                    <div class="post-category">
                        <a>{content.category}</a>
                    </div>
                </div>
                <div class="blog-content">
                    <div class="blog-title">
                        <h4>{content.title}</h4>
                        <div class="meta">
                            <ul>
                                <li>{content.date}</li>
                            </ul>
                        </div>
                    </div>
                    <p>{content.body}</p>
                    <a href="#" class="btn btn-outline-info">read more</a>
                </div>
            </div>
        </div>
    )
}
const LatestPosts = () => {
    return (
        <div className="section container">
            <h3 className="secondary-header text-center">Latest Posts</h3>
            <div className="row">
                {data.map(item => {
                    return (
                        <CardLatest
                            img={item.img}
                            category={item.category}
                            title={item.title}
                            date={item.date}
                            body={item.body}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default LatestPosts;






