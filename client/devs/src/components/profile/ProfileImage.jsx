import React from 'react';

import { 
  ProfileImg, ProfileImgDiv, ProfileImgEditBtn
} from '../../styledComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const ProfileImage = () => {
  return (
    <>
      <ProfileImgDiv>
        <ProfileImg src="../img/likelion.jpg" />
        <ProfileImgEditBtn>
          <FontAwesomeIcon icon={faPen} />
        </ProfileImgEditBtn>
      </ProfileImgDiv>
    </>
  );
};

export default React.memo(ProfileImage);