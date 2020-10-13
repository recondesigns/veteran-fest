import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
    border: 2px dashed purple;
`

export default function Login() {
    return (
        <LoginContainer>
            <p>Login Component</p>
        </LoginContainer>
    )
}