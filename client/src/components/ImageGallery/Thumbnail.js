import React from 'react'
import styled from 'styled-components'
import { setThumbnail } from './utils'
import vetfest1Thumbnail from '../../assets/images/vetfest01-100px.jpg'

const ThumbnailContainer = styled.div`
    margin: 24px 8px 0px 8px;
    width: 64px;
    height: 80px;
    /* border: 1px dotted lightblue; */

    & > img {
        width: 64px;
        opacity: ${props => props.opacity};
        /* height: 100px; */
    }
`

const ActiveBar = styled.div`
    margin: 0px 0px 12px 0px;
    min-height: 4px;
    background: ${props => props.background};
`

export default function Thumbnail(props) {
    const { status, onClick } = props
    const { background, opacity } = setThumbnail(status)
    
    return (
        <ThumbnailContainer opacity={opacity} onClick={onClick}>
            <ActiveBar background={background} />
            <img src={vetfest1Thumbnail} alt={'thumbnail'} />
        </ThumbnailContainer>
    )
}