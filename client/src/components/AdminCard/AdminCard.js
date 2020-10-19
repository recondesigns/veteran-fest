import React from 'react'
import styled from 'styled-components'

const AdminCardContainer = styled.div`
    border: 1px solid lightcoral;
`

export default function AdminCard() {
    return (
        <AdminCardContainer>
            <p>Admin Card</p>
        </AdminCardContainer>
    )
}