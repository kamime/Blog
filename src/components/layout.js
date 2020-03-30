import React from "react"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const Layout = ({ children, isPostPage, postTitle }) => {
  return (
    <StyledLayout>
      <Header siteTitle="Kamime" isPostPage={isPostPage} />
      <div className={`post-title ${isPostPage ? "" : "disable"}`}>
        {postTitle}
      </div>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Kamime</footer>
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr auto;

  > .post-title {
    background: #333;
    color: white;
    padding: 50px 20%;
    text-align: center;
    font-size: 25px;
    margin-bottom: 25px;
    &.disable {
      padding: 0;
      margin-bottom: 50px;
    }
  }
  main {
    padding: 0 20%;
  }

  footer {
    padding: 20px 20%;
  }
`

export default Layout
