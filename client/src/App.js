import React from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Display } from './components/Display'

const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: lightgray;
`

export default function App() {
  
  return (
    <AppContainer>
      <Header />
      <Display />
    </AppContainer>
  )
}
