import React from "react";
import {
  StyledHead,
  StylingIcon,
} from "../../StyledComponents/styledComponents";
import {
  bgcolor,
  darkbgcolor,
  halfdarkbgcolor,
  fullbgcolor,
} from "../../theme";
import {
  StyledBox,
  StyledBoxInside,
} from "../../StyledComponents/styledComponents";
import styled from "@emotion/styled";
import "./service.scss";

const StylingTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
  text-align: center;
`;

export const StylingDescription = styled.div`
  font-size: 15px;
  font-weight: 400;
  width: 250px;

  @media screen and (max-width: 1024px) {
    width: fit-content;
  }
  @media screen and (max-width: 768px) {
    width: fit-content;
  }
  @media screen and (max-width: 480px) {
    width: fit-content;
  }
`;

const Service = ({
  subServiceHeading,
  serviceHeading,
  isDarkMode,
  ServiceSector,
}) => {
  return (
    <div
      id="Services"
      style={{ backgroundColor: isDarkMode ? halfdarkbgcolor : bgcolor }}
    >
      <div className="head" data-aos="zoom-in-up" data-aos-duration="1500">
        <StyledHead value={serviceHeading} subvalue={subServiceHeading} />
      </div>
      <div className="foot">
        <StyledBox
          className="footee"
          height={294}
          gap={56}
          mobileDirection={"column"}
          data-aos="zoom-out-down"
          data-aos-duration="1500"
        >
          {ServiceSector.map((item, index) => (
            <StyledBoxInside
              key={index}
              height={294}
              bgcolor={isDarkMode ? darkbgcolor : fullbgcolor}
              gap={5}
            >
              <StylingIcon>{item.icon}</StylingIcon>
              <StylingTitle>{item.title}</StylingTitle>
              <StylingDescription>{item.description}</StylingDescription>
            </StyledBoxInside>
          ))}
        </StyledBox>
      </div>
    </div>
  );
};

export default Service;
