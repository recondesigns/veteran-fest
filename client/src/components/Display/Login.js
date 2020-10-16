import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../providers/Store'
import { dummyUserAccounts } from '../../test-users'
import { Input } from '../Input'
import { Button } from '../Button'

const LoginContainer = styled.div`
    /* width: 100%; */
    height: 100%;
    display: flex;
    /* border: 1px solid purple; */
`

const LeftPane = styled.div`
    box-sizing: border-box;
    width: 520px;
    height: 100%;
    padding: 0px 32px 0px 32px;
    display: flex;
    flex-direction: column;
    /* border: 1px dotted blue; */

    & > p {
        margin: 120px 0px 0px 0px;
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
        margin: 8px 0px 0px 0px;
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
    display: flex;
    flex-direction: column;
    background: lightblue;
    opacity: 0.5;

    & > h3 {
        margin: 0px;
    }
`

export default function Login() {
    const [appState] = useContext(AppStateContext)
    const [loginState, setLoginState] = useState({ email: '', password: ''})
    const { email, password } = loginState

    // console.log(dummyUserAccounts)

    function getEmail(e) {
        const { value } = e.target
        setLoginState({ email: value, password: password })
    }

    function getPassword(e) {
        const { value } = e.target
        setLoginState({ email: email, password: value })
    }

    function checkForUser() {
        dummyUserAccounts.forEach(user => {
            const { userEmail } = user.userDetails
            console.log(userEmail)
        })
    }

    function createAccount() {
        checkForUser()
        // console.log(loginState)
    }

    return (
        <LoginContainer>
            <LeftPane>
                <p>Register with OP Veteran</p>
                <h3>Create an account</h3>
                <Input status={'default'} label={'Email'} marginTop={'64px'} onBlur={getEmail} />
                <Input status={'default'} label={'Password'} marginTop={'20px'} onBlur={getPassword} />
                <Button buttonStyle={'primary'} marginTop={'56px'} onClick={createAccount}>Sign Up</Button>
                <Button buttonStyle={'google-button'} marginTop={'32px'}>Sign Up</Button>
            </LeftPane>
            <RightPane>
                <h3>Right Pane</h3>
            </RightPane>
        </LoginContainer>
    )
}