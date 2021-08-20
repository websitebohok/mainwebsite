import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.button`
  border: none;
  border-radius: 10px;
  background-color: var(--blue);
  font-size: var(--h6);
  padding: 1rem 1.25rem;
  display: flex;
  font-family: var(--sansSerif);
  font-weight: var(--mediumWeight);
  color: var(--white);
  text-decoration: none;
  position: relative;

  &:hover,
  &:focus {
    background-color: var(--white);
    color: var(--blue);
    border: 1px solid var(--blue);
    cursor: pointer;

    &:after {
      opacity: 0.15;
    }
  }

  &:visited {
    text-decoration: none;
  }
`

const Button = (props) => {
  return (
    <ButtonWrapper type={props.type}>
      {props.text ? props.text : "Read Article"}{" "}
    </ButtonWrapper>
  )
}

export default Button
