import React, { useState, useEffect } from "react";
import Header from './Components/Header';
import Pics from './Components/Pics'
import Footer from "./Components/Footer";
import axios from 'axios';
import styled from 'styled-components';

const StyledApp = styled.div`
  max-width: 100%;
  .header {
    background: ${props => props.theme.primaryColor};
    height: 15vh;
    display: flex;
    align-items: center;
  }
`




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
    <>
      <StyledApp className="app">
        <div className='header'>
          <Header />
        </div>
        <Pics
          imgSrc={data.url}
          date={data.date}
          photoInfo={{ photographerName: data.copyright, description: data.explanation, title: data.title }} />
      </StyledApp>
      <Footer />
    </>
  );
}

export default App;
