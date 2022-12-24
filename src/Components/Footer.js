import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.div`
height: 30px;
  footer {
    height: 10vh;
    background: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    p{
      color: ${props => props.theme.secondaryColor};
      margin-bottom: 10px;
      font-family: 'Courier New', Courier, monospace;
    }
  }


` 

export default function () {
  return (
    <StyledFooter>
        <footer>
            <p>Created By: Dalvis Liz</p>
        </footer>
    </StyledFooter>
  )
}
