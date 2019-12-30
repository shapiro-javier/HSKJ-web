import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import Loading from '../loading';
import { JGET } from '../../utils/API';
import categoriesStyles from "../categories.module.scss"
import { Link } from 'gatsby';
export default function Amateur({ location }) {
    console.log(location.state)
    const [data, setRes] = useState([])
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        JGET('folder/list', `fld_id=${location.state.ID}`)
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
                {data.map(e => {
                    return (

                        <li className={categoriesStyles.post}>
                            <Link onClick={()=>window.open(e.link)}>
                            <h2>{e.title}</h2>
                            </Link>
                        </li>

                    )
                })}
            </ol>
        </Layout>
    )
}
