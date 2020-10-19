import React from 'react'
import styled from 'styled-components'
import MoreIcon from './MoreIcon'

const AdminCardContainer = styled.div`
    border: 1px solid lightcoral;
`

export default function AdminCard() {
    return (
        <AdminCardContainer>
            <MoreIcon />
        </AdminCardContainer>
    )
}