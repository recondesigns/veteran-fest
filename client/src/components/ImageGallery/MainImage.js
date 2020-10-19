import React from 'react'
import styled from 'styled-components'
import vetfest1Thumbnail from '../../assets/images/vetfest01-500px.jpg'

const MainImageContainer = styled.div`
    width: 472px;
    /* border: 1px dotted dodgerblue; */

    & > img {
        width: 100%;
        /* height: 472px; */
    }
`

export default function MainImage() {
    return (
        <MainImageContainer>
            <img src={vetfest1Thumbnail} alt={'thumbnail'} />
        </MainImageContainer>
    )
}