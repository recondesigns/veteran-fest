import React from 'react'
import styled from 'styled-components'

const DisplayContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 2px dotted hotpink;
`

export default function Display() {
    return (
        <DisplayContainer>
            <p>Display Component</p>
        </DisplayContainer>
    )
}