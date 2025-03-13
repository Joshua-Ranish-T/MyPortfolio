import React from "react";
import {
  bgcolor,
  darkbgcolor,
  halfdarkbgcolor,
  fullbgcolor,
  fontColor,
} from "../../theme";
import styled from "@emotion/styled";
import "./blog.scss";
import {
  StyledHead,
  StyledBox,
  StyledAnchor,
} from "../../StyledComponents/styledComponents";
import {
  StyledBoxPortfolio,
  StyledBoxPortfolioImage,
  StylingTitle,
} from "../Portfolio/portfolio";
import { StylingDescription } from "../Service/service";

const Blog = ({ blogHeading, subblogHeading, isDarkMode, blogSector }) => {

  const StylingTitleBelowText = styled.div`
    color: ${isDarkMode ? fullbgcolor : fontColor};
    padding: 4px 8px;
    //height: fit-content;
    width: fit-content;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${isDarkMode ? darkbgcolor : fullbgcolor};
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-left:20px;
  `;

  return (
    <div id="Blog">
      <div className="top" data-aos="zoom-out-up" 
     data-aos-duration="1500">
        <StyledHead value={blogHeading} subvalue={subblogHeading} />
      </div>
      <div className="bottom"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
        <StyledBox height={450} gap={40} mobileDirection={"column"}>
          {blogSector.map((item, index) => (
            <StyledBoxPortfolio
              key={index}
              style={{ background: isDarkMode ? halfdarkbgcolor : bgcolor }}
            >
              <StyledBoxPortfolioImage
                style={{ opacity: 1, filter: "none" }}
                image={item.image}
              />
              <StylingTitle>{item.heading}</StylingTitle>
              <StylingTitleBelowText>{item.date}</StylingTitleBelowText>
              <StylingDescription
                style={{
                  paddingLeft: "20px",
                  width:"100%",
                  color: isDarkMode ? "white" : fontColor,
                }}
              >
                {item.content}
              </StylingDescription>
              <StyledAnchor
                href="#"
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  marginBottom:"10px" 
                }}
              >
                Continue Reading..
              </StyledAnchor>
            </StyledBoxPortfolio>
          ))}
        </StyledBox>
      </div>
    </div>
  );
};

export default Blog;
