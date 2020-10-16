import React from 'react'
import styled from 'styled-components'

// IMPORT COMPONENTS HERE

import { StatusMessage } from '../StatusMessage'
import { Header } from '../Header'
import { Input } from '../Input'
import { EditSheet } from '../EditSheet'
import { Button } from '../Button'
import {Card } from '../Card'

// STYLING FOR PLAYGROUND COMPONENTS - DO NOT EDIT

const PlaygroundContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    /* height: 100%; */
    padding: 16px 16px 40px 16px;
    border: 4px solid green;

    & > h1 {
        margin: 0px 0px 0px 0px;
        font-size: 48px;
        font-family: Open Sans;
        font-weight: 800;
        /* border: 1px solid lightcoral; */
    }
`

const ComponentWrapper = styled.div`
    box-sizing: border-box;
    width: 312px;
    border: 1px dotted lightcyan;

    & > h2 {
        margin: 64px 0px 16px 0px;
        font-size: 32px;
        font-family: Open Sans;
        font-weight: 700;
        /* border: 1px solid lightcoral; */
    }

    & > h3 {
        margin: 16px 0px 8px 0px;
        font-size: 16px;
        font-family: Open Sans;
        font-weight: 400;
        /* border: 1px solid dodgerblue; */
    }

    & > h4 {
        margin: 16px 0px 8px 0px;
        font-size: 20px;
        font-family: Open Sans;
        font-weight: 600;
        text-decoration: underline;
        /* border: 1px solid dodgerblue; */
    }

    @media (min-width: 768px) {
        width: 100%;
    }
`

export default function Playground() {
    function onClick() {

    }

    return (
        <PlaygroundContainer>
            <h1>Comoponent Playground</h1>

            {/* COPY THIS BLOCK FOR EACH NEW COMPONENT - BE SURE TO DISPLAY EACH STATE BY USING PROPS */}
            {/* STATUS MESSAGE COMPONENT */}
            <h2>Status Message</h2>
            <h4>Props</h4>

            <h3>'Success'</h3>
            <StatusMessage status={'success'} message={`This is your status messsage.`} />

            <h3>'Warning'</h3>
            <StatusMessage status={'warning'} message={`This is your status messsage.`} />

            <h3>'Error'</h3>
            <StatusMessage status={'error'} message={`This is your status messsage.`} />
            {/* END OF COPY FOR EACH NEW COMPONENT */}



            {/* COPY THIS BLOCK FOR EACH NEW COMPONENT - BE SURE TO DISPLAY EACH STATE BY USING PROPS */}
            {/* HEADER COMPONENT */}
            <h2>Header</h2>
            <h4>Props</h4>

            <h3>'Component does not require props.'</h3>
            <Header />
            {/* END OF COPY FOR EACH NEW COMPONENT */}



            

            {/* COPY THIS BLOCK FOR EACH NEW COMPONENT - BE SURE TO DISPLAY EACH STATE BY USING PROPS */}
            {/* INPUT COMPONENT */}
            <h2>Input</h2>
            <h4>Props</h4>

            <ComponentWrapper>
                <h3>'normal'</h3>
                <Input status={'default'} label={'Label'} />

                <h3>'active'</h3>
                <Input status={'active'} label={'Label'} />

                <h3>'warning'</h3>
                <Input status={'warning'} label={'Label'} />

                <h3>'disabled'</h3>
                 <Input status={'disabled'} label={'Label'} />
            </ComponentWrapper>
            {/* END OF COPY FOR EACH NEW COMPONENT */}





            

            {/* COPY THIS BLOCK FOR EACH NEW COMPONENT - BE SURE TO DISPLAY EACH STATE BY USING PROPS */}
            {/* EDIT SHEET COMPONENT */}
            <h2>Edit Sheet</h2>
            <h4>Props</h4>

            {/* <ComponentWrapper> */}
                {/* <h3>'normal'</h3> */}
                <EditSheet />
            {/* </ComponentWrapper> */}
            {/* END OF COPY FOR EACH NEW COMPONENT */}



            {/* COPY THIS BLOCK FOR EACH NEW COMPONENT - BE SURE TO DISPLAY EACH STATE BY USING PROPS */}
            {/* EDIT SHEET COMPONENT */}
            <h2>Button</h2>
            <h4>Props</h4>
            <Button onClick={onClick} buttonStyle={'text-button'}>Sign up</Button>


            {/* COPY THIS BLOCK FOR EACH NEW COMPONENT - BE SURE TO DISPLAY EACH STATE BY USING PROPS */}
            {/* EDIT SHEET COMPONENT */}

            <h2>Card</h2>
            <h4>Props</h4>
            <Card />

        </PlaygroundContainer>
    )
}