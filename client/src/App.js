import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from './providers/Store'
import { Display } from './components/Display'

const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: lightgray;
`

export default function App() {
  const [appState] = useContext(AppStateContext)
  console.log('FROM App.js: ', appState)
  
  return (
    <AppContainer>
      <Display />
    </AppContainer>
  )
}
