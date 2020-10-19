import React from "react";
import styled from "styled-components";
import checkMark from "../../assets/icons/checkmark-complete.svg";
import { setDisplayCheck } from "./utils";

const CheckMarkContainer = styled.div`
  margin: 0 10px 0 0;
  max-width: 10px;
  max-height:10px;
  width: 17.6px;
  height: 13.4px;
`;

export default function CheckMarkStatus(props) {
const { status } = props


  return (
      <CheckMarkContainer>
          <img src={checkMark} alt={'Complete'} />
      </CheckMarkContainer>
  )
}
