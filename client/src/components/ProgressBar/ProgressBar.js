import React from 'react'
import styled from 'styled-components'
import BarItem from './BarItem'
import { setStep } from './utils'

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
`

export default function ProgressBar(props) {
    const { step } = props
    const { itemOneStatus, itemTwoStatus, itemThreeStatus } = setStep(step)

    return (
        <ProgressBarContainer>
            <BarItem status={itemOneStatus} message={'Setup account'} />
            <BarItem status={itemTwoStatus} message={'Vendor info'} />
            <BarItem status={itemThreeStatus} message={'Payment'} />
        </ProgressBarContainer>
    )
}