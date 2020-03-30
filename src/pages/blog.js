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
      <Post title="Criação do Blog:" descpt="Conheça a história de criação do blog." />
      <Post title="Covid-19:" descpt="Como a pandemia mudou nossa rotina tecnológica." />
      <Post title="CTRL C, CTRL V:" descpt="Morre cientista da computação que inventou um dos comandos mais úteis para a humanidade."  />
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
