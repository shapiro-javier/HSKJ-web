import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'
import Loading from '../loading';
import categoriesStyles from "./categories.module.scss"

export default function NaughtyAmerica({ location }) {
    const key = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                GO_KEY
            }
        }
    }
`)
    console.log(location.state)
    const [data, setRes] = useState([])
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        fetch(`https://gounlimited.to/api/folder/list?key=${key.site.siteMetadata.GO_KEY}&fld_id=${location.state.ID}`)
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
            <h4 className={categoriesStyles.help} style={{ textAlign: 'center' }}>Click on the title of the video to open it in a new window</h4>
            <ol className={categoriesStyles.posts} >
                {data.map(e => {
                    return (

                        <li className={categoriesStyles.post}>
                            <div onClick={() => window.open(e.link)}
                            >
                                <h2>{e.title}</h2>
                                <div
                                    align="center"
                                >
                                    <iframe
                                        SRC={e.link.slice(0, 22) + '/embed-' + e.link.slice(23)}
                                        style={{ width: '1px', minWidth: '100%' }}
                                        FRAMEBORDER='0 '
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