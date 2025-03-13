import React, { useState, useRef, useEffect } from "react";
import {
  bgcolor,
  darkbgcolor,
  halfdarkbgcolor,
  fullbgcolor,
  fontColor,
  logobgcolor,
  secondaryColor,
} from "../../theme";
import styled from "@emotion/styled";
import "./portfolio.scss";
import {
  StyledHead,
  StyledBox,
  StyledAnchor,
} from "../../StyledComponents/styledComponents";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LinkIcon from "@mui/icons-material/Link";

export const StyledBoxPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  justify-content: space-between;
  width: 361px;
  gap: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1024px) {
    width: 52%;
    gap: 20px;    
  }

  @media screen and (max-width: 768px) {
    width: min-content;
    gap: 16px;
    align-items:center
    
  }

  @media screen and (max-width: 480px) {
    width: min-content;
    gap: 12px;
    align-items:center
  }
`;

export const StyledBoxPortfolioImage = styled.div`
  height: 265px;
  width: 360px;
  border-radius: 8px 8px 0px 0px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.hover ? "1" : "0.5")};
  filter: ${(props) => (props.hover ? "none" : "blur(1.5px)")};
  transition: ${(props) => (props.hover ? "1s" : "none")};

  /* @media screen and (max-width: 1024px) {
    height: 230px;
    width: 320px;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 180px;
  } */
`;


export const StylingTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
  text-align: left;
  padding-left: 20px;

`;

const StylingTitleBelow = styled.div`
  display: flex;
  flex-direction: row;
  width: 140px;
  gap: 18px;
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 14px;


`;

const StyledIconButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.active ? secondaryColor : logobgcolor)};
  width: 46px;
  height: 46px;
  border-radius: 16px;

`;


const Portfolio = ({
  portfolioHeading,
  subportfolioHeading,
  isDarkMode,
  PortfolioSector,
}) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [hover, setHover] = useState(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const scrollContainerRef = useRef(null);

  const StylingTitleBelowText = styled.div`
    color: ${isDarkMode ? fullbgcolor : fontColor};
    padding: 4px 8px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${isDarkMode ? darkbgcolor : fullbgcolor};
    border: 1px solid rgba(0, 0, 0, 0.1);
  `;

  const forward = () => {
    setCurrIndex((prev) => (prev + 1) % PortfolioSector.length);
    if (currIndex < PortfolioSector.length - 3) {
      setIsAtStart(false);
    }
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 417,
        behavior: "smooth",
      });
    }
  };

  const previous = () => {
    setCurrIndex(
      (prev) => (prev - 1 + PortfolioSector.length) % PortfolioSector.length
    );
    if (currIndex > 0) {
      setIsAtEnd(false);
    }
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -417,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setIsAtStart(currIndex === 0);
    setIsAtEnd(currIndex >= PortfolioSector.length - 3);
  }, [currIndex, PortfolioSector.length]);

  return (
    <div
      id="Portfolios"
      style={{ backgroundColor: isDarkMode ? darkbgcolor : fullbgcolor }}
    >
      <div className="head" >
        <div data-aos="fade-right" data-aos-duration="1500"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <StyledHead value={portfolioHeading} subvalue={subportfolioHeading} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "30px",
          }}
          data-aos="fade-left"  data-aos-duration="1500"
        >
          <StyledIconButton onClick={previous} active={!isAtStart}>
            <NavigateBeforeIcon style={{ color: isDarkMode && darkbgcolor }} />
          </StyledIconButton>
          <StyledIconButton onClick={forward} active={!isAtEnd}>
            <NavigateNextIcon style={{ color: isDarkMode && darkbgcolor }} />
          </StyledIconButton>
        </div>
      </div>
      <div className="foot">
        <StyledBox height={390} gap={56} ref={scrollContainerRef}>
          {PortfolioSector.map((item, index) => (
            <StyledBoxPortfolio data-aos="zoom-in-up"  data-aos-duration="1000"
              key={index}
              style={{ background: isDarkMode ? halfdarkbgcolor : bgcolor }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            >
              <StyledBoxPortfolioImage
                image={item.image}
                hover={hover === index}
              />
              <StylingTitle>{item.title}</StylingTitle>
              <StylingTitleBelow>
                <StylingTitleBelowText>{item.domain}</StylingTitleBelowText>
                <StyledAnchor href={`${item.link}`}>
                  <LinkIcon />
                </StyledAnchor>
              </StylingTitleBelow>
            </StyledBoxPortfolio>
          ))}
        </StyledBox>
      </div>
    </div>
  );
};

export default Portfolio;
