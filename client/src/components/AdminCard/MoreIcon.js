import React, { useState } from 'react'
import styled from 'styled-components'
import moreClosedIcon from '../../assets/icons/more-closed-icon.svg'
import moreOpenIcon from '../../assets/icons/more-open-icon.svg'

const MoreIconContainer = styled.div`
    width: 24px;
    height: 24px;
    border: 1px dotted blue;
`

export default function MoreIcon() {
    const [isIconOpen, setIsIconOpen] = useState(false)

    function setIcon(status) {
        if (status === false) {
            return <img src={moreClosedIcon} alt={'Click to see more options.'} />
        } else if (status === true) {
            return <img src={moreOpenIcon} alt={'Click to see less options'} />
        }
    }

    let iconToDisplay = setIcon(isIconOpen)

    return (
        <MoreIconContainer>
            {iconToDisplay}
        </MoreIconContainer>
    )
}