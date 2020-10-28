import React from "react";
import styled from "styled-components";
import boothIcon from "../../assets/icons/booth.svg";
import openIcon from "../../assets/icons/open.svg";
import closeIcon from "../../assets/icons/close.svg";
import chargeIcon from "../../assets/icons/charge.svg";
import buntyLogo from "../../assets/logos/Company logo image.svg";

const CardContainer = styled.div`
  border: solid red 1px;
  display: flex;
  flex-direction: column;
  border-sizing: border-box;
  width: 312px;
  height: 152px;
  border-radius: 4px;
  background: #eaeaea;
  padding: 16px 0px 0px 8px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 4px 5px rgba(0, 0, 0, 0.2);
`;


const CompanyName = styled.h5`
    border: 1px solid blue;
    position: relative;
    width: 296px
    height: 24px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color:#545454;
    margin: 0;

`;
const NameContainer=styled.div`

`

const NameText = styled.h6`
  border: solid yellow 1px;
  width: 216px;
  height: 24px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  margin: 8px 0 0 0;
`;

const CategoryText = styled.p`
  border: 1px solid green;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #545454;
  margin: 0;
`;

const CompanyLogo = styled.div`
  width: 67.88px;
  height: 48px;
`;

const BoothNumberText = styled.div`
  border: 1px solid orange;
  margin: 0;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #403926;
`;

const PowerResultText = styled.div`
  margin: 0;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #403926;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0;
`;

export default function AdminCard() {
  return (
    <CardContainer>
      <CompanyName>{"Strickland Propane"}</CompanyName>
      
        <CompanyLogo>
          <img src={buntyLogo} />
        </CompanyLogo>
        <NameText>{"Hank Hill"}</NameText>
        <CategoryText>{"Propane & Propane Accessories"}</CategoryText>
    
      <IconContainer>
        <img src={boothIcon}></img>
        <BoothNumberText>{"A2"}</BoothNumberText>
        <img src={chargeIcon}></img>
        <PowerResultText>{"Yes"}</PowerResultText>
        <img src={closeIcon}></img>
        <img></img>
      </IconContainer>
    </CardContainer>
  );
}
