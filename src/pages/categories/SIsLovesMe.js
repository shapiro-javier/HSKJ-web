import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'
import Loading from '../loading';
import categoriesStyles from "./categories.module.scss"

export default function SisLovesMe({ location }) {
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
        const response = await fetch(`https://gounlimited.to/api/folder/list?key=${key.site.siteMetadata.GO_KEY}&fld_id=${location.state.ID}`)
        if (response.ok) {
            response.json()
                .then(res => {
                    setRes(res.result.files)
                    setLoading(false);
                }
                )
        }
    }
    useEffect(() => {
        setLoading(true);
        fetchData(key.site.siteMetadata.GO_KEY)
    }, [key.site.siteMetadata.GO_KEY])

    if (loading === true) {
        return <Layout><Loading /></Layout>;
    }
    return (
        <Layout>
            <h4 className={categoriesStyles.help} style={{ textAlign: 'center' }}>Click on the title of the video to open it in a new window</h4>
            <ol className={categoriesStyles.posts} >
                {data.map(e => {
                    return (

                        <li key={e.link} className={categoriesStyles.post}>
                            <div onClick={() => window.open(e.link)}
                            >
                                <h2>{e.title}</h2>
                                <div
                                    align="center"
                                >
                                    <iframe
                                        title={e.title}
                                        src={e.link.slice(0, 22) + '/embed-' + e.link.slice(23)}
                                        style={{ width: '1px', minWidth: '100%' }}
                                        frameBorder='0 '
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </li>

                    )
                })}
            </ol>
        </Layout>
    )
}