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


const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.secondaryColor}; 
    border-radius: 10px;
  }
`;


const StyledTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  font-family: Inter;
  color: ${fontColor};
`;

const StyledIconImage = styled.img`
  width: 50px;
  height: 50px;
`;

const IconRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 icons per row */
  gap: 20px;
  margin-top: 10px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 15px; /* Responsive for tablets */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px; /* Responsive for small screens */
  }
`;

const Education = ({
  eduskillsHeading,
  subeduskillsHeading,
  isDarkMode,
  eduskillsSector = [],
  skillscore = []
}) => {
  return (
    <section
      id="Eduskills"
      style={{ backgroundColor: isDarkMode ? darkbgcolor : fullbgcolor }}
    >
      {/* Header Section */}
      <div className="left" data-aos="fade-up" data-aos-duration="1000">
        <div className="top" data-aos="fade-right" data-aos-duration="1500">
          <StyledHead value={eduskillsHeading} subvalue={subeduskillsHeading} />
        </div>
        <div className="line"></div>

        {/* Education Items */}
        {eduskillsSector.map((edu, index) => (
          <div key={index} className="something">
            <div className="circle"></div>
            <div className="education-item">
              <StyledExperienceData size={16} weight={550}>
                {edu.universityName}
              </StyledExperienceData>
              <StyledExperienceData
                size={14}
                weight={500}
                color={isDarkMode ? "white" : fontColor}
              >
                {edu.degree} - {edu.course}
              </StyledExperienceData>
              <StyledExperienceData
                size={16}
                weight={550}
                style={{ marginTop: "10px" }}
              >
                {edu.year}
              </StyledExperienceData>
            </div>
          </div>
        ))}
      </div>

      {/* Skill Score Section */}
      <div className="right">
        <ScoreContainer theme={{ secondaryColor }} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
          {skillscore.map((skill, index) => (
            <div key={index} className="skill-item">
              <StyledTitle>{skill.Name}</StyledTitle>
              <IconRow>
                {skill.Logo.map((logoSrc, idx) => (
                  <StyledIconImage key={idx} src={logoSrc} alt={`${skill.Name} icon ${idx + 1}`} />
                ))}
              </IconRow>
            </div>
          ))}
        </ScoreContainer>
      </div>
    </section>
  );
};

export default Education;
