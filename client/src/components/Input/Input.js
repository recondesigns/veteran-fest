import React from 'react'
import styled from 'styled-components'
import WarningIcon from './WarningIcon'

const InputContainer = styled.div`
    width: 312px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 8px 8px 8px;
    border-radius: 4px;
    border: 1px solid blue;
`

const LabelText = styled.p`
    margin: 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #545454;
    border: 1px solid orange;

`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px dotted red;
`

const StyledInput = styled.input`
    width: 100%;
    /* background: lightblue; */
`

const HelperText = styled.p`
    margin: 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #EA7C7C;
    border: 1px solid green;

`

export default function Input(props) {
    const { status, label } = props
    console.log(status, label)

    return (
        <InputContainer>
            <LabelText>{label}</LabelText>
            <Wrapper>
                <StyledInput />
                <WarningIcon status={status} />
            </Wrapper>
            <HelperText>Helper Text</HelperText>
        </InputContainer>
    )
}