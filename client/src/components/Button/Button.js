import React from "react";
import styled from "styled-components";

import { setButtonStyle } from "./utils";
import googleIcon from "../../assets/icons/google-icon.svg";

const StyledButton = styled.button`
  border-sizing: border-box;
  width: 312px;
  height: 40px;
  background: ${props => props.background};
  border: ${props => props.border};
  box-shadow: ${props => props.boxShadow};
  border-radius: 4px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.01em;
  color: ${props => props.color};

  &:hover {
    box-shadow: 0px 8px 10px rgba(97, 133, 114, 0.14),
      0px 3px 14px rgba(97, 133, 114, 0.12), 0px 4px 5px rgba(97, 133, 114, 0.2);
    border-radius: 4px;
  }
`;

const GoogleContainer = styled.div`
  margin-left: 3px;
  display: ${props => props.display};

  & > p {
    margin-right: 8px;
  }
`;

export default function Button(props) {
  const { buttonStyle, onClick } = props;
  const { color, background, border, display, boxShadow } = setButtonStyle(
    buttonStyle
  );

  return (
    <StyledButton
      background={background}
      color={color}
      border={border}
      boxShadow={boxShadow}
      onClick={onClick}
    >
      <p>{"Sign up"}</p>
      <GoogleContainer display={display}>
        <p>with</p>
        <img src={googleIcon} alt={"Sign in using Google"} />
      </GoogleContainer>
    </StyledButton>
  );
}
