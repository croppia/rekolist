import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4>Check if you have a REKO Ring close to you</h4>
    <p>Type a city:</p>
    <input></input>
    <button>Search</button>
  </Layout>
)

export default IndexPage
