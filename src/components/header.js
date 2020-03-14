import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Nav, Navbar, Container, NavItem } from "react-bootstrap"

import { Trigger } from "../lang-switch"
import { FormattedMessage } from 'react-intl'

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
            <FormattedMessage id="logo_text" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav >
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/">
                <FormattedMessage id="home" />
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/blog">
                <FormattedMessage id="blog" />
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/about">
                <FormattedMessage id="about" />
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-item" to="/contact">
                <FormattedMessage id="contact" />
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Trigger />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header