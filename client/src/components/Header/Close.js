import React, { useContext } from "react";
import styled from "styled-components";
import { AppStateContext } from '../../providers/Store'
import closeIcon from "../../assets/icons/Vector.svg";

const CloseContainer = styled.div`
  height: 24px;
  display: flex;
`;

const ExitIcon = styled.div`
  margin: 0px 8px 0px 0px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  & > img {
    width: 16px;
    height: 16px;
  }
`;

export default function Close() {
  const [, setAppState] = useContext(AppStateContext)

  function logOut() {
    setAppState({
      userLoggedIn: false,
      isLoading: false,
      currentUser: {
          userDetails: {
          firstName: '',
          lastName: '',
          userPhone: '',
          userEmail: '',
          isAdmin: false
          },
          vendorDetails: {
              vendorName: '',
              vendorDescription: '',
              vendorAddress: '',
              vendorAptSuite: '',
              vendorCity: '',
              vendorState: '',
              vendorZipcode: '',
              veteranOwned: false,
              nonProfitVendor: false,
              sponsorshipLevel: ''
          },
          eventDetails: {
              registrationComplete: false,
              paymentComplete: false,
              booth: {
                  boothNumber: '',
                  powered: ''
              }
          }
      }
    })
  }
  return (
    <CloseContainer onClick={logOut}>
        <ExitIcon>
            <img src={closeIcon} alt={'Exit'} />
        </ExitIcon>
    </CloseContainer>
  )
}
