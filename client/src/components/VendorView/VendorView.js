import React from 'react'
import styled from 'styled-components'

const VendorViewContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 4px solid dodgerblue;

    & > p {
        margin: 0px;
    }
`

export default function VendorView() {
    return (
        <VendorViewContainer>
            <p>Vendor View</p>
        </VendorViewContainer>
    )
}