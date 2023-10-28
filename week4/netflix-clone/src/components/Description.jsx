import React from 'react'
import { DescriptionContainer, DescriptionTitle, Overview} from './Description.style.jsx';

const Description = (props) => {
  return (
    <DescriptionContainer>
      <DescriptionTitle>{props.title}</DescriptionTitle>
      <Overview>{props.overview}</Overview>
    </DescriptionContainer>
  )
}

export default Description