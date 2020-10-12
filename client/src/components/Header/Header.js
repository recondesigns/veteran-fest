import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  padding: 0px 16px 0px 16px;
  width: 100%;
  min-height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
        min-height: 72px;
    }
`

export default function Header() {
  return (
    <HeaderContainer>
      Op Vets
    </HeaderContainer>
  )
}