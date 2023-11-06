import React from 'react'
import { useState } from 'react';

const LoginControl = () => {
    const [isLoggedIn, setLoggedIn] = useState(1);
    const changeLogin = function(){
        setLoggedIn(!isLoggedIn);
    }

  return (
    <div className='loginControl'>
        <button className='loginBtn' onClick={changeLogin}>{isLoggedIn ? '로그인' : '로그아웃'}</button>
        <p className='loginMessage'>{isLoggedIn ? '로그인 하세요' : '환영합니다!'}</p>
    </div>
  )
}

export default LoginControl