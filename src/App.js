import React, { useState, useEffect } from "react";
import HEADER from "./Sections/headerSection.jsx";
import BODY from "./Sections/bodySection.jsx";
import FOOTER from "./Sections/footerSection.jsx";
import personImage from "./Assets/person.png";
import Resume from "./Assets/Joshua-Ranish-T-Resume.pdf"

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { fullbgcolor, darkbgcolor } from "./theme.js";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Cursor position for the dot
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 }); // Delayed position for the ring
  const [isClicked, setIsClicked] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      background: {
        default: isDarkMode ? darkbgcolor : fullbgcolor,
      },
      secondary: {
        main: "#7E74F1", 
      },
    },
  });

  const userDetails = {
    firstName: "Joshua",
    secondName: "Ranish T",
    photo: personImage,
    Resume: Resume, 
    Insta: "https://www.instagram.com/joshua._.ranish",
    GitHub: "https://github.com/Joshua-Ranish-T",
    X: "",
    linkedIn: "https://www.linkedin.com/in/joshua-ranish-t-1065822b9/",
    Address: "2,12 D st paul's road, palayamkottai, Tirunelveli",
    phone: "+91 8220002104",
    Email: "joshuaranish@gmail.com",
  };

  // Update cursor position for the dot
  useEffect(() => {
    const handlePointerMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  // Smooth trailing effect for the ring using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;

    const smoothFollow = () => {
      setDelayedPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2, // Smooth easing
        y: prev.y + (position.y - prev.y) * 0.2, // Smooth easing
      }));
      animationFrameId = requestAnimationFrame(smoothFollow);
    };

    animationFrameId = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500); 
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Custom Cursor */}
      {/* Dot - No delay */}
      <div
        style={{
          position: "fixed",
          left: position.x - 5, // Center the dot
          top: position.y - 5, // Center the dot
          width: 10, // Dot size
          height: 10, // Dot size
          backgroundColor: theme.palette.secondary.main, // Dot color
          borderRadius: "50%", // Circle shape
          pointerEvents: "none", // Allow interactions through the cursor
          zIndex: 9999,
        }}
      />
      {/* Ring - Smooth follow */}
      <div
        style={{
          position: "fixed",
          left: delayedPosition.x - 24, // Center the ring
          top: delayedPosition.y - 24, // Center the ring
          width: 48,
          height: 48,
          border: isClicked
            ? "none"
            : `1px solid ${theme.palette.secondary.main}`, // Ring color
          borderRadius: "50%", // Circle shape
          pointerEvents: "none", 
          zIndex: 9998, // Ensure the ring is behind the dot
        }}
      />
      {/* Main Components */}
      <HEADER 
        {...userDetails}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      <BODY toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <FOOTER
        {...userDetails}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
    </ThemeProvider>
  );
};

export default App;
