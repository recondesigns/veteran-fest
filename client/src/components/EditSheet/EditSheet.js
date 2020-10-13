import React from 'react'
import styled from 'styled-components'
import { Input } from '../Input'

const EditSheetContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 552px;
    padding: 64px 32px 0px 32px;
    /* width: 375px; */
    /* height: 552px; */
    background: #FFFFFF;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px;
    /* border: 1px solid lightgoldenrodyellow; */

    @media (min-width: 768px) {
        max-width: 600px;
    }
`

const SheetHeader = styled.h5`
box-sizing: border-box;
margin: 0px;
width: 100%;
height: 24px;
position: absolute;
top: 0;
left: 0;
font-family: Open Sans;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
display: flex;
justify-content: center;
align-items: center;
color: #545454;
background: #DAD3C1;
`

const TempButton = styled.div`
    box-sizing: border-box;
    width: 400px;
    height: 40px;
    background: lightblue;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px dotted pink; */

    & > div {
        margin-bottom: 20px;
    }
`

export default function EditSheet() {
    return (
        <EditSheetContainer>
            <SheetHeader>{`Make Edits`}</SheetHeader>
            <Wrapper>
                <Input status={'default'} label={'First name'} />
                <Input status={'default'} label={'Last name'} />
                <Input status={'default'} label={'Email'} />
                <Input status={'default'} label={'Phone'} />
                <TempButton>Button Placeholder</TempButton>
                <TempButton>Button Placeholder</TempButton>
            </Wrapper>
        </EditSheetContainer>
    )
}