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
    <h4>Future Features</h4>
    <ul>
      <li>Find REKO Rings in your area</li>
      <li>Check time/location</li>
      <li>Check producers profiles</li>
      <li>Check next REKO deliveries</li>
      <li>Support Login with FB/Google/Twitter/Email</li>
      <li>Order Management for Farms</li>
      <li>Aditional Features will have a minimal maintenance fee</li>
      <li>Open source infrastructure to run a REKO Directory</li>
    </ul>
  </Layout>
)

export default IndexPage
