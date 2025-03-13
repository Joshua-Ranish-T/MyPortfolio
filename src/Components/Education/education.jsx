import React from "react";
import {
  bgcolor,
  darkbgcolor,
  fullbgcolor,
  fontColor,
  logobgcolor,
  secondaryColor,
} from "../../theme";
import styled from "@emotion/styled";
import {
  StyledHead,
  StyledExperienceData,
} from "../../StyledComponents/styledComponents";
import './education.scss';

const CustomProgress = styled.progress`
  width: 95%;
  height: 8px;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: ${props => props.bgcolor};
  }

  &::-webkit-progress-value {
    background-color: ${props => props.fillcolor};
  }

  &::-moz-progress-bar {
    background-color: ${props => props.fillcolor};
  }
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  max-height: 190px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.secondaryColor}; 
    border-radius: 10px;
  }
`;

const Education = ({
  eduskillsHeading,
  subeduskillsHeading,
  isDarkMode,
  eduskillsSector = [],
  skillcontent,
  skillscore = []
}) => {
  return (
    <div
      id="Eduskills"
      style={{ backgroundColor: isDarkMode ? darkbgcolor : fullbgcolor }}
    >
      <div className="top" data-aos="fade-right" data-aos-duration="1500">
        <StyledHead value={eduskillsHeading} subvalue={subeduskillsHeading} />
      </div>
      <div className="bottom">
        <div className="left" data-aos="fade-up" data-aos-duration="1000">
          <div className="line"></div>
          {eduskillsSector.map((item, index) => (
            <div key={index} className="something">
              <div className="circle"></div>
              <div  className="education-item">
              <StyledExperienceData size={16} weight={550}>
                {item.universityName}
              </StyledExperienceData>
              <StyledExperienceData
                size={14}
                weight={500}
                color={isDarkMode ? "white" : fontColor}
              >
                {item.degree} - {item.course}
              </StyledExperienceData>
              <StyledExperienceData
                size={16}
                weight={550}
                style={{ marginTop: "10px" }}
              >
                {item.year}
              </StyledExperienceData>
              </div>
            </div>
          ))}
        </div>
        <div className="right">
          <StyledExperienceData data-aos="fade-left" data-aos-duration="1000"
            size={16}
            weight={500}
            color={isDarkMode ? "white" : fontColor}
          >
            {skillcontent}
          </StyledExperienceData>

          <ScoreContainer theme={{ secondaryColor }} data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000">
            {skillscore.map((item, index) => (
              <div key={index} className="skill-item" >
                <StyledExperienceData size={14} weight={500}>
                  {item.skill}
                </StyledExperienceData>
                <CustomProgress value={item.percent} max={100} bgcolor={logobgcolor} fillcolor={secondaryColor} />
              </div>
            ))}
          </ScoreContainer>
        </div>
      </div>
    </div>
  );
};

export default Education;
