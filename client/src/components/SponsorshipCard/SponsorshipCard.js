import React from "react";
import styled from "styled-components";
import { Button } from '../Button'
import  Dropdown from './Dropdown'
import abrams from "../../assets/logos/abrams-sponsor-logo.png";


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0px 0px;
  position: absolute;
  width: 344px;
  height: 455px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const Price = styled.div`
  position: static;
  width: 312px;
  height: 32px;
  left: 16px;
  top: 190px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #545454;
  margin: 24px 16px 16px 16px;
`;

const SponsorText = styled.div`
  width: 232px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #545454;
`;


export default function SponsorshipCard() {
  return (
    <Card>
      <img src={abrams} alt={"Abrams logo"} />
      <Price>{"$99,999"}</Price>
      <SponsorText>{"Other Abrams Level sponsors"}</SponsorText>
      <Button buttonText={'Select This Level'} buttonStyle={'primary'} marginTop={'24px'}></Button> 
      <Dropdown />
    </Card>
  );
}
