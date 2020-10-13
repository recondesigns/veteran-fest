import React from 'react'
import styled from 'styled-components'
import warningIcon from '../../assets/icons/input-warning-icon.svg'

const WarningIconContainer = styled.div`
    margin: 0px 0px 0px 16px;
    display: ${props => props.display};
    /* border: 1px dotted blue; */
`

export default function WarningIcon(props) {
    const { display } = props
    
    return (
        <WarningIconContainer display={display}>
            <img src={warningIcon} alt={`Validation warning.`} />
        </WarningIconContainer>
    )
}