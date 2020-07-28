import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4>Posible Features</h4>
    <ul>
      <li>Find REKO Rings in your area</li>
      <li>Tools and Documentation to start a REKO</li>
      <li>Check time/location</li>
      <li>Check producers profiles</li>
      <li>Check next REKO deliveries</li>
      <li>Support Login with FB/Google/Twitter/Email</li>
      <li>Order Management for Farms</li>
      <li>Integrate with payment platforms like paypal/stripe</li>
      <li>Open source infrastructure to run a REKO Directory</li>
      <li>Implement Marketing Campaings on Google and FB</li>
      <li>Manage Product Catalogue and Inventory</li>
    </ul>
    <a href="mailto:jorge@croppia.com">Contact Me!</a> | 
    <a href="https://github.com/croppia/rekolist">Github Repository</a>
  </Layout>
)

export default IndexPage
