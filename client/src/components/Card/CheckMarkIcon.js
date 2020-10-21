import React from "react";
import styled from "styled-components";
import checkMark from "../../assets/icons/checkmark-complete.svg";

const CheckMarkContainer = styled.div`
  // border: solid 1px yellow;
  // top: 16px;
  //  right: 16px;
  height: 13.4px;
  margin-right: 16px;
`;

export default function CheckMarkStatus(props) {
  const { isComplete } = props;

  function checkMarkComplete(status) {
    if (status === true) {
      return <img src={checkMark} alt={"Complete"} />;
    } else {
      return <div></div>;
    }
  }
  let icon = checkMarkComplete(isComplete);
  
  return (
    <CheckMarkContainer>
      {icon}
    </CheckMarkContainer>
  );
}
