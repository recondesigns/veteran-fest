import React from 'react'
import styled from 'styled-components'
import MoreIcon from './MoreIcon'
import SaveButton from './SaveButton'
import PoweredDisplay from './PoweredDisplay'

const AdminCardContainer = styled.div`
    border: 1px solid lightcoral;
`

export default function AdminCard() {
    return (
        <AdminCardContainer>
            <MoreIcon />
            <SaveButton buttonText={'Save'} />
            <PoweredDisplay />
        </AdminCardContainer>
    )
}