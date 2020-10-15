import React from 'react'
import styled from 'styled-components'

const VendorViewContainer = styled.div`
    border: 2px dashed purple;
`

export default function VendorView() {
    return (
        <VendorViewContainer>
            <p>VendorView Component</p>
        </VendorViewContainer>
    )
}