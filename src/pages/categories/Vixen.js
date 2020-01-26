import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../../components/layout"
import Loading from "../../components/loading"
import { Card } from "semantic-ui-react"
import SEO from "../../components/seo"

export default function Vixen({ location }) {
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
  const [loading, setLoading] = React.useState(true)
  const fetchData = async () => {
    const response = await fetch(
      `https://gounlimited.to/api/folder/list?key=${key.site.siteMetadata.GO_KEY}&fld_id=${location.state.ID}`
    )
    if (response.ok) {
      response.json().then(res => {
        setRes(res.result.files)
        setLoading(false)
      })
    }
  }
  useEffect(() => {
    setLoading(true)
    fetchData(key.site.siteMetadata.GO_KEY)
  }, [key.site.siteMetadata.GO_KEY])

  if (loading === true) {
    return (
      <Layout>
        <Loading />
      </Layout>
    )
  }
  return (
    <Layout>
      <SEO title="Vixen" />

      <Card.Group>
        <Card
          fluid
          inline="centered"
          header="Go back"
          style={{ textAlign: `center` }}
          as={Link}
          to="/categories"
        />
      </Card.Group>
      <Card.Group>
        <Card
          fluid
          inline="centered"
          header="Click on the title of the video to open it in a new window"
          style={{ textAlign: "center" }}
        />
      </Card.Group>
      <Card.Group>
        {data.map(e => {
          return (
            <Card
              fluid
              inline="centered"
              key={e.link}
              href={e.link}
              target="_blank"
            >
              <Card.Content>
                <Card.Header
                  style={{
                    textAlign: `center`,
                    fontSize: `20px`,
                    wordWrap: `break-word`,
                    color: `#CC6837`,
                  }}
                >
                  {e.title}
                </Card.Header>
                <iframe
                  title={e.title}
                  src={e.link.slice(0, 22) + "/embed-" + e.link.slice(23)}
                  style={{ width: "1px", minWidth: "100%" }}
                  frameBorder="0 "
                  allowFullScreen
                />
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    </Layout>
  )
}
