import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import mathStyle from './math.module.scss'

const Math = () => {
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
            <ol className={mathStyle.posts}>
                {data.allContentfulBLogPost.edges.map((edge) => {
                    return (
                        <li className={mathStyle.post}>
                            <Link to={`/math/${edge.node.slug}`} >
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

export default Math