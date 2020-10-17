import React from "react";
import styled from "styled-components";
import CheckMarkIcon from "./CheckMarkIcon";

const CardContainer = styled.div`
  box-sizing: border-box;
  background: #eaeaea;
  width: 344px;
  height: 128px;
  border-radius: 2px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 4px 5px rgba(0, 0, 0, 0.2);
`;

const CardTitle = styled.h5`
  box-sizing: border-box;
  width: 88px;
  height: 24px;
  margin: 10px 10px 10px 10px;
  padding-top: 4px;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.015em;
  color: #3a4f44;
`;

const CardText = styled.p`
  box-sizing: border-box;
  width: 311px;
  height: 32px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  margin: 0 0 0 10px;
  padding: 10px 0 0 0;
  color: #000000;
`;

const ButtonText = styled.h6`
  display: flex;
  justify-content: flex-end;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 30px 8px 5px 8px;
  color: #799c8a;
`;

export default function Card() {
  return (
    <CardContainer>
      <CardTitle>{"Card Title"}</CardTitle>
      <CheckMarkIcon />
      <CardText>{"Card Text"}</CardText>
      <ButtonText>{"Update"}</ButtonText>
    </CardContainer>
  );
}
