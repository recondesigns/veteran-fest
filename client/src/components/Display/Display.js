import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../providers/Store'
import Login from './Login'
import AdminView from './AdminView'
import VendorView from './VendorView'

const DisplayContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 2px dotted hotpink;
`

export default function Display() {
    const [appState] = useContext(AppStateContext)
    const { userLoggedIn,  currentUser} = appState
    const { userDetails } = currentUser
    const { isAdmin } = userDetails
    console.log(isAdmin)
    

    function setDisplay(loggedInStatus) {
        if (loggedInStatus === false) {
            return <Login />
        } else if (loggedInStatus === true && isAdmin === true) {
            return <AdminView />
        } else if (loggedInStatus === true && isAdmin === false) {
            return <VendorView />
        }  
    }

    let display = setDisplay(userLoggedIn)

    return (
        <DisplayContainer>
            <p>Display Component</p>
            {display}
        </DisplayContainer>
    )
}