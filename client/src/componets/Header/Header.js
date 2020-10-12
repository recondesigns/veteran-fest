import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  padding: 0px 16px 0px 16px;
  width: 100%;
  min-height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
  & > img {
    height: 40px;
  }
  @media (min-width: 768px) {
        min-height: 72px;
    }
`

export default function Header() {
  return (
    <HeaderContainer>
    </HeaderContainer>
  )
}