import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { JGET } from '../utils/API'
import Loading from './loading'
import { Link } from 'gatsby'

import categoriesStyles from "./categories.module.scss"

export default function Categories() {
    const [data, setRes] = useState([])
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        JGET('folder/list')
            .then(response => response.json())
            .then(res => {
                setRes(res.result.folders)
                console.log(res)
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
                {data.filter(e => e.fld_id != "43517").map(e => {
                    return (

                        <li className={categoriesStyles.post}>
                            <Link to={`/categories/${e.name}`} >
                                <h2>{e.name}</h2>
                            </Link>
                        </li>

                    )
                })}
            </ol>
        </Layout>
    )
}
