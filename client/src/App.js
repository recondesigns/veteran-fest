import React from "react"
import styled from "styled-components"
import { Header } from './componets/Header'

const AppContainer = styled.div`
  border: 1px solid red;
`;

export default function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  )
}
