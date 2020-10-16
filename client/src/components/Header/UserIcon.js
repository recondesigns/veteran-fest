import React from 'react'
import styled from 'styled-components'
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
    }

    @media (min-width: 679px) {
        display: flex;
    }
`

export default function UserIcon() {
    return (
        <IconContainer>
            <img src={avatar} alt={'My Account'} />
        </IconContainer>
    )
}