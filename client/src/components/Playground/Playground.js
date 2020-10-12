import React from 'react'
import styled from 'styled-components'

const PlaygroundContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 4px solid green;

    & > p {
        margin: 0px;
    }
`

export default function Playground() {
    return (
        <PlaygroundContainer>
            <p>Playground</p>
        </PlaygroundContainer>
    )
}