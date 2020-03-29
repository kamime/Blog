import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Bem vindos à Kamime. .</p>
    <p>Somos uma Startup.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/quemsomos/">Quem somos</Link>
    <Link to="/projetos/">Projetos pessoais</Link>
    <Link to="/techstack/">Tech Stack</Link>
  </Layout>
)

export default IndexPage
