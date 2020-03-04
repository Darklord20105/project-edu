import React from "react"

//dummy data for testing
const data = [
    {
        title: "news ",
        body: "news content text",
    },
    {
        title: "news ",
        body: "news content text",
    },
    {
        title: "news ",
        body: "news content text",
    },

]

const Block = (content) => {
    return (
        <div className="card col-md-4 col-sm-12">
            <img className="card-img-top" src={`https://unsplash.it/800/600/?${Math.floor(
                Math.random(0, 100) * 100
            )}`} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{content.title}</h5>
                <p className="card-text">{content.body}</p>
                <a href="#" className="btn btn-primary">Read this</a>
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
                        <Block title={item.title} body={item.body} />
                    )
                })}
            </div>
        </div>
    )
}

export default LatestPosts;