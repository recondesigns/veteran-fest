import React, { useState } from 'react'
import styled from 'styled-components'
import moreClosedIcon from '../../assets/icons/more-closed-icon.svg'
import moreOpenIcon from '../../assets/icons/more-open-icon.svg'

const MoreIconContainer = styled.div`
    width: 24px;
    height: 24px;
    /* border: 1px dotted blue; */
`

export default function MoreIcon() {
    const [isIconOpen, setIsIconOpen] = useState(false)

    function setIcon() {
        if (isIconOpen === false) {
            return <img src={moreClosedIcon} alt={'Click to see more options.'} />
        } else if (isIconOpen === true) {
            return <img src={moreOpenIcon} alt={'Click to see less options'} />
        }
    }

    function changeIcon() {
        if (isIconOpen === false) {
            setIsIconOpen(true)
        } else if (isIconOpen === true) {
            setIsIconOpen(false)
        }
    }

    let iconToDisplay = setIcon(isIconOpen)

    return (
        <MoreIconContainer onClick={changeIcon}>
            {iconToDisplay}
        </MoreIconContainer>
    )
}