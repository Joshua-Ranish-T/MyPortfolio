import React, { useState, useEffect } from "react";
import {
  StyledHead,
  StyledText,
  StyledSocialLinks,
} from "../../StyledComponents/styledComponents";
import "./hero.scss";
import { secondaryColor } from "../../theme";
import { TypeAnimation } from "react-type-animation";

const Hero = ({
  fName,
  sName,
  photo,
  heading,
  Content,
  Insta,
  GitHub,
  X,
  linkedIn,
  isDarkMode,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const borderColor = isDarkMode ? "#fff" : "#000";

  // Listen to window resize events
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Only run once on mount

  // Conditional rendering based on screen width
  const isMobileOrTablet = windowWidth <= 768;

  return (
    <div id="hero">
      <div
        className="hero-content"
        data-aos="fade-up-right"
        data-aos-duration="2000"
      >
        <StyledHead style={{ fontSize: "12px" }} value={heading} />

        <h1 className="textG">
          {fName}{" "}
          <TypeAnimation
            sequence={[sName, 2000, "", 1000]}
            wrapper="span"
            cursor
            speed={50}
            repeat={Infinity}
            style={{ color: secondaryColor }}
          />
        </h1>
        <h3 style={{margin:"0" , color:secondaryColor }}>
          Web 
        <TypeAnimation
          sequence={["  Developer !!", 2000, "", 1000]}
          wrapper="span"
          cursor
          speed={20}
          repeat={Infinity}
          style={{ color: isDarkMode ? "#fff" : "#000" }}
        />
        </h3>
        {/* <StyledHead style={{ fontSize: "10px" }} value={"Web Developer"} /> */}
        <div className="diver">
          <StyledText size={16}>{Content}</StyledText>
        </div>
        <StyledSocialLinks
          Insta={Insta}
          GitHub={GitHub}
          X={X}
          linkedIn={linkedIn}
        />
      </div>

      {!isMobileOrTablet && (
        <div
          className="hero-image"
          data-aos="fade-up-left"
          data-aos-duration="2000"
          style={{ "--border-color": borderColor }}
        >
          <div className="ring">
            <i style={{ "--clr": "#0B6285" }}></i>
            <i style={{ "--clr": secondaryColor }}></i>
            <i style={{ "--clr": "#87CEEB" }}></i>
            <img src={photo} alt="Profile" className="profile-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
