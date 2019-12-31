import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from './layout'
import categoriesStyles from "./selectedcategories.module.scss"
import Loading from '../pages/loading'

export default function SelectedCategory( props ) {
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
    useEffect(() => {
        fetch(`https://gounlimited.to/api/folder/list?key=${key.site.siteMetadata.GO_KEY}&fld_id=${props.ID}`)
            .then(response => response.json())
            .then(res => {
                setRes(res.result.files)
                console.log(res.result.files)
                setLoading(false);
            }
            )
    })
    if (loading === true) {
        return <Layout><Loading /></Layout>;
    }
    return (
        <Layout>
            <ol className={categoriesStyles.posts} >
            <h2 className={categoriesStyles.h2}>{props.name}</h2>
                {data.map(e => {
                    return (

                        <li className={categoriesStyles.post}>
                            <div onClick={()=>window.open(e.link)}>
                            <h2>{e.title}</h2>
                            </div>
                        </li>

                    )
                })}
            </ol>
        </Layout>
    )
}
