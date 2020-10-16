import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../providers/Store'
import avatar from '../../assets/icons/avatar-icon.svg'

const IconContainer = styled.div`
    margin: 0px 16px 0px 16px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    & > img {
        width: 65px;
        @media (min-width: 679px) {
            display: flex;
        }
`


export default function UserIcon() {
    const [, setAppState] = useContext(AppStateContext)

    function onClick() {
        setAppState({
            userLoggedIn: false,
            isLoading: false,
            currentUser: {
                userDetails: {
                firstName: '',
                lastName: '',
                userPhone: '',
                userEmail: '',
                isAdmin: false
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
                        powered: ''
                    }
                }
            }
        })
    }
    return (
        <IconContainer onClick={onClick}>
            <img src={avatar} alt={'My Account'} />
        </IconContainer>
    )
}