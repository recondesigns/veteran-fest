import React from 'react'
import styled from 'styled-components'

const AdminViewContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 4px solid lightcoral;

    & > p {
        margin: 0px;
    }
`

export default function AdminView() {
    return (
        <AdminViewContainer>
            <p>Admin View</p>
        </AdminViewContainer>
    )
}