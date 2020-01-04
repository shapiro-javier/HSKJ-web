import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from "./index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.div}>
      <h1>Supp nibbas</h1>
      <p>Welcome to my new Gatsby site.</p>
      <p>Mobile friendly.</p>
      <p>Completely Open Source Website. Look at the code here :  <a href="https://github.com/GO-unlimited">GitHub</a>.</p>
      <p>Now go and watch something great :3.</p>
    </div>
  </Layout>
)

export default IndexPage
