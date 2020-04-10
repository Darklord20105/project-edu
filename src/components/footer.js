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
    <footer className="site-footer text-right" style={{ lineHeight: "2", fontWeight: "600" }}>
      <div className="container">
        <div className="row ">
          <div className="col-sm-12 col-md-6">
            <h5 className="font-weight-bold">معلومات حول شركتنا</h5>
            <p className="text-justify">
              {/* Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm. */}
              تقدم شركتك خدمات وتبيع المنتجات ، لذلك يجب أن يحتوي موقع الويب الخاص بك على معلومات حول خدماتك أو منتجاتك. في الصفحة الرئيسية للموقع ، سوف يلفت انتباه الزائرين لبضع ثوانٍ ، لذا من المهم الإشارة بشكل واضح إلى نقاط قوتك وإغراء العملاء لتصفح الصفحات الأخرى للموقع لمزيد من المعلومات. لتسهيل البحث ، أدخل الروابط على الصور ونصوص العرض لتوجيهها إلى الصفحات التفصيلية للخدمات
            </p>
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

          <div className="col-xs-6 col-md-3 ">
            <h5 className="font-weight-bold">روابط سريعة</h5>
            <ul className="footer-links" style={{ paddingInlineStart: "0" }}>
              <li><Link to="/about">معلومات عن موقعنا</Link></li>
              <li><Link to="/contact">تواصل معنا</Link></li>
              <li><Link to="/blog">المدونة</Link></li>
              {/* <li><Link to="/singleBlog">رابط عرض مقال واحد</Link></li> */}
              <li><Link to="/">الرئيسية</Link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row align-items-center" >
          <div className="col-lg-8 col-md-7 col-sm-6 col-xs-12">
            <p className="copyright-text">
              جميع الحقوق النشر او التعديل محفوظة لصالح
              {data.site.siteMetadata.author}.
            </p>
          </div>

          <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12" >
            <ul className="social-icons" >
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
