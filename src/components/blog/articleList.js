import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const ArticlePiece = (content) => {
    const dat = content.date.split(" ")
    return (
        <div className="post-outer">
            <div className="post-entry">
                <div className="post-image"><img src={content.img} /></div>
                <article className="post-body">
                    <div className="post-body__dateholder"><div style={{ textTransform: "uppercase" }}><span>{dat[1]}</span>{`${dat[0]}, ${dat[2]}`}</div></div>
                    <div className="post-body__content">
                        <div className="post-head">
                            <div className="post-head__title"><Link to={`/blog/${content.slug}`}><h2 dangerouslySetInnerHTML={{ __html: content.title }}></h2></Link></div>
                            <div className="post-head__meta row">
                                <span className="post-head__meta-item"><i className="fas fa-user"></i> <span>{content.author}</span></span>
                                <span className="post-head__meta-item" ><i className="fas fa-layer-group"></i><span>{content.tags === null ? "soc" : content.tags}</span></span>
                                <span className="post-head__meta-item"><i className="far fa-comments"></i><span>{content.comments} تعليقات</span></span>
                            </div>
                        </div>
                        <div className="post-text">
                            {documentToReactComponents(content.body.json).slice(1, 2)}
                            {/* {documentToReactComponents(content.body.json)} */}
                        </div>
                        <div className="post-footer-meta">
                            <div className="d-flex align-items-center">
                                <span className="post-footer-meta-btn btn btn-outline-secondary mx-3 font-weight-bold">مشاركة</span>

                                <Link className="soc facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link className="soc twitter">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link className="soc google">
                                    <i className="fab fa-google-plus-g"></i>
                                </Link>

                            </div>
                            <Link to={`/blog/${content.slug}`} className="read-more btn btn-outline-secondary font-weight-bold">تابع القراءة</Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

const ArticleList = (props) => {
    return (
        <div className="col-xl-8 col-lg-7 col-sm-12">
            {props.data.allContentfulBlogPost.edges.map(item => {
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
    )
}

export default ArticleList

