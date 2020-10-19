import React from 'react'
import styled from 'styled-components'
import poweredIcon from '../../assets/icons/powered-icon.svg'

const PoweredDisplayContainer = styled.div`
    width: 64px;
    height: 20px;
    display: flex;
    /* border: 1px dashed purple; */

    & > img {
        margin: 0px 8px 0px 0px;
        width: 20px;
        height: 20px;
        /* border: 1px dotted lightblue; */
    }

    & > p {
        margin: 0px 0px 0px 8px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.01em;
        color: #403926;
        /* border: 1px dotted orange; */
    }
`

export default function PoweredDisplay() {
    return (
        <PoweredDisplayContainer>
            <img src={poweredIcon} alt={'Booth power display.'} />
            <p>Yes</p>
        </PoweredDisplayContainer>
    )
}