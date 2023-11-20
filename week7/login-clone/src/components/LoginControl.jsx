import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginControl = ({isLoggedIn}) => {

    const navigate = useNavigate();

  return (
    <div className='loginControl' >
        <button className='loginBtn' onClick={()=>{navigate('/login')}}>{isLoggedIn ? '로그아웃' : '로그인'}
        </button>
        <p className='loginMessage'>{isLoggedIn ? '환영합니다!' : '로그인하세요!'}</p>
    </div>
  )
}

export default LoginControl