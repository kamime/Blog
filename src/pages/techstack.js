import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Tech Stack" />
    <h1>Tech Stack</h1>
    <p>O blog foi criado por meio do static generator GatsbyJs.</p>
    <p>
      Utilizamos a linguagem de programação JavaScript, junto com o framework
      React. Para customização, utilizamos a linguagem de folha de estilo CSS.
    </p>
  </Layout>
)

export default FourthPage
