import React, { useContext } from 'react'
import styled from 'styled-components'
// import { AppStateContext } from './providers/Store'
import { AdminView } from './componets/AdminView'
import { VendorView } from './componets/VendorView'
import { Playground } from './componets/Playground'


const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: lightgray;
`

export default function App() {

  return (
    <AppContainer>
      {/* <AdminView /> */}
      <Playground />

    </AppContainer>
  )
}