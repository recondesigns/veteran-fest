import React from 'react'
import styled from 'styled-components'

const BarItemContainer = styled.div`
    width: 125px;
    max-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 8px solid #4E6A5B;
    background: #403926;
`

const ItemText = styled.p`
    margin: 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    /* display: flex;
    align-items: center; */
    letter-spacing: 0.01em;
    color: #FFFFFF;
`



export default function BarItem() {
    return (
        <BarItemContainer>
            <ItemText>{'Item'}</ItemText>
        </BarItemContainer>
    )
}