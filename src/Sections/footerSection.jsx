import React from "react";
import Contact from "../Components/Contact/contact.jsx";
import Footer from "../Components/Footer/footer.jsx";
const footerSection = ({
  firstName,
  secondName,
  Address,
  phone,
  Email,
  Insta,
  GitHub,
  X,
  linkedIn,
  toggleTheme,
  isDarkMode,
}) => {
  return (
    <>
      <Contact
        Address={Address}
        phone={phone}
        Email={Email}
        isDarkMode={isDarkMode}
      />
      <Footer
        Insta={Insta}
        GitHub={GitHub}
        X={X}
        linkedIn={linkedIn}
        isDarkMode={isDarkMode}
        firstName={firstName}
        secondName={secondName}
      />
    </>
  );
};

export default footerSection;
