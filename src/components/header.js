import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import kamime from "../images/kamime.png"

const Header = ({ isPostPage }) => (
  <header
    style={{
      background: `white`,
      background: isPostPage ? "#333" : "#fff",
      boxShadow: isPostPage ? "" : "0 0 5px 0px #bfbfbf",
    }}
  >
    <StyledTabs className={isPostPage ? "enabled" : ""}>
      <div className="logo">
        <img src={kamime} />
      </div>
      <div className="title">Kamime</div>

      <NavigationLink to="/blog">Blog</NavigationLink>
      <NavigationLink to="/projetos">Projetos Pessoais</NavigationLink>
      <NavigationLink to="/techstack">Tech Stack</NavigationLink>
      <NavigationLink to="/quemsomos">Quem somos</NavigationLink>
    </StyledTabs>
  </header>
)

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    cursor: pointer;
    color: #666;
  }
`

const StyledTabs = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(6, auto);
  color: #333;
  text-transform: uppercase;
  grid-column-gap: 25px;
  font-weight: bold;
  background: #fff;

  &.enabled {
    color: #fff;
    background: #333;
  }
  .logo {
    width: 20px;
    height: 20px;
  }
`
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
