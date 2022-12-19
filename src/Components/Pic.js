import React from 'react';

export default function Pic(props) {
    const {imgSrc, title, date} = props;

  if(!imgSrc) return <h3>Loading...</h3>
  return (
    <div className='pic-container'>
        <div className='pic-overlay'>
            <div className='pic-overlay-info'>
                <h3 className='date'>{date}</h3>
                <h3 className='title'>{title}</h3>   
            </div>
        </div>
        <div className='image-container'>
            <img src={imgSrc} alt='Nasa Pic of The Day'/>
        </div>
    </div>
  )
}


