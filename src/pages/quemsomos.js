import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import image from "../images/misael.jpeg"
import img from "../images/me.jpg"
import imgg from "../images/huKocSp.jpg"

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
      <div className="img">
        <img src={img}></img>
      </div>
      <div className="container">
        <div className="name">Erika Alcântara</div>
        <div className="descpt">Desenvolvedora e estudante do 3º período do curso de
        de Ciência da Computação da Unifil.</div>
      </div>
    </AboutCard>

    <AboutCard>
      <div className="imgg">
        <img src={imgg}></img>
      </div>
      <div className="container">
        <div className="name">Guilherme Rodrigues</div>
<<<<<<< HEAD
        <div className="descpt">Programador e Desenvolverdor em crescimento... 3º período em Ciência da Computação.</div>
=======
        <div className="descpt">>Programador e Desenvolverdor em crescimento... 3º período em Ciência da Computação.</div>
>>>>>>> 5d83a71ad46881d010caef136171ae0aff8f3074
      </div>
    </AboutCard>

    <AboutCard>
      <div className="image">
        <img src={image}></img>
      </div>
      <div className="container">
        <div className="name">Misael Vergara</div>
        <div className="descpt">Desenvolvedor de sei lá o que.</div>
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
  > .img {
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

  > .imgg {
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
