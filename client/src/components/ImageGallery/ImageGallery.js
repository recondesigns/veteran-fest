import React from 'react'
import styled from 'styled-components'

const ImageGalleryContainer = styled.div`
    border: 1px solid lightcoral;

    & > p {
        margin: 0px;
    }
`

export default function ImageGallery() {
    return (
        <ImageGalleryContainer>
            <p>Image Gallery</p>
        </ImageGalleryContainer>
    )
}