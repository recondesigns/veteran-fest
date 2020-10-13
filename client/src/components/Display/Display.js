import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../providers/Store'

const DisplayContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 2px dotted hotpink;
`

export default function Display() {
    const [appState] = useContext(AppStateContext)
    console.log(appState)
    return (
        <DisplayContainer>
            <p>Display Component</p>
        </DisplayContainer>
    )
}