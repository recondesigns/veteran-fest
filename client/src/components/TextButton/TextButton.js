import React from "react";
import styled from "styled-components";

const TextButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SignInButton = styled.p`
  background: none;
  box-shadow: none;
  margin-left: 8px;
  width: 53px;
  height: 24px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #5cc8ff;
`;

export default function TextButton(props) {
  const { onClick } = props;

  return (
    <TextButtonContainer>
      <p>{"Already have an account?"}</p>
      <SignInButton onClick={onClick}>{"Sign in"}</SignInButton>
    </TextButtonContainer>
  );
}
