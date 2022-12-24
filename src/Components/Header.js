import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 75%;
  width: 50%;
  display: flex;
  align-items: flex-end;
  h1 {
    font-size: 5.5rem;
    color: ${props => props.theme.white};
    margin-left: 5%;
    line-height: 1;
    border-bottom: solid ${props => props.theme.secondaryColor} 6px;
  }
  abbr {
    text-decoration: none;
    color: ${props => props.theme.secondaryColor};
  } 
`

export default function Header() {
  return (
    <StyledHeader>
        <h1>NASA <abbr title='Picture of the Day'>POD</abbr></h1> {/*look into using a data-title prop on abbr to be able to style the title tooltip*/}
    </StyledHeader>
  )
}
