import React from "react";
import styled from "styled-components";
import UserIcon from "./UserIcon";
import Close from './Close'
import newHeaderLogo from "../../assets/images/vetfest-logo.png";

const HeaderContainer = styled.div`
box-sizing: border-box;
  background: #FFFFFF;
  margin: none;
  padding: 10px 16px 10px 16px;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    height: 40px;
  }


  @media (min-width: 768px) {
    min-height: 72px;
  }
`;


// const LogoContainer = styled.div`
//   min-height: 64px;
//   width: 100%;
//   background-image: url(${newHeaderLogo});
//   background-repeat: no-repeat;
// `;

export default function Header() {
 
  return (
    <HeaderContainer>
      <Close />
      <img src={newHeaderLogo}  alt={'O.P. Veterans'} />
      <UserIcon />
    </HeaderContainer>
  );
}
