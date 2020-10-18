import React from 'react'
import styled from 'styled-components'
import BarItem from './BarItem'

const ProgressBarContainer = styled.div`
    display: flex;

    /* border: 1px solid lightcoral; */
`

export default function ProgressBar() {
    return (
        <ProgressBarContainer>
            <BarItem status={'inactive'} message={'Setup account'} />
            <BarItem status={'active'} message={'Vendor info'} />
            <BarItem status={'complete'} message={'Payment'} />
        </ProgressBarContainer>
    )
}