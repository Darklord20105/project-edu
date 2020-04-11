import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Nav, Navbar, Container, NavItem } from "react-bootstrap"

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Navbar collapseOnSelect fluid expand="lg" id="mainNav">
      <Container>
        <Navbar.Brand >
          <Link className="nav-link" to="/">
            شعار الموقع
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/">
                الرئيسية
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/blog">
                أخبار الجامعات
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/about">
                من نحن
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/contact">
                أتصل بنا
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header