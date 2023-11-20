import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';

function App() {
  const API_KEY = "b9cd5672638353ef3bde068c67209af9";
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`




  const searchWeather = async (e) =>{
    if(e.key === 'Enter'){
      try{
        const data = await axios({
          method:'get',
          url : url
        })
        console.log(data);
        setResult(data);
      }
      catch(err){
        alert(err);
      }
    }
  }

  return (
    <AppWrap>
      <div className="container">
        <input id="weather-input" type="text" placeholder='도시를 입력하세요' value={location} onChange={(e)=>setLocation(e.target.value)} onKeyDown={searchWeather}/>

        <ResultWrap>
          <div className="city">{result.data.name}</div>
          <div className="temp">{result.data.main.temp}</div>
          <div className="sky">{}</div>
        </ResultWrap>
      </div>

    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  display:flex;
  justify-content:center;
  align-items:center;

  #weather-input{
    width:150px;
    height:20px;
    padding:5px;
    border-radius:10px;
    border:1px solid gray;

  }
`;



const ResultWrap = styled.div`
  margin-top:60px;
  padding:10px;
  border: 1px solid gray;
  border-radius : 10px;
`;