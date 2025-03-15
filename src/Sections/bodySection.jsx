import React from "react";
import Service from "../Components/Service/service.jsx";
import Portfolio from "../Components/Portfolio/portfolio.jsx";
import Experience from "../Components/Experience/experience.jsx";
import Blog from "../Components/Blog/blog.jsx";
import Testimonial from "../Components/Testimonial/testimonial.jsx";
import Education from "../Components/Education/education.jsx";
import LanguageIcon from "@mui/icons-material/Language";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import { secondaryColor } from "../theme.js";
import chatAppImage from "../Assets/ChatApp.png";
import Nexcent from "../Assets/Nexcent.png";
import VPN from "../Assets/VPN.png";
import PortfolioImage from "../Assets/portfolioImage.png";
import blog1 from "../Assets/blog1.png";
import blog2 from "../Assets/blog2.png";
import blog3 from "../Assets/blog3.png";
import test1 from "../Assets/test1.jpeg";
import test2 from "../Assets/test2.jpeg";
import test3 from "../Assets/test3.jpeg";

const bodySection = ({
  toggleTheme,
  isDarkMode,
}) => {
  // Services
  const serviceHeading = "Services";
  const subServiceHeading = "Specialized in";
  const ServiceSector = [
    {
      icon: (
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 15H17.5M1.5 1V12H17.5V1L13.5 5L9.5 1L5.5 5L1.5 1Z"
            stroke={secondaryColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually appealing user experiences that bring your digital product ideas to life. Designed for any platform you envision.",
    },
    {
      icon: <LayersOutlinedIcon sx={{ color: secondaryColor }} />,
      title: "AI Application Development",
      description:
        "Designing, building, and implementing intelligent applications with seamless functionality and comprehensive documentation for scalability and performance.",
    },
    {
      icon: <LanguageIcon sx={{ color: secondaryColor }} />,
      title: "Web Development",
      description:
        "Building and maintaining high-performance websites while ensuring optimal speed, scalability, and seamless user experience across all devices.",
    },
  ];

  // Portfolios
  const portfolioHeading = "MY WORKS";
  const subportfolioHeading = "Featured Portfolios";
  const PortfolioSector = [
    {
      title: "AI-Art Interpreter",
      domain: "Artificial Intelligence",
      image: chatAppImage,
      link: "",
    },
    {
      title: "VPN Implementation",
      domain: "Networking",
      image: VPN,
      link: "",
    },
    {
      title: "Web Application",
      domain: "React",
      image: Nexcent,
      link: "",
    },
    {
      title: "Portfolio",
      domain: "HTML",
      image: PortfolioImage,
      link: "",
    },
    {
      title: "VPN Implementation",
      domain: "Networking",
      image: VPN,
      link: "",
    },
    {
      title: "Web Application",
      domain: "React",
      image: Nexcent,
      link: "",
    },
    {
      title: "Portfolio",
      domain: "HTML",
      image: PortfolioImage,
      link: "",
    },
  ];

  //Experience
  const experienceHeading = "CAREER PATH";
  const subexperienceHeading = "Work Experience";
  const WorkExperience = [
    {
      company: "Apple",
      domain: "Front-end Developer",
      link: "",
      location: "California, United States",
      starttime: "Nov 2018",
      endtime: "Feb 2020",
      workperiod: "Full Time",
      language: ["Swift", "Go"],
      feedback: [
        "Improving overall website performance for mobile users.",
        "Collaborate with back-end developers and web designers to improve usability.",
        "Add voice search feature for mobile app.",
        "Developing an admin panel to manage contents, users, products, and other data.",
      ],
    },
    {
      company: "Microsoft",
      domain: "Software Engineer",
      link: "",
      location: "Redmond, Washington, United States",
      starttime: "Mar 2020",
      endtime: "Aug 2021",
      workperiod: "Full Time",
      language: ["C#", "JavaScript"],
      feedback: [
        "Developed cloud-based solutions to improve system scalability.",
        "Enhanced application performance by optimizing algorithms and reducing memory usage.",
        "Collaborated with cross-functional teams to design new product features.",
        "Implemented real-time analytics and reporting dashboard for data insights.",
      ],
    },
    {
      company: "Facebook",
      domain: "Full Stack Developer",
      link: "",
      location: "Menlo Park, California, United States",
      starttime: "Sep 2021",
      endtime: "Dec 2022",
      workperiod: "Full Time",
      language: ["React", "Node.js", "GraphQL"],
      feedback: [
        "Built and maintained responsive front-end applications for a high-traffic platform.",
        "Integrated GraphQL APIs for efficient data fetching across services.",
        "Led a team in implementing a new authentication system for enhanced security.",
        "Collaborated with designers to create a seamless user experience across mobile and web.",
      ],
    },

    {
      company: "JPMorgan",
      domain: "Backend Developer",
      link: "",
      location: "New York, United States",
      starttime: "Jan 2023",
      endtime: "Present",
      workperiod: "Full Time",
      language: ["Java", "Spring Boot", "SQL"],
      feedback: [
        "Developed REST APIs for financial transaction processing and reporting.",
        "Ensured data security and compliance with industry standards.",
        "Optimized SQL queries for improved data retrieval speed.",
        "Worked closely with the DevOps team to streamline deployment processes.",
      ],
    },
    {
      company: "Facebook",
      domain: "Full Stack Developer",
      link: "",
      location: "Menlo Park, California, United States",
      starttime: "Sep 2021",
      endtime: "Dec 2022",
      workperiod: "Full Time",
      language: ["React", "Node.js", "GraphQL"],
      feedback: [
        "Built and maintained responsive front-end applications for a high-traffic platform.",
        "Integrated GraphQL APIs for efficient data fetching across services.",
        "Led a team in implementing a new authentication system for enhanced security.",
        "Collaborated with designers to create a seamless user experience across mobile and web.",
      ],
    },
    {
      company: "Facebook",
      domain: "Full Stack Developer",
      link: "",
      location: "Menlo Park, California, United States",
      starttime: "Sep 2021",
      endtime: "Dec 2022",
      workperiod: "Full Time",
      language: ["React", "Node.js", "GraphQL"],
      feedback: [
        "Built and maintained responsive front-end applications for a high-traffic platform.",
        "Integrated GraphQL APIs for efficient data fetching across services.",
        "Led a team in implementing a new authentication system for enhanced security.",
        "Collaborated with designers to create a seamless user experience across mobile and web.",
      ],
    },
  ];

  //Blog
  const blogHeading = "MY ARTICLES";
  const subblogHeading = "Personal Blog";
  const blogSector = [
    {
      heading: "How to prototype in figma",
      date: "July 15 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...",
      image: blog1,
    },
    {
      heading: "Being more productive with Notion.",
      date: "Aug 8, 2020",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...",
      image: blog2,
    },
    {
      heading: "Beginners guide to adobe illustrator",
      date: "Feb 19, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...",
      image: blog3,
    },
  ];

  //Testimonial
  const testHeading = "MY CLIENTS";
  const subtestHeading = "Testimonials";
  const testSector = [
    {
      Image: test1,
      content:
        "We were very pleased to hear how you resolved our website's user interface issues and challenges.",
      name: "Amelia Miller",
      work: "Designer",
    },
    {
      Image: test2,
      content:
        "I’m glad I decided to work with you. The project was delivered on time with all the requirements.",
      name: "James Delaney",
      work: "Developer",
    },
    {
      Image: test3,
      content:
        "The management of our projects was always faced with difficulties, but you handled these well.",
      name: "Isabella Bennett",
      work: "Manager",
    },
  ];

  //Eduskills
  const eduskillsHeading = "LEARNING PATH";
  const subeduskillsHeading = "Education & Skills";
  const eduskillsSector = [
    {
      universityName: "Kingston University",
      degree: "Master's degree",
      course: "Software Engineering",
      year: "2019-2021",
    },
    {
      universityName: "Kingston University",
      degree: "Bachelor's degree",
      course: "Computer Engineering",
      year: "2015-2019",
    },
    {
      universityName: "Westminister School",
      degree: "Diploma's degree",
      course: "Mathematics",
      year: "2013-2015",
    },
  ];
  const skillcontent =
    "For 5+ years, I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks, and here you can see a summary of my skills.";
  const skillscore = [
    { skill: "React", percent: 60 },
    { skill: "Angular", percent: 40 },
    { skill: "JavaScript", percent: 80 },
    { skill: "React", percent: 60 },
    { skill: "Angular", percent: 40 },
    { skill: "JavaScript", percent: 80 },
    { skill: "React", percent: 60 },
    { skill: "Angular", percent: 40 },
    { skill: "JavaScript", percent: 80 },
  ];

  return (
    <>
      <Service
        serviceHeading={serviceHeading}
        subServiceHeading={subServiceHeading}
        isDarkMode={isDarkMode}
        ServiceSector={ServiceSector}
      />
      <Portfolio
        portfolioHeading={portfolioHeading}
        subportfolioHeading={subportfolioHeading}
        isDarkMode={isDarkMode}
        PortfolioSector={PortfolioSector}
        toggleTheme={toggleTheme}
      />
      <Experience
        experienceHeading={experienceHeading}
        subexperienceHeading={subexperienceHeading}
        isDarkMode={isDarkMode}
        WorkExperience={WorkExperience}
      />
      <Blog
        blogHeading={blogHeading}
        subblogHeading={subblogHeading}
        isDarkMode={isDarkMode}
        blogSector={blogSector}
      />
      <Testimonial
        testHeading={testHeading}
        subtestHeading={subtestHeading}
        isDarkMode={isDarkMode}
        testSector={testSector}
      />
      <Education
        eduskillsHeading={eduskillsHeading}
        subeduskillsHeading={subeduskillsHeading}
        isDarkMode={isDarkMode}
        eduskillsSector={eduskillsSector}
        skillcontent={skillcontent}
        skillscore={skillscore}
      />
    </>
  );
};

export default bodySection;
