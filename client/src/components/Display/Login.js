import React from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { Button } from '../Button'

const LoginContainer = styled.div`
    /* width: 100%; */
    height: 100%;
    display: flex;
    border: 1px solid purple;
`

const LeftPane = styled.div`
    width: 520px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px dotted blue;

    & > p {
        margin: 0px;
        width: 100%;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: #545454;
    }

    & > h3 {
        margin: 0px;
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: 0.015em;
        color: #545454;
    }
`

const RightPane = styled.div`
    width: 100%;
    height: 100%;
    background: lightblue;
`


export default function Login() {
    return (
        <LoginContainer>
            <LeftPane>
                <p>Register with OP Veteran</p>
                <h3>Create an account</h3>
                <Input status={'default'} label={'Email'} />
                <Input status={'default'} label={'Password'} />
                <Button>Button</Button>
                <Button>Button</Button>
            </LeftPane>
            <RightPane>
                <Input status={'defaualt'} label={'Noooo'} />
            </RightPane>
        </LoginContainer>
    )
}