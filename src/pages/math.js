import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import mathStyle from './math.module.scss'

const Math = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={mathStyle.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={mathStyle.post}>
                            <Link to={`/math/${edge.node.fields.slug}`} >
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Math