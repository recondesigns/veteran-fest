import React, { useContext } from "react";
import styled from "styled-components";
import { AppStateContext } from '../../providers/Store'
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
  const [appState] = useContext(AppStateContext)
  const { userLoggedIn } = appState

  function closeIconDisplay() {
    if (userLoggedIn === false) {
      return <div></div>
    } else if (userLoggedIn === true) {
      return <Close />
    }
  }

  function userAvatarDisplay() {
    if (userLoggedIn === false) {
      return <div></div>
    } else if (userLoggedIn === true) {
      return <UserIcon />
    }
  }

  let closeIcon = closeIconDisplay()
  let avatarIcon = userAvatarDisplay()

  return (
    <HeaderContainer>
      {closeIcon}
      <img src={newHeaderLogo}  alt={'O.P. Veterans'} />
      {avatarIcon}
    </HeaderContainer>
  );
}
