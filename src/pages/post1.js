import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout isPostPage={true} postTitle="História do Blog">
    <h1>Como surgiu o blog</h1>
    <p>O blog fez parte de um projeto acadêmico 
      da disciplina de Projeto Interdisciplinar II, do 3º período do curso 
      de Ciência da Computação.
    </p>
    <p>
      Seu desenvolvimento teve início nos laboratórios da universidade. 
      Foi um grande desafio, pois nem todos tinham prática nas linguagens e 
      frameworks necessários para a conclusão do projeto. Assim, foi necessário estudo prévio.
    </p>
    <p>
      Nós, membros, realizamos algumas reuniões para a decisão sobre quais ferramentas utilizar, pesquisa sobre tais ferramentas e linguagens de programação a serem utilizadas.
      Com o advento da pandemia da Covid-19, tivemos que partir para o sistema de “Home office”.  Utilizamos o Google Meet para as reuniões, bem como a extensão Live Share do VS Code para, juntos, trabalharmos nós códigos.
      Foi muito produtivo e cada um dos três membros pode contribuir com ideias e desenvolvimento.
    </p>
    <p>
      Ficamos muito animados com o resultado final e esperamos que vocês 
      também tenham uma ótima experiência com o blog!
    </p>
  </Layout>
)

export default ThirdPage
