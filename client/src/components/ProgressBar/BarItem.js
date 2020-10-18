import React from 'react'
import styled from 'styled-components'
import { setBarItem } from './utils'

const BarItemContainer = styled.div`
    width: 125px;
    /* max-height: 40px; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: ${props => props.borderTop};
    background: #403926;

    @media (min-width: 768px) {
        width: 480px;
    }
`

const ItemText = styled.p`
    margin: 4px 0px 4px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: ${props => props.color};
`

export default function BarItem(props) {
    const { message, status } = props
    const { textColor, border } = setBarItem(status)

    return (
        <BarItemContainer borderTop={border}>
            <ItemText color={textColor}>{message}</ItemText>
        </BarItemContainer>
    )
}