import React from 'react'
import styled from 'styled-components'
import Selection from './Selection'
import Diagram from './Diagram'


const BoothSelectionContainer = styled.div`
    /* width: 100%; */
    display: flex;
    border: 2px dashed blue;
`

export default function BoothSelection() {


    return (
        <BoothSelectionContainer>
            <Diagram />
            <Selection>

            </Selection>
        </BoothSelectionContainer>
    )
}