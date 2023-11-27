import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const url = `http://localhost:8000/user/login`;


  

  const [id, setId] = useState('');
  const [pw, setPassword] = useState('');

  const handleLogin = async() =>{
    if(!id || !pw){
      alert("아이디나 비밀번호가 입력되지 않았습니다. ");
      return;
    }
    try{
      const response = await axios({
        url: url,
        method: 'post',
        data: {
          id: id,
          pw: pw,
        },
      });

      console.log('success', response.data);

    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="App">
         <div className='login-page'>
        <div className="login-container">
            <h2>이메일과 비밀번호를<br />입력해주세요</h2>

            <form action="" id='loginForm'>
                <label>아이디
                    <input type="id" id='id' onChange={(e)=>setId(e.target.value)}/>
                </label>
           
           
                <label>비밀번호
                    <input type="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
                </label>
           
                <input type="button" value="확인" id="loginBtn" onClick={handleLogin}/>
            </form>
        </div>
    </div>
    </div>
  );
}

export default App;
