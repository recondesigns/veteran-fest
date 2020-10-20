import React from "react";
import styled from "styled-components";
import checkMark from "../../assets/icons/checkmark-complete.svg";

const CheckMarkContainer = styled.div`
  border: dotted yellow;
  // position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  justify-content: flex-end;
  height: 13.4px;
  margin-left: 320px;
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
  console.log(icon);
  return (
    <CheckMarkContainer>
      {icon}
      {/* <img src={checkMark} /> */}
    </CheckMarkContainer>
  );
}
