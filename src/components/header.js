import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Nav, Navbar, Container, NavItem } from "react-bootstrap"
import "./header.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Navbar collapseOnSelect fluid expand="lg" id="mainNav">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            {data.site.siteMetadata.title}
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/">
                HOME
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/blog">
                BLOG
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/about">
                ABOUT US
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/contact">
                CONTACT
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
