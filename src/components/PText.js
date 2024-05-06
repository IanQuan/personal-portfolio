import React from 'react'
import styled from 'styled-components'

const PStyle = styled.div`
  max-width: 550px;
  font-size: 1.8rem;
  line-height: 1.3em;
  margin: ${({ noMargin }) =>
    noMargin ? '0' : 'auto'}; // Conditionally apply margin
  
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`

export default function PText ({ children, noMargin }) {
  return (
    <PStyle className='para' noMargin={noMargin}>
      <p>{children}</p>
    </PStyle>
  )
}
