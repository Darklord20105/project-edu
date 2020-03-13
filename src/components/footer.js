import React from "react"
import Icon from "./icon"
import { Link, graphql, useStaticQuery } from "gatsby"

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          facebook
          twitter
          youtube
          linkedin

        }
      }
    }
  `)
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            {/* <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul> */}
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/blog">Our Blog</Link></li>
              <li><Link to="/singleBlog">Single Blog</Link></li>
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by {data.site.siteMetadata.author}.</p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" target="_blank" href={data.site.siteMetadata.facebook}><Icon icon="facebook" size="1rem" style={{ marginBottom: "5px" }} /></a></li>
              <li><a className="twitter" target="_blank" href={data.site.siteMetadata.twitter}><Icon icon="twitter" size="1rem" style={{ marginBottom: "5px" }} /></a></li>
              <li><a className="dribbble" target="_blank" href={data.site.siteMetadata.youtube}><Icon icon="youtube" size="1rem" style={{ marginBottom: "5px" }} /></a></li>
              <li><a className="linkedin" target="_blank" href={data.site.siteMetadata.linkedin}><Icon icon="linkedin2" size="1rem" style={{ marginBottom: "5px" }} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
