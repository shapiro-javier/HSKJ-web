import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
      <h1>{props.data.contentfulBLogPost.title}</h1>
      <p>{props.data.contentfulBLogPost.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulBLogPost.body.json,
        options
      )}
    </Layout>
  )
}
export default blog
