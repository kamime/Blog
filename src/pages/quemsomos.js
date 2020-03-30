import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import image from "../images/misael.jpeg"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Quem somos</h1>

    <p>
      Com início em 2019, a equipe Kamime já desenvolveu diversos projetos
      práticos e teóricos na área de TI.
    </p>
    <p>
      Apaixonados por desafios, atuamos de forma criativa, responsável e com
      muito afinco para desenvolver soluções inteligentes aos problemas que nos
      são propostos.
    </p>
    <p>
      <strong>Conheça um pouco sobre cada um de nós:</strong>
    </p>

    <AboutCard>
      <div className="image">
        <img src={image}></img>
      </div>
      <div className="container">
        <div className="name">Misael</div>
        <div className="descpt">Desenvolvedor de sei lá o que</div>
      </div>
    </AboutCard>
  </Layout>
)

const AboutCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  background: linear-gradient(
    75deg,
    rgb(255, 255, 255) 0%,
    rgb(251, 251, 251) 100%
  );
  border-radius: 8px;
  box-shadow: 0px 2px 4px 1px #f1f1f1;
  padding: 15px;
  grid-column-gap: 15px;

  > .image {
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0px 2px 4px 1px #f1f1f1;
    }
  }
  > .container {
    width: 100%;
    height: 100%;
    font-size: 20px;
    .name {
      font-weight: bold;
    }
  }
`

export default SecondPage
