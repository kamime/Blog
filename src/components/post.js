import React from "react"
import styled from "styled-components"

import { navigate } from "gatsby"

const Post = ({ title, descpt, image, to = "/post1/" }) => {
  return (
    <StyledPost onClick={() => navigate(to)}>
      <div className="image">{image && <img src={image} />}</div>
      <div className="text">
        <div className="title">{title}</div>
        <div className="descpt">{descpt}</div>
      </div>
    </StyledPost>
  )
}

const StyledPost = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  display: grid;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 1px #f1f1f1;
  display: grid;
  grid-template-rows: 2fr 1.5fr;
  transition: all 0.2s cubic-bezier(0, 0.48, 0.48, 0.99);
  > .image {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: rebeccapurple;
    width: 100%;
    height: 100%;
    > img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  > .text {
    padding: 5px 10px;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: 14px;

    > .title {
      font-weight: bold;
    }
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.075);
  }
`

export default Post
