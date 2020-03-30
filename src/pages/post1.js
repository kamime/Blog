import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout isPostPage={true} postTitle="Post 1">
    <h1>Projetos Pessoais</h1>
    <p>Inserir projetos da equipe</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage