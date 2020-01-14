import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Container, Menu } from "semantic-ui-react"

import Header from "./header"
import "semantic-ui-less/semantic.less"
import { Link } from "gatsby"

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item
    style={{
      color: `#CCA81D`,
    }}
    inverted
    as={Link}
    activeClassName="active"
    {...props}
  >
    {children}
  </Menu.Item>
)

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />

        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <Menu pointing inverted secondary widths={4}>
            <LinkedItem to="/" exact>
              <span
                style={{
                  color: `#CC6837`,
                }}
              >
                {" "}
                Home{" "}
              </span>
            </LinkedItem>
            <LinkedItem to="/categories">
              <span
                style={{
                  color: `#CC6837`,
                }}
              >
                {" "}
                Videos{" "}
              </span>
            </LinkedItem>
            <LinkedItem to="/pics">
              <span
                style={{
                  color: `#CC6837`,
                }}
              >
                {" "}
                Pics{" "}
              </span>
            </LinkedItem>
            <LinkedItem to="/about">
              <span
                style={{
                  color: `#CC6837`,
                }}
              >
                {" "}
                About{" "}
              </span>
            </LinkedItem>
          </Menu>
          {children}
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
