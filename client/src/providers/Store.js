import React, { useState } from 'react'

export const AppStateContext = React.createContext()

export default function Store({ children }) {
    const [appState, setAppState] = useState({
        userLoggedIn: true,
        isLoading: false,
        currentUser: {
            userDetails: {
                firstName: '',
                lastName: '',
                userPhone: '',
                userEmail: '',
                isAdmin: true,
                formProgressStep: 1
            },
            vendorDetails: {
                vendorName: '',
                vendorDescription: '',
                vendorAddress: '',
                vendorAptSuite: '',
                vendorCity: '',
                vendorState: '',
                vendorZipcode: '',
                veteranOwned: false,
                nonProfitVendor: false,
                sponsorshipLevel: ''
            },
            eventDetails: {
                registrationComplete: false,
                paymentComplete: false,
                booth: {
                    boothNumber: '',
                    powered: false
                }
            }
        }
    })

    return (
        <AppStateContext.Provider value={[appState, setAppState]}>
            {children}
        </AppStateContext.Provider>
    )
}