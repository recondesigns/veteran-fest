import React from "react";
import styled from "styled-components";
import closeIcon from "../../assets/icons/Vector.svg";

const CloseContainer = styled.div`
  margin: 0px 0px 0px 16px;
  height: 24px;
  display: flex;
`;

const ExitIcon = styled.div`
  margin: 0px 8px 0px 0px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  & > img {
    width: 16px;
    height: 16px;
  }
`;

export default function Close() {
  return (
<CloseContainer>
    <ExitIcon>
        <img src={closeIcon} alt={'Exit'} />
    </ExitIcon>
</CloseContainer>
  )
}
