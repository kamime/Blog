import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import styled from 'styled-components'

const SecondPage = () => (
  <Layout>
    <SEO />
    <Posts>
      <Post title="Primeira postagem: criação do Blog" descpt="Segue aqui uma breve descrição" />
      <Post title="Primeira postagem: criação do Blog" descpt="Segue aqui uma breve descrição" />
      <Post title="Primeira postagem: criação do Blog" descpt="Segue aqui uma breve descrição" />
    </Posts>
  </Layout>
)


const Posts = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-auto-rows: 300px;
  grid-gap: 25px 30px;
  justify-content: center;
  padding: 50px;
`


export default SecondPage
