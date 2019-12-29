import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { JGET } from '../utils/API'
import Loading from './loading'
import videosStyles from "./videos.module.scss"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className={videosStyles.video}>
        <iframe
        className={videosStyles.iframe}
            src={videoSrcURL}
            title={videoTitle}
            frameBorder="0"
            allowFullScreen
            width="560" 
            height="349"
        />
    </div>

)
const Videos = () => {
    const [data, setRes] = useState([])
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        JGET('file/list')
            .then(response => response.json())
            .then(res => {
                setRes(res.result.files)
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
            {data.map(e => {
                return (
                    <div className={videosStyles.div}>
                        <Video
                            videoSrcURL={e.link}
                            videoTitle={e.title}
                        />
                    </div>
                )
            })}
        </Layout>
    )

}
export default Videos