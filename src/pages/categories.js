import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { JGET } from '../utils/API'
import Loading from './loading'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

import categoriesStyles from "./categories.module.scss"

export default function Categories() {
    const key = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    GO_KEY
                }
            }
        }
    `)

    const [data, setRes] = useState(0)
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        fetch(`https://gounlimited.to/api/folder/list?key=${key.site.siteMetadata.GO_KEY}`)
            .then(response => response.json())
            .then(res => {
                console.log(res)
                setRes(res.result.folders)
                setLoading(false);
            }
            )
    },[])
    if (loading === true) {
        return <Layout><Loading /></Layout>;
    }
    return (
        <Layout>
            <ol className={categoriesStyles.posts} >
                {data.filter(e => e.fld_id != "43517").map(e => {
                    return (

                        <li className={categoriesStyles.post}>
                            <Link to={`/categories/${e.name}`}
                            state={{ID:e.fld_id}}
                            >
                                <h2>{e.name}</h2>
                            </Link>
                        </li>

                    )
                })}
            </ol>
        </Layout>
    )
}
