import React from 'react';

import { 
  ProfileImg, ProfileImgDiv, ProfileImgEditBtn
} from '../../styledComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';

const ProfileImage = ({ setPopup }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onClick = () => {
    // navigate(`${location.pathname}/image`)
    setPopup(true);
  }
  return (
    <>
      <ProfileImgDiv>
        <ProfileImg src={require('../../static/likelion.jpg')} />
        <ProfileImgEditBtn>
          <FontAwesomeIcon onClick={onClick} icon={faPen} />
        </ProfileImgEditBtn>
      </ProfileImgDiv>
    </>
  );
};

export default React.memo(ProfileImage);