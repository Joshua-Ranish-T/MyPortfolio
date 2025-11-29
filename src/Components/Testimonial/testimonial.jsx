import React from "react";
import {
  bgcolor,
  darkbgcolor,
  halfdarkbgcolor,
  fullbgcolor,
  fontColor,
} from "../../theme";
import styled from "@emotion/styled";
import "./testimonial.scss";
import {
  StyledHead,
  StyledBox,
  StyledBoxInside,
} from "../../StyledComponents/styledComponents";
import {
  StylingTitle,
} from "../Portfolio/portfolio";

const StyledDomain = styled.div`
  font-size: 17px;
  font-weight: 400;
  font-family: Inter;
  padding-left: 20px;
  width: 90%;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: -48px; 
`;

const StyledImageRound = styled.img`
display: flex;
align-self:center;
flex-direction: row;
  border-radius: 50%;
  object-fit: cover;
  height: 96px;
  width: 96px;
`;

const Testimonial = ({
  testHeading,
  subtestHeading,
  isDarkMode,
  testSector,
}) => {
  const StylingTitleBelowText = styled.div`
    color: ${isDarkMode ? fullbgcolor : fontColor};
    padding: 4px 8px;
    width: fit-content;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${isDarkMode ? darkbgcolor : fullbgcolor};
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: 20px;
  `;




  const StyledBoxer = styled.div`
  display: flex;
  width: 1200px;
  height: ${(props) => props.height}px;
  flex-direction: row;
  justify-content: space-between;
  gap: ${(props) => props.gap}px;
  align-content: center;
  /* padding-left: 120px;
  padding-right: 120px; */
  flex-wrap: nowrap;
  overflow: auto;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    display: none;
  }


  @media screen and (max-width: 768px) {
    width: 105%; 
    flex-direction: ${(props) => props.mobileDirection || "row"};
    gap: 15px; 
    overflow: auto;
    height: auto; 
    padding: 10px;
    align-items:center
  
  }

  @media screen and (max-width: 480px) {
    width: 105%; 
    flex-direction: ${(props) => props.mobileDirection || "row"};  
    gap: 50px; 
    overflow:auto;
    height: auto;
    padding: 10px;
    align-items:center

  }


`;



  return (
    <div
      id="Testimonial"
      style={{ backgroundColor: isDarkMode ? halfdarkbgcolor : bgcolor }}
    >
      <div className="top" data-aos="fade-right" data-aos-duration="1500">
        <StyledHead value={testHeading} subvalue={subtestHeading} />
      </div>
      <div className="bot" data-aos="zoom-in-down" data-aos-duration="1500">
        <StyledBoxer height={300} gap={48} style={{ overflow: "initial" }} mobileDirection={"column"} >
          {testSector.map((item, index) => (


            <StyledBoxInside
              key={index}
              bgcolor={isDarkMode ? darkbgcolor : fullbgcolor}
              height={300}
              gap={5}
              style={{
                textAlign: "left",
                justifyContent: "space-around",
                alignItems: "flex-start",

              }}

            >
              <ImageContainer>
                <StyledImageRound src={item.Image} />
              </ImageContainer>
              <StyledDomain>{item.content}</StyledDomain>
              <StylingTitle>{item.name}</StylingTitle>
              <StylingTitleBelowText>{item.work}</StylingTitleBelowText>
            </StyledBoxInside>
          ))}
        </StyledBoxer>
      </div>
    </div>
  );
};

export default Testimonial;
