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

        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">{result.data.name}</div>
            
            <div className="temp">{Math.round(((result.data.main.temp - 273.15) * 10)) / 10} °C</div>

            <div className="sky">{result.data.weather[0].main}</div>
              
            <div className="temp-detail">
                <span className='temp-max' style={{marginRight:"20px"}}>
                  H: {Math.round(((result.data.main.temp_max - 273.15) * 10)) / 10} °C
                </span>

                <span className='temp-min'>
                  L: {Math.round(((result.data.main.temp_min - 273.15) * 10)) / 10} °C
                </span>
              </div>

           
            
          </ResultWrap>
        )}
        
      </div>

    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  line-height:1.3;
  text-align:center;
  background-color:#15184A;
  color:white;

  #weather-input{
    width:200px;
    height:20px;
    padding:5px;
    border-radius:10px;
    border:1px solid white;
  }


`;



const ResultWrap = styled.div`
  margin-top:30px;
  padding:10px;
  border: 1px solid white;
  border-radius : 10px;
  background-color:rgba(255,255,255,0.12);


  .city{
    font-size:24px;
  }

  .temp{
    font-size:40px;
  }

  .sky{
    font-size:20px;
  }
  .temp-detail{
    font-size:15px;
  }
`;