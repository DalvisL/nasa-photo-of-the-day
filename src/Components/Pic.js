import React from 'react';
import styled from 'styled-components';

const StyledPic = styled.div`

        height: 80%;
        background: ${props => props.theme.black};
        width: 70%;
        max-height: fit-content;
        min-width: 70%;
        margin-left: 2.5%;
        
        // overlay styles
        .pic-overlay {
            display: flex;
            flex-direction: column;
            position: absolute;
            color: ${props => props.theme.white};
            margin-top: 5%;
            width: 70%;

            .pic-overlay-info {
                width: 100%;
                display: flex;
                gap: 45%;

                .date {
                    font-size: 4.5rem;
                    margin-left: 30px;
                    font-family: 'Courier New', Courier, monospace;
                }
                .title {
                    font-size: 5.5rem;
                }
            }
        } // end of overlay styles
        
        // image container styles
        .image-container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${props => props.theme.black};
            
            img {
                max-height: 100%;
                height: 100%;
                width: 80%;
            }
        }
`

export default function Pic(props) {
    const {imgSrc, title, date} = props;

  if(!imgSrc) return <h3>Loading...</h3>
  return (
    <StyledPic className='pic-container'>
        <div className='pic-overlay'>
            <div className='pic-overlay-info'>
                <h3 className='date'>{date}</h3>
                <h3 className='title'>{title}</h3>   
            </div>
        </div>
        <div className='image-container'>
            <img src={imgSrc} alt='Nasa Pic of The Day'/>
        </div>
    </StyledPic>
  )
}


