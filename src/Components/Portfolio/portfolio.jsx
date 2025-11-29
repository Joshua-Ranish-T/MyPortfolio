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
  border-radius: 20px;
  justify-content: space-between;
  width: 380px;
  min-width: 380px;
  flex-shrink: 0;
  gap: 0;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15);
    border-color: rgba(0, 0, 0, 0.12);
  }

  @media screen and (max-width: 1440px) {
    width: 360px;
    min-width: 360px;
  }

  @media screen and (max-width: 1024px) {
    width: 340px;
    min-width: 340px;
  }

  @media screen and (max-width: 768px) {
    width: 320px;
    min-width: 320px;
  }
  
  @media screen and (max-width: 480px) {
    width: 300px;
    min-width: 300px;
  }
`;

export const StyledBoxPortfolioImage = styled.div`
  height: 240px;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 20px 20px 0 0;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) => (props.hover ? "scale(1.08)" : "scale(1)")};
  
  /* Enhanced fade overlay inspired by Apple */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${(props) => (props.hover ? 0 : 1)};
  }
  
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;


export const StylingTitle = styled.div`
  font-size: 19px;
  font-weight: 600;
  text-align: left;
  padding: 20px 24px 8px 24px;
  letter-spacing: -0.3px;
  line-height: 1.3;
`;

const StylingTitleBelow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 24px 24px;
  width: 100%;
`;

const StyledIconButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.active ? secondaryColor : "transparent")};
  border: 1px solid ${(props) => (props.active ? "transparent" : "rgba(0,0,0,0.1)")};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: ${(props) => (props.active ? secondaryColor : "rgba(0,0,0,0.05)")};
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;




const Portfolio = ({
  portfolioHeading,
  subportfolioHeading,
  isDarkMode,
  PortfolioSector,
}) => {
  const [hover, setHover] = useState(null);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const StylingTitleBelowText = styled.div`
    color: ${(props) => (props.hover ? "#fff" : isDarkMode ? "#fff" : fontColor)};
    padding: 6px 12px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 20px;
    background-color: ${(props) =>
      props.hover
        ? secondaryColor
        : isDarkMode
          ? "rgba(255,255,255,0.1)"
          : "rgba(0,0,0,0.05)"};
    border: 1px solid
      ${(props) =>
      isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    transition: all 0.3s ease;
  `;

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
      }
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [PortfolioSector]);



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
          data-aos="fade-left" data-aos-duration="1500"
        >
          <StyledIconButton onClick={scrollLeft} active={canScrollLeft}>
            <NavigateBeforeIcon style={{ color: isDarkMode && darkbgcolor }} />
          </StyledIconButton>
          <StyledIconButton onClick={scrollRight} active={canScrollRight}>
            <NavigateNextIcon style={{ color: isDarkMode && darkbgcolor }} />
          </StyledIconButton>
        </div>
      </div>
      <div className="foot">
        <StyledBox gap={32} ref={scrollContainerRef}>
          {PortfolioSector.map((item, index) => (
            <StyledBoxPortfolio data-aos="zoom-in-up" data-aos-duration="1000"
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
                <StylingTitleBelowText hover={hover === index}>
                  {item.domain}
                </StylingTitleBelowText>
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
