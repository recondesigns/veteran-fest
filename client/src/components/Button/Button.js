import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-sizing: border-box;
  width: 312px;
  height: 40px;
  background: #618572;
  border: none;
  box-shadow: 0px 2px 4px rgba(97, 133, 114, 0.14),
    0px 3px 4px rgba(97, 133, 114, 0.12), 0px 1px 5px rgba(97, 133, 114, 0.2);
  border-radius: 4px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.01em;
  &:hover {
    box-shadow: 0px 8px 10px rgba(97, 133, 114, 0.14),
      0px 3px 14px rgba(97, 133, 114, 0.12), 0px 4px 5px rgba(97, 133, 114, 0.2);
    border-radius: 4px;
  }
`;

export default function Button() {

  return <StyledButton>{'Sign up'}  </StyledButton>;
}