import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import aboutStyles from "./about.module.scss"


const About = () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulBLogPost(
              sort: {
                fields: publishedDate,
                order:DESC
              }
            )
            {
              edges{
                node{
                  title
                  slug
                  publishedDate(formatString:"MMM Do, YYYY")
                }
              }
            }
          }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol 
            className={aboutStyles.posts}
            >
                {data.allContentfulBLogPost.edges.filter(e=>e.node.slug==="About").map((edge) => {
                    return (
                        <li 
                        className={aboutStyles.post}
                        >
                            <Link to={`/about/${edge.node.slug}`} >
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default About