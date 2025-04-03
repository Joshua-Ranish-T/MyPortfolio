import styled from "@emotion/styled";
import { secondaryColor,fontColor,logobgcolor } from "../theme";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const StyledAnchor = styled.a`
  font-size: 19px;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${secondaryColor};
  }

  &:active {
    color: ${secondaryColor};
  }
`;

export const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  color:${fontColor};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 7.5px;
  font-family: Inter;
`;

export const StyledTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  font-family: Inter;
  color: inherit;
`;

export const StyledHead = ({ value, subvalue }) => {
  return (
    <>
      <StyledHeading>
        <RemoveOutlinedIcon />
        {value}
      </StyledHeading>
      <StyledTitle>{subvalue}</StyledTitle>
    </>
  );
};

export const StyledText = styled.div`
  font-size: ${(props) => props.size}px;
  font-weight: 400;
  color: inherit;
`;

export const StyledSocialLinks = ({ Insta, GitHub, X, linkedIn }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        paddingTop: "45px",
      }}
    >
      <StyledAnchor href={Insta}>
        <InstagramIcon />
      </StyledAnchor>
      <StyledAnchor href={GitHub}>
        <GitHubIcon />
      </StyledAnchor>
      <StyledAnchor href={X}>
        <TwitterIcon />
      </StyledAnchor>
      <StyledAnchor href={linkedIn}>
        <LinkedInIcon />
      </StyledAnchor>
    </div>
  );
};


export const StyledBox = styled.div`
  display: flex;
  width: 1200px;
  height: ${(props) => props.height}px;
  flex-direction: row;
  justify-content: space-between;
  gap: ${(props) => props.gap}px;
  align-content: center;
  /* padding-left: 120px;
  padding-right: 120px; */
  flex-wrap: nowrap;
  overflow: auto;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    display: none;
  }

   @media screen and (max-width: 1024px) {
    width: 100%; 
    flex-direction: row; 
    gap: 20px; 
    padding:20px;
  }

  @media screen and (max-width: 768px) {
    width: 105%; 
    flex-direction: ${(props) => props.mobileDirection || "row"};
    gap: 15px; 
    overflow: auto;
    height: auto; 
    padding: 10px;
    align-items:center
  
  }

  @media screen and (max-width: 480px) {
    width: 105%; 
    flex-direction: ${(props) => props.mobileDirection || "row"};  
    gap: 10px; 
    overflow:auto;
    height: auto;
    padding: 10px;
    align-items:center

  }


`;



export const StyledBoxInside = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bgcolor};
  width: 361px; /* Default width */
  height: ${(props) => props.height}px;
  justify-content: center;
  border-radius: 8px;
  gap: ${(props) => props.gap}px;
  align-items: center;
  text-align: center;
 
`;


export const StylingIcon = styled.div`
    width: 56px;
    height: 56px;
    background:${logobgcolor};
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  `;

 export const StyledExperienceData = styled.div`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;


// export const DrawOutlineButton = ({ children = "Click Me", type = "button", ...rest }) => {
//   return (
//     <button
//       {...rest}
//       type={type}
//       className="group relative px-6 py-3 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
//       aria-label={children}
//     >
//       {/* Button Text */}
//       <span className="relative z-10">{children}</span>

//       {/* TOP */}
//       <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-150 ease-in-out group-hover:w-full" />

//       {/* RIGHT */}
//       <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-150 duration-150 ease-in-out group-hover:h-full" />

//       {/* BOTTOM */}
//       <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-300 duration-150 ease-in-out group-hover:w-full" />

//       {/* LEFT */}
//       <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-450 duration-150 ease-in-out group-hover:h-full" />
//     </button>
//   );
// };
