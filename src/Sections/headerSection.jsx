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
  const Content = "A creator who treats every project like a new arc-learning, leveling up, and crafting solutions that actually matter. Whether it's AI, web apps, or tricky problems, I enjoy pushing my limits and building things that feel powerful and alive.";

  return (
    <>
      <Header
        logo={LOGO}
        resume={resumeURL}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        logodark={LOGODARK}
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
