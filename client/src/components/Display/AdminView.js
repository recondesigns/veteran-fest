import React from 'react'
import styled from 'styled-components'

const AdminViewContainer = styled.div`
    border: 2px dashed purple;
`

export default function AdminView() {
    return (
        <AdminViewContainer>
            <p>AdminView Component</p>
        </AdminViewContainer>
    )
}