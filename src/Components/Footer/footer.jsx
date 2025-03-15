import React from 'react'
import { StyledSocialLinks } from '../../StyledComponents/styledComponents'
import './footer.scss';
const footer = ({Insta,GitHub,X,linkedIn,isDarkMode, firstName,
  secondName,}) => {
  return (
    <div className='Footer' data-aos="zoom-in" data-aos-duration="1000">
      <div>
      <StyledSocialLinks 
          Insta={Insta}
          GitHub={GitHub}
          X={X}
          linkedIn={linkedIn}
        />
        </div>
        <p>@ 2025 - {firstName} {secondName}</p>
    </div>
  )
}

export default footer