import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import React from "react"

//  “Blog”, “Projetos pessoais”, “Tech Stack”, “Quem somos”

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      borderBottom: `1px solid black`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(6, auto)',
        color: '#333',
        textTransform: 'uppercase',
        gridColumnGap: '25px',
        fontWeight: 'bold'

      }}
    >
        <div className="logo"></div>
        <div className="title">
          Kamime
        </div>   

        <NavigationLink to="/blog">
           Blog
        </NavigationLink>
        <NavigationLink to="/projetos">
          Projetos Pessoais
        </NavigationLink>
        <NavigationLink to="/techstack">
          Tech Stack
        </NavigationLink>
        <NavigationLink to="/quemsomos">
          Quem somos
        </NavigationLink>
    </div>
  </header>
)

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    cursor: pointer;
    color: #666;
  }

`;

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
