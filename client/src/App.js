import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from './providers/Store'
// import { AdminView } from './components/AdminView'
// import { VendorView } from './components/VendorView'
import { Playground } from './components/Playground'


const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: lightgray;
`

export default function App() {
  const [appState] = useContext(AppStateContext)
  console.log('FROM App.js: ', appState)
  
  return (
    <AppContainer>
      {/* <AdminView /> */}
      <Playground />

    </AppContainer>
  )
}
