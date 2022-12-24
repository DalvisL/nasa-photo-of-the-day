import React from 'react';
import Pic from './Pic';
import Desc from './Desc';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  position: relative;
  height: fit-content;
  margin: 10px 0;
  align-items: center;
  
  .container {
    display: flex;
    gap: 2.5%;
    height: 100%;
  }
`

export default function Pics(props) {
  const { imgSrc, date, photoInfo} = props;

  return (
    <StyledSection>
      <div className='container'>
        <Pic 
          imgSrc={imgSrc} 
          date={date} 
          title={photoInfo.title} 
        />
        <Desc photographerName={photoInfo.photographerName} description={photoInfo.description}/>
      </div>
    </StyledSection>
  )
}
