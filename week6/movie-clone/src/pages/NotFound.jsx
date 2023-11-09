import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='page-container'>
      <div className='notFound-title'>해당 페이지를 찾지 못했습니다.</div>

      <div className='notFound-subtitle'>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>

      <div className='mainBtn'
        onClick={()=>navigate('/')}>메인 페이지로 이동</div>
    </div>
  )
}

export default NotFound