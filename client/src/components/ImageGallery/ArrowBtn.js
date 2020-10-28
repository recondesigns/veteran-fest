import React from "react";
import styled from "styled-components";
import leftArrow from "../../assets/icons/slideshow-previous.svg";
import rightArrow from "../../assets/icons/slideshow-next.svg";

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  height: 40px;
  margin-top: 20px;
`;

const PreviousBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #949494;
  box-sizing: border-box;
  border-radius: 2px;
  transform: rotate(-180deg);
`;

const NextBox = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #949494;
  box-sizing: border-box;
  border-radius: 2px;
  transform: rotate(-180deg);
`;

export default function ArrowBtn() {
  
    

  return (
    <RowContainer>
      <PreviousBox>
        <img src={leftArrow}  onClick={onClick}/>
      </PreviousBox>
      <NextBox>
        <img src={rightArrow} onClick={onClick}/>
      </NextBox>
    </RowContainer>
  );
}
