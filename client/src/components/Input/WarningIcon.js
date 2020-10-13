import React from 'react'
import styled from 'styled-components'
import warningIcon from '../../assets/icons/input-warning-icon.svg'

const WarningIconContainer = styled.div`
    border: 1px dotted blue;
`

export default function WarningIcon() {
    return (
        <WarningIconContainer>
            <img src={warningIcon} alt={`Validation warning.`} />
        </WarningIconContainer>
    )
}