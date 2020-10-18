import React from 'react'
import styled from 'styled-components'

// IMPORT COMPONENTS HERE

import { StatusMessage } from '../StatusMessage'
import { Header } from '../Header'
import { Input } from '../Input'
import { EditSheet } from '../EditSheet'
import { Button } from '../Button'
import { ProgressBar } from '../ProgressBar'
import { ImageGallery } from '../ImageGallery'

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
        /* text-decoration: underline; */
        /* border: 1px solid dodgerblue; */
    }
`

const ComponentWrapper = styled.div`
    box-sizing: border-box;
    width: 312px;
    border: 1px dotted green;

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
        console.log('ERIK FLORES')
    }

    return (
        <PlaygroundContainer>
            <h1>Comoponent Playground</h1>

            {/* ********** STATUS MESSAGE COMPONENT */}
            <h2>Status Message</h2>
            <h4>Props</h4>

            <h3>'message'</h3>
            <p>Sets the message to render to the user.</p>
            <h4>'message': prop values</h4>
            <p>none</p>

            <h3>'status'</h3>
            <p>Sets the status of the component by altering the border color, font color, and icon image and color.</p>
            <h4>'status': prop values</h4>
            
            <p>'success'</p>
            <StatusMessage status={'success'} message={`This is your status messsage.`} />

            <p>'warning'</p>
            <StatusMessage status={'warning'} message={`This is your status messsage.`} />

            <p>'error'</p>
            <StatusMessage status={'error'} message={`This is your status messsage.`} />
            {/* ********** END STATUS MESSAGE COMPONENT */}

            {/* ********** HEADER COMPONENT */}
            <h2>Header</h2>
            <h4>Props</h4>
            <h3>none</h3>
            <p>none</p>
            <h4>Prop values</h4>
            <p>default</p>
            <Header />
            {/* ********** END HEADER COMPONENT */}

            {/* ********** INPUT COMPONENT */}
            <h2>Input</h2>
            <h4>Props</h4>

            <h3>'label'</h3>
            <p>Sets the input label.</p>
            <h4>'label': prop values</h4>
            <p>none</p>

            <h3>'status'</h3>
            <p>Sets the input component status by altering text and container styles.</p>
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
            {/* ********** END INPUT COMPONENT */}
            
            {/* ********** SHEET COMPONENT */}
            <h2>Edit Sheet</h2>
            <h4>Props</h4>
            <p>none</p>
            <p>none</p>
            <h4>Prop values</h4>
            <p>default</p>
            <EditSheet />
            {/* ********** END INPUT COMPONENT */}

            {/* ********** BUTTON COMPONENT */}
            <h2>Button</h2>
            <h4>Props</h4>

            <h3>'onClick'</h3>
            <p>Function that is passed through props that will fire when button is clicked.</p>

            <h3>'buttonStyle'</h3>
            <p>Sets which button to render.</p>
            <h4>'buttonStyle': prop values</h4>

            <p>'primary'</p>
            <Button onClick={onClick} buttonStyle={'primary'}>Sign up</Button>

            <p>'secondary'</p>
            <Button onClick={onClick} buttonStyle={'secondary'}>Sign up</Button>

            <p>'google-button'</p>
            <Button onClick={onClick} buttonStyle={'google-button'}>Sign up</Button>
            {/* ********** END BUTTON COMPONENT */}

            {/* ********** PROGRESSBAR COMPONENT */}
            <h2>ProgressBar</h2>
            <h4>Props</h4>

            <h3>'step'</h3>
            <p>Set the current step for the progress bar.</p>

            <h4>'step': prop values</h4>
            <p>1</p>
            <ProgressBar step={1} />
            <p>2</p>
            <ProgressBar step={2} />
            <p>3</p>
            <ProgressBar step={3} />
            {/* ********** END PROGRESSBAR COMPONENT */}

            {/* IMAGE GALLERY COMPONENT */}
            <h2>Image Gallery</h2>
            <h4>Props</h4>
            <ImageGallery />
            {/* END OF COPY FOR EACH NEW COMPONENT */}


        </PlaygroundContainer>
    )
}