import React from 'react'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'

const ImageGalleryContainer = styled.div`
    border: 1px solid lightcoral;
`

export default function ImageGallery() {
    return (
        <ImageGalleryContainer>
            <Thumbnail status={'inactive'} />
            <Thumbnail status={'active'} />
        </ImageGalleryContainer>
    )
}