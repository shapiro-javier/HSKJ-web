import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Card, Divider } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// export const query = graphql`
// query (
//     $slug: String!
//   ){
//    markdownRemark (
//     fields: {
//       slug:{
//         eq: $slug
//       }
//     }
//   ){
//    frontmatter{
//     title
//     date
//   }
//   html
//     }

//   }`

export const query = graphql`
  query($slug: String!) {
    contentfulBLogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <SEO title={props.data.contentfulBLogPost.title} />
      <Card.Group>
        <Card
          fluid
          inline="centered"
          header="Go back"
          style={{ textAlign: `center` }}
          as={Link}
          to="/about"
        />
      </Card.Group>
      <Divider />
      <Card fluid centered>
        <Card.Content>
          <h3>
            <Card.Header>{props.data.contentfulBLogPost.title}</Card.Header>
          </h3>
          <h4>
            <Card.Description>
              {documentToReactComponents(
                props.data.contentfulBLogPost.body.json,
                options
              )}
            </Card.Description>
          </h4>
        </Card.Content>
        <Card.Content extra>
          <p>{props.data.contentfulBLogPost.publishedDate}</p>
        </Card.Content>
      </Card>
    </Layout>
  )
}
export default blog
