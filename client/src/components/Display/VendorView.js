import React from 'react'
import styled from 'styled-components'
import { StatusMessage } from '../StatusMessage'

const VendorViewContainer = styled.div`
    /* border: 2px dashed purple; */
`

export default function VendorView() {
    return (
        <VendorViewContainer>
            <p>VendorView Component</p>
            <StatusMessage status={'success'} message={'You have created an account.'} />
        </VendorViewContainer>
    )
}