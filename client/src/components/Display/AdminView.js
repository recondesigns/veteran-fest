import React from 'react'
import styled from 'styled-components'
// import { Header } from '../Header'

const AdminViewContainer = styled.div`
    /* border: 2px dashed purple; */
`

export default function AdminView() {
    return (
        <AdminViewContainer>
            {/* <Header /> */}
            <p>AdminView Component</p>
        </AdminViewContainer>
    )
}