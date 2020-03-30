import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Quem somos</h1>

    <p>Com início em 2019, a equipe Kamime já desenvolveu diversos 
      projetos práticos e teóricos na área de TI.</p>
    <p>Apaixonados por desafios, atuamos de forma criativa, responsável e 
    com muito afinco para desenvolver soluções	inteligentes aos problemas que nos são propostos.</p>
    <p>Conheça um pouco sobre cada um de nós:</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
