import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Página não encontrada" />
    <h1>Página não encontrada</h1>
    <p>Você acessou uma página que não existe em nosso blog, que pena. :(</p>
  </Layout>
)

export default NotFoundPage
