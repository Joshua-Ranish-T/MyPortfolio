import React, { useRef } from "react";
import "./contact.scss";
import {
  bgcolor,
  darkbgcolor,
  halfdarkbgcolor,
  secondaryColor,
  fullbgcolor,
  fontColor,
} from "../../theme";
import {
  StylingIcon,
  StyledExperienceData,
} from "../../StyledComponents/styledComponents";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ Address, phone, Email, isDarkMode }) => {

  const nameRef = useRef(null)
  const mailRef = useRef(null)
  const messageRef = useRef(null)

  const contactDetails = [
    {
      icon: <LocationOnIcon sx={{ color: secondaryColor }} />,
      title: "Address",
      value: Address,
    },
    {
      icon: <PhoneInTalkIcon sx={{ color: secondaryColor }}/>,
      title: "Phone",
      value: phone,
    },
    {
      icon: <EmailIcon sx={{ color: secondaryColor }}/>,
      title: "E-mail",
      value: Email,
    },
  ];

    const handleSubmit = async (event) => {
      event.preventDefault();
      const name = nameRef.current.value;
      const email = mailRef.current.value;
      const message = messageRef.current.value;
    
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
    
        if (response.ok) {
          toast.success("Message sent successfully!");
          nameRef.current.value = "";
          mailRef.current.value = "";
          messageRef.current.value = "";
        } else {
          toast.error("Failed to send message. Try again later.");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Something went wrong.");
      }
    };
    
  
  return (
    <div
      id="Contact"
      style={{ backgroundColor: isDarkMode ? halfdarkbgcolor : bgcolor }}
    >
      <div className="left" >
        <form
          onSubmit={handleSubmit}
        >
          <Box
            sx={{
              width: 600,
              maxWidth: "100%",
              mb: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", 
              alignItems: "center", 
              flexWrap: "wrap",
              margin: "0 auto", 
            }}
          >
            <TextField
              fullWidth
              label="Your Name"
              id="name"
              variant="outlined"
              style={{ background: isDarkMode ? darkbgcolor : fullbgcolor }}
              inputRef={nameRef}
              data-aos="fade-right"
              data-aos-duration="1000"
            />
            <TextField
              fullWidth
              label="Your Email"
              id="email"
              type="email"
              variant="outlined"
              required
              inputRef={mailRef}
              sx={{ mt: 2, background: isDarkMode ? darkbgcolor : fullbgcolor }}
              data-aos="fade-right"
              data-aos-duration="1000"
            />
          </Box>

          <Box
            sx={{
              py: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
              
            }}
            
          >
            <TextField
            data-aos="fade-right"
            data-aos-duration="1000"
              fullWidth
              label="Your Message"
              id="message"
              required
              variant="outlined"
              inputRef={messageRef}
              multiline
              minRows={5}
              sx={{
                width: 600,
                maxWidth: "100%",
                background: isDarkMode ? darkbgcolor : fullbgcolor,
                "& .MuiOutlinedInput-root": {
                  fontSize: "16px",
                  padding: "10px",
                },
              }}
            />
            <Button
            data-aos="fade-right"
            data-aos-duration="1000"
              type="submit"
              color="white"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                width: 600,
                maxWidth: "100%",
                mb: 3,
                background: secondaryColor,
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </div>

      <div className="right">
        {contactDetails.map((detail, index) => (
          <div className="path" key={index} data-aos="zoom-in-left" data-aos-duration="1000">
            <StylingIcon >{detail.icon }</StylingIcon>
            <div className="pather">
              <StyledExperienceData size={16} weight={550}>
                {detail.title}
              </StyledExperienceData>
              <StyledExperienceData
                size={14}
                weight={500}
                color={isDarkMode ? "white" : fontColor}
              >
                {detail.value}
              </StyledExperienceData>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer /> 
    </div>
  );
};

export default Contact;
