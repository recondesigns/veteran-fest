import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../providers/Store'
import { StatusMessage } from '../StatusMessage'
import { ProgressBar } from '../ProgressBar'

const VendorViewContainer = styled.div`
    /* border: 2px dashed purple; */
`

const ContentWrapper = styled.div`
    margin: 32px 0px 0px 0px;
    width: 100%;
    padding: 0px 16px 0px 16px;
    border: 1px solid lightblue;
`

const BodyText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #000000;
`

export default function VendorView() {
    const [appState] = useContext(AppStateContext)
    const { userDetails } = appState.currentUser
    const { formProgressStep } = userDetails

    return (
        <VendorViewContainer>
            <ProgressBar step={formProgressStep} />
            <StatusMessage status={'success'} message={'You have created an account.'} />
            <ContentWrapper>
                <BodyText>Please complete the following:</BodyText>
            </ContentWrapper>
        </VendorViewContainer>
    )
}