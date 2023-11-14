import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginControl = (props) => {

    const navigate = useNavigate();
  return (
    <div className='loginControl' >
        <button className='loginBtn' onClick={()=>{navigate('/login')}}>{props.isLoggedIn ? '로그인' : '로그아웃'}
        </button>
        <p className='loginMessage'>{props.isLoggedIn ? '로그인 하세요' : '환영합니다!'}</p>
    </div>
  )
}

export default LoginControl