import React, { useState } from "react";
import {
  bgcolor,
  darkbgcolor,
  halfdarkbgcolor,
  fullbgcolor,
  fontColor,
  secondaryColor,
} from "../../theme";
import styled from "@emotion/styled";
import {
  StyledHead,
  StyledAnchor,
  StyledExperienceData,
} from "../../StyledComponents/styledComponents";
import "./experience.scss";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const StyledExperienceDomain = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-family: Inter;
`;

const StyledExperienceLink = styled.span`
  font-size: 18px;
  font-weight: 600;
  font-family: Inter;
  text-decoration: underline solid ${fontColor};
`;

// const StyledExperienceData = styled.div`
//   font-size: ${(props) => props.size}px;
//   font-weight: ${(props) => props.weight};
//   color: ${(props) => props.color};
// `;

const StylingTitleBelowTextcontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: flex-start;
  gap: 15px;
`;

const StylingTitleBelowText = styled.div`
  color: ${(props) => (props.isDarkMode ? fullbgcolor : fontColor)};
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isDarkMode ? darkbgcolor : fullbgcolor};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Experience = ({
  experienceHeading,
  subexperienceHeading,
  isDarkMode,
  WorkExperience,
}) => {
  const [checkIndex, setCheckIndex] = useState(0);

  return (
    <div
      id="Experience"
      style={{ background: isDarkMode ? halfdarkbgcolor : bgcolor }}
    >
      <div className="left">
        <div
          className="left-top"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <StyledHead
            value={experienceHeading}
            subvalue={subexperienceHeading}
          />
        </div>
        <div
          className="left-bottom"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <Paper
            sx={{
              width: 320,
              maxWidth: "100%",
              height: 235,
              background: isDarkMode ? halfdarkbgcolor : bgcolor,
              overflowY: "auto",
              boxShadow: "none !important",
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: secondaryColor,
                borderRadius: "10px",
              },
            }}
          >
            <MenuList className="MenuList">
              {WorkExperience.map((item, index) => (
                <StyledAnchor key={index}>
                  <MenuItem
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingY: 1.5,
                      paddingX: 2,
                    }}
                    onClick={() => setCheckIndex(index)}
                  >
                    <ListItemText primary={item.company} tabIndex={0} />
                    <KeyboardDoubleArrowRightIcon />
                  </MenuItem>
                </StyledAnchor>
              ))}
            </MenuList>
          </Paper>
        </div>
      </div>

      <div className="right" data-aos="zoom-out-right" data-aos-duration="1300">
        {WorkExperience.filter((_, index) => index === checkIndex).map(
          (item, index) => (
            <React.Fragment key={index}>
              <StyledExperienceDomain>
                {item.domain} ,{" "}
                <StyledExperienceLink>
                  <StyledAnchor href={`${item.link}`} target="_blank">
                    {item.company}
                  </StyledAnchor>
                </StyledExperienceLink>
              </StyledExperienceDomain>

              <StyledExperienceData
                size={14}
                weight={400}
                color={isDarkMode ? "white" : fontColor}
              >
                {item.location}
              </StyledExperienceData>
              <StyledExperienceData
                size={14}
                weight={500}
                color={isDarkMode ? "white" : fontColor}
              >
                {item.starttime} - {item.endtime} ({item.workperiod})
              </StyledExperienceData>

              <StylingTitleBelowTextcontainer>
                {item.language.map((lan, val) => (
                  <StylingTitleBelowText key={val} isDarkMode={isDarkMode}>
                    {lan}
                  </StylingTitleBelowText>
                ))}
              </StylingTitleBelowTextcontainer>

              <hr
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  overflow: "hidden",
                }}
              />

              {item.feedback.map((feed, ind) => (
                <StyledExperienceData
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={ind}
                  size={16}
                  weight={400}
                  color={isDarkMode ? "white" : fontColor}
                >
                  - {feed}
                </StyledExperienceData>
              ))}
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
