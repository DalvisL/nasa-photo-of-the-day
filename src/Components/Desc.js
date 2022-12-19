import React from 'react'

export default function Desc(props) {
    const {photographerName, description} = props;
  return (
    <div className='decription-container'>
        <div className='description-card'>
            <h4>By: {photographerName}</h4>
            <hr></hr>
            <div>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}
