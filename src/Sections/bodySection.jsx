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
import NeoTutor from "../Assets/NeoTutor.png";
import blog1 from "../Assets/blog1.png";
import blog2 from "../Assets/blog2.png";
import blog3 from "../Assets/blog3.png";
import test1 from "../Assets/test1.jpeg";
import test2 from "../Assets/test2.png";
import test3 from "../Assets/test3.jpeg";
import Login from "../Assets/LoginPage.png"
import AI from "../Assets/AiArt.png"
import DocuChat from "../Assets/Docuchat.png"
import n8nproj from "../Assets/n8nproj.png"
import certvault from "../Assets/certvault.png"

//Images
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import react from "../Assets/react.png";
import java from "../Assets/java.png";
import firebase from "../Assets/firebase.png";
import python from "../Assets/python.png";
import node from "../Assets/node.png";
import aws from "../Assets/aws.png";
import cpp from "../Assets/c++.png";
import colab from "../Assets/colab.png";
import figma from "../Assets/figma.png";
import git from "../Assets/git.png";
import vscode from "../Assets/vscode.png";
import github from "../Assets/github.png";
import gns3 from "../Assets/gns3.png";
import mongo from "../Assets/mongo.png";
import npm from "../Assets/npm.png";
import sass from "../Assets/sass.png";
import bootstrap from "../Assets/bootstrap.png";
import streamlit from "../Assets/streamlit.png";
import express from "../Assets/express-js.png";
import langchain from "../Assets/langchain.png";
import huggingface from "../Assets/huggingface.png";
import chroma from "../Assets/chroma.png";
// import vercel from "../Assets/vercel.png";
import langgraph from "../Assets/langgraph.png";
import salesforce from "../Assets/salesforce.png";
import mysql from "../Assets/mysql.png";
import n8n from "../Assets/n8n.png";
import docker from "../Assets/docker.png";

const bodySection = ({
  toggleTheme,
  isDarkMode,
}) => {
  // Services
  const serviceHeading = "Services";
  const subServiceHeading = "Specialized in";
  const ServiceSector = [
    {
      icon: <LayersOutlinedIcon sx={{ color: secondaryColor }} />,
      title: "AI Application Development",
      description:
        "Creating smart AI systems using LLMs, RAG, and modern ML tools to solve real-world problems effectively.",
    },
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
      title: "Problem Solving",
      description:
        "Tackling complex coding challenges with clear logic and efficient solutions across platforms like LeetCode.",
    },
    {
      icon: <LanguageIcon sx={{ color: secondaryColor }} />,
      title: "Web Development",
      description:
        "Building fast, clean, and responsive web interfaces with React and modern UI frameworks.",
    },
  ];

  // Portfolios
  const portfolioHeading = "MY WORKS";
  const subportfolioHeading = "Featured Portfolios";
  const PortfolioSector = [
    {
      title: "Neo — AI Tutor with Animated Explanations",
      domain: "AI · ML · LLMs",
      image: NeoTutor,
      link: "https://github.com/Joshua-Ranish-T/AI-Tutor-Manim-Video-Generation"
    },
    {
      title: "DocuChat AI — RAG-Based Chatbot",
      domain: "AI · ML · NLP",
      image: DocuChat,
      link: "https://github.com/Joshua-Ranish-T/DocuChat_AI-RAG"
    },
    {
      title: "CertVault — Immutable Certification Vault",
      domain: "Blockchain · Web3",
      image: certvault,
      link: "https://github.com/Joshua-Ranish-T/CertVault-Web3"
    },
    {
      title: "n8n AI Agent Project",
      domain: "AI · Automation",
      image: n8nproj,
      link: ""
    },
    {
      title: "AI-Art Interpreter",
      domain: "AI · Computer Vision",
      image: AI,
      link: "https://github.com/Joshua-Ranish-T/AI-Art_Interpreter"
    },
    {
      title: "Nexcent — Basic Web App",
      domain: "React.js · UI/UX",
      image: Nexcent,
      link: "https://github.com/Joshua-Ranish-T/Nexcent-React-basic"
    },
    {
      title: "Real-Time Chat Application",
      domain: "React.js · Firebase · Real-Time",
      image: chatAppImage,
      link: "https://github.com/Joshua-Ranish-T/ChatApp-ReactJs-Firebase"
    },
    {
      title: "Login / SignUp Page (Formik + Validation)",
      domain: "React.js · Formik · Validation",
      image: Login,
      link: "https://github.com/Joshua-Ranish-T/React-Formik-Yup-Toastify-login_signup_Page"
    },
    {
      title: "VPN Implementation — Networking Project (Simulation)",
      domain: "Networking · Simulation",
      image: VPN,
      link: ""
    }
  ];



  //Experience
  const experienceHeading = "CAREER PATH";
  const subexperienceHeading = "PROFESSIONAL Experience";
  const WorkExperience = [
    {
      company: "Icanio Technologies",
      domain: "AIML Intern",
      link: "https://icanio.com/",
      location: "Tirunelveli, Tamil Nadu",
      starttime: "May 2025",
      endtime: "Jun 2025",
      workperiod: "On-Site",
      language: [
        "Python", "Flask", "ML/DL",
        "Transformers",
        "LangChain", "LangGraph", "ChromaDB"
      ],
      feedback: [
        "Completed comprehensive training in Python, Flask, ML, DL, NLP, and transformer-based architectures.",
        "Designed and deployed end-to-end LLM applications using LangChain, LangGraph, OpenAI, Gemini, and Hugging Face.",
        "Developed RAG-based chatbots with Chroma vector database integration.",
        "Gained practical experience implementing modern AI workflows and production-ready pipelines."
      ]
    },
    {
      company: "Icanio Technologies",
      domain: "Front-end Developer Intern",
      link: "https://icanio.com/",
      location: "Tirunelveli, Tamil Nadu",
      starttime: "Nov 2024",
      endtime: "Dec 2024",
      workperiod: "On-Site",
      language: ["React Js", "Formik", "YUP", "Material-UI", "SCSS/CSS", "AOS"],
      feedback: [
        "Built reusable UI components with React.js, Material-UI, SCSS, and Tailwind CSS.",
        "Integrated Formik, Yup, and Toastify for seamless form validation and user feedback.",
        "Improved application responsiveness, stability, and performance optimization.",
        "Enhanced development workflow, ensuring efficient project execution."
      ]
    },
    {
      company: "Rishon Communication",
      domain: "Networking Intern",
      link: "https://www.rishoncomm.in/about-us.html",
      location: "Tirunelveli, Tamil Nadu",
      starttime: "May 2024",
      endtime: "Jun 2024",
      workperiod: "Hybrid",
      language: ["MPLS", "OSPF", "MP-iBGP", "BGP", "Subnetting", "Dynamic Routing", "GNS3"],
      feedback: [
        "Configured VPN networks with MPLS, OSPF, and MP-iBGP in GNS3 for secure transmission.",
        "Conducted manual tests to ensure seamless connectivity and high availability.",
        "Implemented BGP peering, subnetting, and static routing to enhance network performance.",
        "Gained hands-on experience in network protocols, troubleshooting, and configuration."
      ]
    }
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
  const testHeading = "TESTIMONIALS";
  const subtestHeading = "What Others Say";
  const testSector = [

    {
      Image: test2,
      content:
        "Collaborating with him on networking tasks was great. His VPN expertise made complex setups easier.",
      name: "Dudley Daniel Raj, Teammate",
      work: "Networking Intern, Rishon Communication",
    },
    {
      Image: test1,
      content:
        "A dedicated front-end developer with strong React skills and a focus on performance optimization.",
      name: "K. Vinoth Raja",
      work: "Reporting Manager, Icanio Technologies",
    },
    {
      Image: test3,
      content:
        "Working with him on AI applications was insightful. His problem-solving and model optimization had a real impact.",
      name: "Kandiah C, Colleague",
      work: "AI Development Team",
    }

  ];


  //Eduskills
  const eduskillsHeading = "LEARNING PATH";
  const subeduskillsHeading = "Education & Skills";
  const eduskillsSector = [
    {
      universityName: "Chennai Institute Of Technology",
      degree: "B.Tech",
      course: "Information Technology",
      year: "2023-2027",
    },
    {
      universityName: "RoseMary School",
      degree: "HSC",
      course: "Computer Science",
      year: "2021-2023",
    },
    {
      universityName: "RoseMary School",
      degree: "SSLC",
      course: "Mathematics",
      year: "2019-2021",
    },
  ];
  // const skillcontent =
  // "I have been actively exploring and mastering front-end and AI-driven technologies, building responsive web applications, optimizing performance, and integrating intelligent solutions. Here’s a snapshot of my technical expertise and skills.";
  const skillscore = [
    {
      Name: "Programming Languages",
      Logo: [java, cpp, python],
    },
    {
      Name: "Front-End",
      Logo: [html, css, js, sass, bootstrap, react, streamlit],
    },
    {
      Name: "Back-End",
      Logo: [mysql, firebase, express, node, mongo],
    },
    {
      Name: "Artificial Intelligence",
      Logo: [langchain, huggingface, chroma, langgraph, n8n],
    },
    {
      Name: "Tools",
      Logo: [colab, salesforce, figma, git, github, vscode, gns3, npm, aws, docker],
    },
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
      {/* <Blog
        blogHeading={blogHeading}
        subblogHeading={subblogHeading}
        isDarkMode={isDarkMode}
        blogSector={blogSector}
      /> */}
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
        skillscore={skillscore}
      />
    </>
  );
};

export default bodySection;
