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

    const [data, setRes] = useState([])
    const [loading, setLoading] = React.useState(true);
    const fetchData = async () => {
        const response = await fetch(`https://gounlimited.to/api/folder/list?key=${key.site.siteMetadata.GO_KEY}`)
        if (response.ok) {
            response.json()
                .then(res => {
                    setRes(res.result.folders)
                    setLoading(false);
                }
                )
        }
    }
    useEffect(() => {
        fetchData(key.site.siteMetadata.GO_KEY)
    }, [key.site.siteMetadata.GO_KEY])

    if (loading === true) {
        return <Layout><Loading /></Layout>;
    }
    return (
        <Layout>
            <ol className={categoriesStyles.posts} >
                {data.filter(e => e.fld_id != "43517").map(e => {
                    return (

                        <li key={e.fld_id} className={categoriesStyles.post}>
                            <Link to={`/categories/${e.name}`}
                                state={{ ID: e.fld_id, name: e.name }}
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
