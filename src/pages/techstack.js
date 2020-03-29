import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Tech Stack" />
    <h1>Tech Stack</h1>
    <p>Tecnologias utilizadas</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage
