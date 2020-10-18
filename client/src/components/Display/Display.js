import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../providers/Store'
import { setDisplay } from './utils'
import Login from './Login'
import AdminView from './AdminView'
import VendorView from './VendorView'

// import { Playground } from '../Playground'

const DisplayContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    /* border: 2px dotted hotpink; */
`

export default function Display() {
    const [appState] = useContext(AppStateContext)
    const { userLoggedIn,  currentUser} = appState
    const { userDetails } = currentUser
    const { isAdmin } = userDetails

    let display = setDisplay(userLoggedIn, isAdmin, <Login />, <AdminView />, <VendorView />)

    return (
        <DisplayContainer>
            {display}
            {/* <Playground /> */}
        </DisplayContainer>
    )
}