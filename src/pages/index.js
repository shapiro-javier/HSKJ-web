import React from "react"

import { List } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2
      style={{
        textAlign: `center`,
        color: `#75CCC9`,
      }}
    >
      <span role="img" aria-label="Waving hand">
        👋
      </span>{" "}
      Hey there!
    </h2>

    <p>
      <h3>
        Welcome to this open source sin.
        <br />
        <br />
        Look at the source code here:{" "}
        <a href="https://github.com/GO-unlimited">
          https://github.com/GO-unlimited
        </a>
        <br />
        <br />
        Technologies Used:
        <List
          as="ul"
          style={{
            color: `#52AECC`,
          }}
        >
          <List.Item as="li">Gatsby</List.Item>
          <List.Item as="li">React</List.Item>
          <List.Item as="li">Semantic UI React</List.Item>
          <List.Item as="li">Semantic UI Less</List.Item>
          <List.Item as="li">GraphQL</List.Item>
          <List.Item as="li">Contentful</List.Item>
        </List>
      </h3>
    </p>
  </Layout>
)

export default IndexPage
