import React, { useContext } from "react";
import styled from "styled-components";
import { AppStateContext } from "../../providers/Store";
import { StatusMessage } from "../StatusMessage";
import { ProgressBar } from "../ProgressBar";
import { Card } from "../Card";
import { checkPropTypes } from "prop-types";

const VendorViewContainer = styled.div`
  /* border: 2px dashed purple; */
`;

const ContentWrapper = styled.div`
  margin: 32px 0px 0px 0px;
  width: 600px;
  height: 1200px;
  padding: 0px 16px 0px 16px;
  //   border: 1px solid lightblue;
`;

const BodyText = styled.p`
  margin: 0px 0px 26px 0px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #000000;
`;

const CardContainer = styled.div`
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 600px;
`;

export default function VendorView(props) {
  const [appState] = useContext(AppStateContext);
  const { userDetails } = appState.currentUser;
  const { formProgressStep } = userDetails;

  return (
    <VendorViewContainer>
      <ProgressBar step={formProgressStep} />
      <StatusMessage
        status={"success"}
        message={"You have created an account."}
      />

      <ContentWrapper>
        <BodyText>Please complete the following:</BodyText>
        <CardContainer>
          <Card
            cardTitle={"Point of Contact"}
            cardText={
              "A brief, and concise description of this category that needs to be filled out."
            }
          />
          <Card
            cardTitle={"Vendor details"}
            cardText={
              "A brief, and concise description of this category that needs to be filled out."
            }
          />
          <Card
            cardTitle={"Sponsorship Levels"}
            cardText={
              "A brief, and concise description of this category that needs to be filled out."
            }
          />
          <Card
            cardTitle={"Booth Selection"}
            cardText={
              "A brief, and concise description of this category that needs to be filled out."
            }
          />
        </CardContainer>
      </ContentWrapper>
    </VendorViewContainer>
  );
}
