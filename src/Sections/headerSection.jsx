import React from "react";
import Header from "../Components/Header/header.jsx";
import Hero from "../Components/Hero/hero.jsx";
import LOGO from "../Assets/Vector.png";
import LOGODARK from '../Assets/Vectordark.png';

const headerSection = ({
  firstName,
  secondName,
  photo,
  Resume,
  Insta,
  GitHub,
  X,
  linkedIn,
  toggleTheme,
  isDarkMode,
}) => {
  const resumeURL = Resume ? Resume : "";

  const heroHeading = "MY NAME IS";
  const Content = "Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX";

  return (
    <>
      <Header 
        logo={LOGO} 
        resume={resumeURL} 
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        logodark = {LOGODARK}
      />
      <Hero 
        fName={firstName} 
        sName={secondName} 
        photo={photo} 
        heading={heroHeading} 
        Content={Content}
        Insta={Insta} 
        GitHub={GitHub} 
        X={X} 
        linkedIn={linkedIn}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

export default headerSection;
