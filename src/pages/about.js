import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Card, Divider, Header } from "semantic-ui-react"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBLogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <Header as="h3">Blog</Header>
      <Divider />
      <Card.Group centered>
        {data.allContentfulBLogPost.edges
          .filter(e => e.node.slug === "About")
          .map(edge => {
            return (
              <Card fluid color="red" as={Link} to={`/about/${edge.node.slug}`}>
                <Card.Content>
                  <Card.Header>{edge.node.title}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <p>{edge.node.publishedDate}</p>
                </Card.Content>
              </Card>
            )
          })}
      </Card.Group>
    </Layout>
  )
}

export default About
