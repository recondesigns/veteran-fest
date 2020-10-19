import React from 'react'
import styled from 'styled-components'

const SaveButtonContainer = styled.button`
    min-width: 64px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #6B7346;
    border: 2px solid #F4B860;
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2);

    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #F4B860;
`

export default function SaveButton(props) {
    const { buttonText } = props
    return (
        <SaveButtonContainer>
            {buttonText}
        </SaveButtonContainer>
    )
}