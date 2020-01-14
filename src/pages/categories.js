import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Loading from "./loading"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { Card } from "semantic-ui-react"
import SEO from "../components/seo"

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
  const [loading, setLoading] = React.useState(true)
  const fetchData = async () => {
    const response = await fetch(
      `https://gounlimited.to/api/folder/list?key=${key.site.siteMetadata.GO_KEY}`
    )
    if (response.ok) {
      response.json().then(res => {
        setRes(res.result.folders)
        setLoading(false)
      })
    }
  }
  useEffect(() => {
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
      <SEO title="Videos" />
      <Card.Group>
        {data
          .filter(e => e.fld_id !== "43517")
          .map(e => {
            return (
              <Card
                key={e.fld_id}
                fluid
                as={Link}
                to={`/categories/${e.name}`}
                state={{ ID: e.fld_id, name: e.name }}
              >
                <Card.Content>
                  <Card.Header
                    style={{
                      textAlign: `center`,
                      color: `#CC6837`,
                    }}
                  >
                    {e.name}
                  </Card.Header>
                </Card.Content>
              </Card>
            )
          })}
      </Card.Group>
    </Layout>
  )
}
