// import React, { useState } from "react";
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
// import { Button, IconButton, Menu, MenuItem } from "@mui/material";
// import { StyledAnchor } from "../../StyledComponents/styledComponents";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
// import { MotionConfig, motion } from "framer-motion";
// import "./header.scss";
// import { darkbgcolor, fullbgcolor } from "../../theme";

// const Header = ({ logo, resume, toggleTheme, isDarkMode, logodark }) => {
  
//   const [anchorEl, setAnchorEl] = useState(null); 
//   const [menuOpen, setMenuOpen] = useState(false); 


//   const handleMenuClick = (e) => {
//     setAnchorEl(e.currentTarget); 
//     setMenuOpen(false); 
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const toggleMobileMenu = () => {
//     setMenuOpen(!menuOpen); 
//     setAnchorEl(null); 
//   };

//   const menuItems = [
//     "Services",
//     "Portfolios",
//     "Experience",
//     // "Blog",
//     "Testimonial",
//     "Eduskills",
//     "Contact",
//   ];

//   return (
//     <div
//       className="navbar"
//       style={{
//         backgroundColor: isDarkMode ? darkbgcolor : fullbgcolor,
//         opacity: 0.9,
//       }}
//     >


//       {/* Logo Section */}
//       <div className="navbar-logo" >
//         <StyledAnchor href="#hero">
//           <img src={isDarkMode ? logodark : logo} className="IMG" style={{height:"auto",width:"250px"}} alt="Logo" />
//         </StyledAnchor>
//       </div>

//       {/* Desktop Menu */}
//       <div className="navbar-menu desktop-menu">
//         {menuItems.slice(0, 4).map((item, index) => (
//           <StyledAnchor key={index} href={`#${item}`} >
//             {item}
//           </StyledAnchor>
//         ))}
//         <IconButton onClick={handleMenuClick} title="Menu" >
//           <StyledAnchor>
//             <MoreHorizOutlinedIcon />
//           </StyledAnchor>
//         </IconButton>

//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleMenuClose}
//           slotProps={{
//             paper: {
//               elevation: 0,
//               sx: {
//                 overflow: "visible",
//                 filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//                 mt: 1.5,
//                 "&::before": {
//                   content: '""',
//                   display: "block",
//                   position: "absolute",
//                   top: 0,
//                   left: 10,
//                   transform: "translateY(-50%) rotate(45deg)",
//                   width: 10,
//                   height: 10,
//                   bgcolor: "background.paper",
//                   zIndex: 0,
//                 },
//               },
//             },
//           }}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "left",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "left",
//           }}
//         >
//           {menuItems.slice(4).map((item, index) => (
//             <MenuItem key={index + 4} onClick={handleMenuClose}>
//               <StyledAnchor href={`#${item}`}>{item}</StyledAnchor>
//             </MenuItem>
//           ))}
//         </Menu>
//       </div>

//       {/* Theme Toggle and Resume Button */}
//       <div className="navbar-buttons" >
//         <IconButton onClick={toggleTheme}>
//           <StyledAnchor>
//             {isDarkMode ? <LightModeOutlinedIcon /> : <ModeNightOutlinedIcon />}
//           </StyledAnchor>
//         </IconButton>
//         <StyledAnchor href={resume} target="_blank">
//           <Button
//             variant="outlined"
//             sx={{ borderColor: "#F1F1F1" }}
//             color="inherit"
//           >
//             Resume
//           </Button>
//         </StyledAnchor>
//       </div>

//       {/* Hamburger Menu */}
//       <div className="navbar-hamburger">
//         <MotionConfig
//           transition={{
//             duration: 0.5,
//             ease: "easeInOut",
//           }}
//         >
//           <motion.button
//             initial={false}
//             animate={menuOpen ? "open" : "closed"}
//             onClick={toggleMobileMenu}
//             className="hamburger-btn"
//           >
//             <motion.span variants={VARIANTS.top} className="hamburger-line" style={{background:isDarkMode ? "white" : "black"}} />
//             <motion.span variants={VARIANTS.middle} className="hamburger-line" style={{background:isDarkMode ? "white" : "black"}}/>
//             <motion.span variants={VARIANTS.bottom} className="hamburger-line" style={{background:isDarkMode ? "white" : "black"}}/>
//           </motion.button>
//         </MotionConfig>

//         <Menu
//           anchorEl={anchorEl}
//           open={menuOpen}
//           onClose={handleMenuClose}
//           slotProps={{
//             paper: {
//               elevation: 0,
//               sx: {
//                 overflow: "visible",
//                 filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//                 mt: 1.5,
//                 "&::before": {
//                   content: '""',
//                   display: "block",
//                   position: "absolute",
//                   top: 0,
//                   left: 10,
//                   transform: "translateY(-50%) rotate(45deg)",
//                   width: 10,
//                   height: 10,
//                   bgcolor: "background.paper",
//                   zIndex: 0,
//                 },
//               },
//             },
//           }}
//           anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           sx={{
//             "& .MuiPaper-root": {
//               borderRadius: "8px",
//               marginTop: "60px",
//             },
//           }}
//         >
//           {menuItems.map((item, index) => (
//             <MenuItem key={index} onClick={handleMenuClose}>
//               <StyledAnchor href={`#${item}`} onClick={toggleMobileMenu}>
//                 {item}
//               </StyledAnchor>
//             </MenuItem>
//           ))}
//         </Menu>
//       </div>
//     </div>
//   );
// };

// const VARIANTS = {
//   top: {
//     open: { rotate: 45, translateY: 8 },
//     closed: { rotate: 0, translateY: 0 },
//   },
//   middle: {
//     open: { opacity: 0 },
//     closed: { opacity: 1 },
//   },
//   bottom: {
//     open: { rotate: -45, translateY: -8 },
//     closed: { rotate: 0, translateY: 0 },
//   },
// };

// export default Header;


import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { StyledAnchor } from "../../StyledComponents/styledComponents";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import { MotionConfig, motion } from "framer-motion";
import "./header.scss";
import { darkbgcolor, fullbgcolor } from "../../theme";

const Header = ({ logo, resume, toggleTheme, isDarkMode, logodark }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    setAnchorEl(null);
  };

  const menuItems = [
    "Services",
    "Portfolios",
    "Experience",
    // "Blog",
    "Testimonial",
    "Eduskills",
    "Contact",
  ];

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: isDarkMode ? darkbgcolor : fullbgcolor,
        opacity: 0.9,
      }}
    >
      {/* Logo Section */}
      <div className="navbar-logo">
        <StyledAnchor href="#hero">
          <img
            src={isDarkMode ? logodark : logo}
            className="IMG"
            // style={{ height: "auto", width: "250px" }}
            alt="Logo"
          />
        </StyledAnchor>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-menu desktop-menu">
        {menuItems.slice(0, 4).map((item, index) => (
          <StyledAnchor key={index} href={`#${item}`}>
            {item}
          </StyledAnchor>
        ))}
        <IconButton onClick={handleMenuClick} title="Menu">
          <StyledAnchor>
            <MoreHorizOutlinedIcon />
          </StyledAnchor>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 10,
                  transform: "translateY(-50%) rotate(45deg)",
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  zIndex: 0,
                },
              },
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {menuItems.slice(4).map((item, index) => (
            <MenuItem key={index + 4} onClick={handleMenuClose}>
              <StyledAnchor href={`#${item}`}>{item}</StyledAnchor>
            </MenuItem>
          ))}
        </Menu>
      </div>

      {/* Theme Toggle and Resume Button */}
      <div className="navbar-buttons">
        <IconButton onClick={toggleTheme}>
          <StyledAnchor>
            {isDarkMode ? <LightModeOutlinedIcon /> : <ModeNightOutlinedIcon />}
          </StyledAnchor>
        </IconButton>
        <StyledAnchor href={resume} target="_blank">
          <Button variant="outlined" sx={{ borderColor: "#F1F1F1" }} color="inherit">
            Resume
          </Button>
        </StyledAnchor>
      </div>

      {/* Hamburger Menu */}
      <div className="navbar-hamburger">
        <MotionConfig
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.button
            initial={false}
            animate={menuOpen ? "open" : "closed"}
            onClick={toggleMobileMenu}
            className="hamburger-btn"
          >
            <motion.span variants={VARIANTS.top} className="hamburger-line" style={{ background: isDarkMode ? "white" : "black" }} />
            <motion.span variants={VARIANTS.middle} className="hamburger-line" style={{ background: isDarkMode ? "white" : "black" }} />
            <motion.span variants={VARIANTS.bottom} className="hamburger-line" style={{ background: isDarkMode ? "white" : "black" }} />
          </motion.button>
        </MotionConfig>

        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 10,
                  transform: "translateY(-50%) rotate(45deg)",
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  zIndex: 0,
                },
              },
            },
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "8px",
              marginTop: "60px",
            },
          }}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              <StyledAnchor href={`#${item}`} onClick={toggleMobileMenu}>
                {item}
              </StyledAnchor>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

const VARIANTS = {
  top: {
    open: { rotate: 45, translateY: 8 },
    closed: { rotate: 0, translateY: 0 },
  },
  middle: {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  },
  bottom: {
    open: { rotate: -45, translateY: -8 },
    closed: { rotate: 0, translateY: 0 },
  },
};

export default Header;