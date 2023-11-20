import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({isLoggedIn, setLoggedIn}) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailWarning, setEmailWarning] = useState('');
    const [passwordWarning, setPasswordWarning] = useState('');

    const emailForm = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    const checkEmail = (e) =>{
        setEmail(e.target.value);

        if(!emailForm.test(email)){
            setEmailWarning("올바른 이메일을 입력해주세요");
        }else{
            setEmailWarning('');
        }

    }

    const checkPassword = (e) =>{
        setPassword(e.target.value);

        const eng = password.search(/[a-z]/ig);
        const num = password.search(/[0-9]/g);
        const spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    
        if((eng<0 || num<0 || spe<0) || password.length < 8){
            setPasswordWarning("올바른 비밀번호를 입력해주세요");
        }else{
            setPasswordWarning('');
        }
        

    }

    const handleLogin = ()=>{
        if(emailForm.test(email) && passwordWarning === '' && password.length > 0){
            setLoggedIn(!isLoggedIn);
            navigate('/');
        }
    }


  return (
    <div className='login-page'>
        <div className="login-container">
            <h2>이메일과 비밀번호를<br />입력해주세요</h2>

            <form action="" id='loginForm'>
                <label>이메일주소
                    <input type="email" id='email' onChange={(e)=>checkEmail(e)}/>
                    <p className='login-warning'>{emailWarning}</p>
                </label>
           

                <label>비밀번호
                    <input type="password" id="password" placeholder='영문, 숫자, 특수문자 포함 8자 이상' onChange={(e)=> checkPassword(e)}/>
                    <p className='login-warning'>{passwordWarning}</p>
                </label>
           
                <input type="button" value="확인" id="loginBtn" className={emailForm.test(email) && passwordWarning === '' && password.length > 0 ? 'loginActive' : ''} onClick={handleLogin}/>
            </form>
        </div>
    </div>
  )
}

export default Login