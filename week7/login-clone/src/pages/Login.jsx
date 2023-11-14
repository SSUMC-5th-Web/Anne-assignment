import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailWarning, setEmailWarning] = useState('');
    const [passwordWarning, setPasswordWarning] = useState('');


    const checkEmail = (e) =>{
        setEmail(e.target.value);
        const emailForm = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

        if(!emailForm.test(email)){
            setEmailWarning("올바른 이메일을 입력해주세요");
        }else{
            setEmailWarning('');
        }

    }

    const handleLogin = () =>{

        const eng = password.search(/[a-z]/ig);
        const num = password.search(/[0-9]/g);
        const spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    
    //    else if((eng<0 || num<0 || spe<0) && password.length <8){
    //         setPasswordWarning("올바른 비밀번호를 입력해주세요");
    //     }
        
    //     else{
    //         navigate('/');
    //     }

        
    }

  return (
    <div className='login-page'>
        <div className="login-container">
            <h2>이메일과 비밀번호를<br />입력해주세요</h2>

            <form action="" id='loginForm'>
                <label>이메일주소 <br />
                    <input type="email" id='email' onChange={(e)=>checkEmail(e)}/>
                    <p className='login-warning'>{emailWarning}</p>
                </label>
                <br />
                <label>비밀번호 <br />
                    <input type="password" id="password" placeholder='영문, 숫자, 특수문자 포함 8자 이상' onChange={(e)=> setPassword(e.target.value)}/>
                    <p className='login-warning'>{passwordWarning}</p>
                </label>
                <br />
                <input type="button" value="확인" id="loginBtn" className='' onClick={()=>handleLogin()}/>
            </form>
        </div>
    </div>
  )
}

export default Login