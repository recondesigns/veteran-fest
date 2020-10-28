import React from 'react'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'
import MainImage from './MainImage'


const ImageGalleryContainer = styled.div`
    box-sizing: border-box;
    width: 856px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid lightcoral; */
`

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: lightpink; */
`

const ThumbnailWrapper = styled.div`
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    width: 352px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* border: 1px dashed red; */
`

export default function ImageGallery() {

    function testClick() {
        console.log('fired')
    }

    return (
        <ImageGalleryContainer>
            <Wrapper>
                <ThumbnailWrapper>
                    {/* {gallery} */}
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                    <Thumbnail status={'active'} onClick={testClick} />
                </ThumbnailWrapper>
            </Wrapper>
            <MainImage />  
        </ImageGalleryContainer>
    )
}