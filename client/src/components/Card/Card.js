import React from "react";
import styled from "styled-components";
import CheckMarkIcon from "./CheckMarkIcon";

const CardContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  box-sizing: border-box;
  background: #eaeaea;
  width: 344px;
  height: 128px;
  border-radius: 2px;
  position: relative;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 4px 5px rgba(0, 0, 0, 0.2);
`;

const CardTitle = styled.h5`
  border: dotted green;
  width: 100%;
  height: 24px;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.015em;
  color: #3a4f44;
  margin: 0px;
  
`;

const CardText = styled.p`
  border: dotted red;

  box-sizing: border-box;
  height: 32px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #000000;
  margin: 0px;
`;

const ButtonText = styled.h6`
  border: dotted blue;
  // display: flex;
  // justify-content: flex-end;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #799c8a;
  margin: 0px;
`;

export default function Card() {
  return (
    <CardContainer>
      <CardTitle>{"Card Title"}</CardTitle>
      <CheckMarkIcon isComplete={true} />
      <CardText>{"Card Text"}</CardText>
      <ButtonText>{"Update"}</ButtonText>
    </CardContainer>
  );
}
