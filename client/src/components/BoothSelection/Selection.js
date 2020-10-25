import React from 'react'
import styled from 'styled-components'

const SelectionContainer = styled.div`
    width: 50%;
    border: 1px solid lightcoral;
`

export default function Selection() {
    return (
        <SelectionContainer>
            <p>Selection Component</p>
        </SelectionContainer>
    )
}