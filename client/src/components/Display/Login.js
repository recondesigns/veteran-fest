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
    display: none;
    flex-direction: column;
    background: lightblue;
    opacity: 0.5;

    & > h3 {
        margin: 0px;
    }

    @media (min-width: 768px) {
        display: flex;
    }
`

export default function Login() {
    const [,setAppState] = useContext(AppStateContext)
    const [loginState, setLoginState] = useState({ email: '', password: ''})
    const { email, password } = loginState

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
            const { userEmail, userPassword, firstName, lastName, userPhone, isAdmin, formProgressStep } = user.userDetails
            const { vendorName, vendorDescription, vendorAddress, vendorAptSuite, vendorCity, vendorState, vendorZipcode, veteranOwned, nonProfitVendor, sponsorshipLevel } = user.vendorDetails
            const {isRegistrationComplete, isPaymentComplete, booth } = user.eventDetails
            const { email, password } = loginState

            if (email === userEmail && password === userPassword) {
                setAppState({
                    userLoggedIn: true,
                    isLoading: false,
                    currentUser: {
                        userDetails: {
                        firstName: firstName,
                        lastName: lastName,
                        userPhone: userPhone,
                        userEmail: userEmail,
                        isAdmin: isAdmin,
                        formProgressStep: formProgressStep
                        },
                        vendorDetails: {
                            vendorName: vendorName,
                            vendorDescription: vendorDescription,
                            vendorAddress: vendorAddress,
                            vendorAptSuite: vendorAptSuite,
                            vendorCity: vendorCity,
                            vendorState: vendorState,
                            vendorZipcode: vendorZipcode,
                            veteranOwned: veteranOwned,
                            nonProfitVendor: nonProfitVendor,
                            sponsorshipLevel: sponsorshipLevel
                        },
                        eventDetails: {
                            registrationComplete: isRegistrationComplete,
                            paymentComplete: isPaymentComplete,
                            booth: {
                                boothNumber: booth.boothNumber,
                                powered: booth.powered
                            }
                        }
                    }
                })
            } else {
                // create account on db
                // have currentUser in appState updated with user details saved on db
                // take user to dashboard (probably will just come from props or state change)
                // console.log(`Either no account, or wrong password.`)
            }
        })
    }

    function createAccount() {
        checkForUser()
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