import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.div`
    justify-content: center;
    height: fit-content;
    display: flex;
    width: 25%;

    .description-card {
      background: ${props => props.theme.white};
      border-radius: 7px;
      width: 80%;
      padding: 10px;

      p {
        color: ${props => props.theme.gray};
        font-size: 1.2rem;
        padding: 10px;
      }
      h4 {
        font-size: 3rem;
      }
    }
`

export default function Desc(props) {
    const {photographerName, description} = props;
  return (
    <StyledDescription className='decription-container'>
        <div className='description-card'>
            <h4>By: {!photographerName? 'NASA' : photographerName}</h4>
            <hr></hr>
            <div>
                <p>{description}</p>
            </div>
        </div>
    </StyledDescription>
  )
}
