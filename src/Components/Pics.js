import React from 'react';
import Pic from './Pic';
import Desc from './Desc';

export default function Pics(props) {
  const { imgSrc, date, photoInfo} = props;

  return (
    <section>
      <div className='container'>
        <Pic 
          imgSrc={imgSrc} 
          date={date} 
          title={photoInfo.title} 
        />
        <Desc photographerName={photoInfo.photographerName} description={photoInfo.description}/>
      </div>
    </section>
  )
}
