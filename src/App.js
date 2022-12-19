import React, { useState, useEffect } from "react";
import Header from './Components/Header';
import Pics from './Components/Pics'
import "./App.css";
import axios from 'axios';




function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const request = axios.get(`https://api.nasa.gov/planetary/apod?api_key=pU8urBWGLyslOtCKNHnXPfq4qHp2ahKekspRrcPb`);
    request 
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.error(err));
    return() => {
      console.log('finished');
    }
  }, []);
  
  
 
  return (
    <div className="app">
      <div className='header'>
        <Header/>
      </div>
      <Pics 
      imgSrc={data.url} 
      date={data.date} 
      photoInfo={{photographerName: data.copyright, description: data.explanation, title: data.title}} 
      /> 
    </div>
  );
}

export default App;
