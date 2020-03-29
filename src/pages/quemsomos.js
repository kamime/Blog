import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Quem somos</h1>
    <p>Breve descrição dos colaboradores</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage